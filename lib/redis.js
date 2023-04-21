import { Client, Entity, Schema } from 'redis-om'

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
    // victories: { type: 'number', sortable: true },
    // defeats: { type: 'number' },
    15000578: { type: 'string[]' },
    15000005: { type: 'string[]' },
    15000054: { type: 'string[]' },
    15000115: { type: 'string[]' },
    15000007: { type: 'string[]' },
    15000147: { type: 'string[]' },
    15000586: { type: 'string[]' },
    15000018: { type: 'string[]' },
    15000019: { type: 'string[]' },
    15000143: { type: 'string[]' },
    15000026: { type: 'string[]' },
    15000592: { type: 'string[]' },
    15000587: { type: 'string[]' },
    15000294: { type: 'string[]' },
    15000300: { type: 'string[]' },
    15000368: { type: 'string[]' },
    15000440: { type: 'string[]' },
    15000548: { type: 'string[]' },
    15000043: { type: 'string[]' },
    15000589: { type: 'string[]' },
    15000582: { type: 'string[]' },
    15000016: { type: 'string[]' },
    15000015: { type: 'string[]' },
    15000014: { type: 'string[]' },
    15000013: { type: 'string[]' },
    15000032: { type: 'string[]' },
    15000101: { type: 'string[]' },
    15000033: { type: 'string[]' },
    15000093: { type: 'string[]' },
    15000105: { type: 'string[]' },
    15000109: { type: 'string[]' },
    15000272: { type: 'string[]' },
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

  const { brawlersVictory, brawlersDefeat } = brawler

  const repository = client.fetchRepository(brawlerSchema)

  for (let brawl in brawlersVictory) {
    const result = {}
    brawlersVictory[brawl].forEach((el) => (result[el] = result[el] + 1 || 1))

    const brawlersVic = brawlersVictory[brawl].filter(
      (el, index) => brawlersVictory[brawl].indexOf(el) === index
    )

    const res = await Promise.all(
      brawlersVic.map(async (player) => {
        const brawlerResult = await repository
          .search()
          .where('name')
          .equals(player)
          .return.first()

        if (brawlerResult) {
          const brawlEdit = await repository.fetch(brawlerResult.entityId)

          brawlEdit[brawl] = [
            (Number(brawlEdit[brawl][0]) + result[player]).toString(),
            brawlEdit[brawl][1],
          ]

          await repository.save(brawlEdit)
        } else {
          await repository.createAndSave({
            name: player,
            15000578: ['0', '0'],
            15000005: ['0', '0'],
            15000054: ['0', '0'],
            15000115: ['0', '0'],
            15000007: ['0', '0'],
            15000147: ['0', '0'],
            15000586: ['0', '0'],
            15000018: ['0', '0'],
            15000019: ['0', '0'],
            15000143: ['0', '0'],
            15000026: ['0', '0'],
            15000592: ['0', '0'],
            15000587: ['0', '0'],
            15000294: ['0', '0'],
            15000300: ['0', '0'],
            15000368: ['0', '0'],
            15000440: ['0', '0'],
            15000548: ['0', '0'],
            15000043: ['0', '0'],
            15000589: ['0', '0'],
            15000582: ['0', '0'],
            15000016: ['0', '0'],
            15000015: ['0', '0'],
            15000014: ['0', '0'],
            15000013: ['0', '0'],
            15000032: ['0', '0'],
            15000101: ['0', '0'],
            15000033: ['0', '0'],
            15000093: ['0', '0'],
            15000105: ['0', '0'],
            15000109: ['0', '0'],
            15000272: ['0', '0'],
            [brawl]: [result[player].toString(), '0'],
          })
        }
      })
    )
  }

  for (let brawl in brawlersDefeat) {
    const result = {}
    brawlersDefeat[brawl].forEach((el) => (result[el] = result[el] + 1 || 1))

    const brawlersDef = brawlersDefeat[brawl].filter(
      (el, index) => brawlersDefeat[brawl].indexOf(el) === index
    )

    const res = await Promise.all(
      brawlersDef.map(async (player) => {
        const brawlerResult = await repository
          .search()
          .where('name')
          .equals(player)
          .return.first()

        if (brawlerResult) {
          const brawlEdit = await repository.fetch(brawlerResult.entityId)

          brawlEdit[brawl] = [
            brawlEdit[brawl][0],
            (Number(brawlEdit[brawl][1]) + result[player]).toString(),
          ]

          await repository.save(brawlEdit)
        } else {
          await repository.createAndSave({
            name: player,
            15000578: ['0', '0'],
            15000005: ['0', '0'],
            15000054: ['0', '0'],
            15000115: ['0', '0'],
            15000007: ['0', '0'],
            15000147: ['0', '0'],
            15000586: ['0', '0'],
            15000018: ['0', '0'],
            15000019: ['0', '0'],
            15000143: ['0', '0'],
            15000026: ['0', '0'],
            15000592: ['0', '0'],
            15000587: ['0', '0'],
            15000294: ['0', '0'],
            15000300: ['0', '0'],
            15000368: ['0', '0'],
            15000440: ['0', '0'],
            15000548: ['0', '0'],
            15000043: ['0', '0'],
            15000589: ['0', '0'],
            15000582: ['0', '0'],
            15000016: ['0', '0'],
            15000015: ['0', '0'],
            15000014: ['0', '0'],
            15000013: ['0', '0'],
            15000032: ['0', '0'],
            15000101: ['0', '0'],
            15000033: ['0', '0'],
            15000093: ['0', '0'],
            15000105: ['0', '0'],
            15000109: ['0', '0'],
            15000272: ['0', '0'],
            [brawl]: ['0', result[player].toString()],
          })
        }
      })
    )
  }

  return { res: 'Brawlers updated correctly' }
}

export async function getBrawlers() {
  await connect()

  const repository = client.fetchRepository(brawlerSchema)

  const brawlers = await repository.search().return.all()

  return brawlers
}
