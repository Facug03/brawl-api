import { Client, Entity, Schema, Repository } from 'redis-om'

const client = new Client()
console.log(process.env.REDIS_URL)
async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
  }
}

class Brawler extends Entity {}

let brawlerSchema = new Schema(
  Brawler,
  {
    name: { type: 'string' },
    victories: { type: 'number', sortable: true },
    defeats: { type: 'number' },
  },
  {
    dataStructure: 'JSON',
  }
)

export async function createIndex() {
  await connect()

  const repository = client.fetchRepository(brawlerSchema)

  await repository.createIndex()
}

export async function createBrawler(data) {
  await connect()

  const repository = client.fetchRepository(brawlerSchema)

  const brawler = await repository.createAndSave(data)

  return brawler
}

export async function postBrawlers(brawler) {
  await connect()
  console.log(brawler)
  const { brawlersVictory, brawlersDefeat } = brawler

  const repository = client.fetchRepository(brawlerSchema)

  for (let brawl of brawlersVictory) {
    const brawlerResult = await repository
      .search()
      .where('name')
      .equals(brawl)
      .return.first()

    if (brawlerResult) {
      const brawlEdit = await repository.fetch(brawlerResult.entityId)
      console.log(brawlEdit.victories)
      brawlEdit.victories = brawlEdit.victories + 1

      await repository.save(brawlEdit)
    } else {
      await repository.createAndSave({
        name: brawl,
        victories: 1,
        defeats: 0,
      })
    }
  }

  for (let brawl of brawlersDefeat) {
    const brawlerResult = await repository
      .search()
      .where('name')
      .equals(brawl)
      .return.first()

    if (brawlerResult) {
      const brawlEdit = await repository.fetch(brawlerResult.entityId)

      brawlEdit.defeats = brawlEdit.defeats + 1

      await repository.save(brawlEdit)
    } else {
      await repository.createAndSave({
        name: brawl,
        victories: 0,
        defeats: 1,
      })
    }
  }

  return { res: 'Brawlers updated correctly' }
}

export async function getBrawlers() {
  await connect()

  const repository = client.fetchRepository(brawlerSchema)

  const brawlers = await repository
    .search()
    .sortDescending('victories')
    .return.page(0, 20)

  return brawlers
}
