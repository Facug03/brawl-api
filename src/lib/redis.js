import { Client, Entity, Schema } from 'redis-om'

const client = new Client()
async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
  }
}

class Brawler extends Entity {}

const brawlerSchema = new Schema(
  Brawler,
  {
    name: { type: 'string' },
    15000019: { type: 'string[]' },
    15000018: { type: 'string[]' },
    15000053: { type: 'string[]' },
    15000306: { type: 'string[]' },
    15000300: { type: 'string[]' },
    15000294: { type: 'string[]' },
    15000367: { type: 'string[]' },
    15000548: { type: 'string[]' },
    15000368: { type: 'string[]' },
    15000623: { type: 'string[]' },
    15000634: { type: 'string[]' },
    15000471: { type: 'string[]' },
    15000007: { type: 'string[]' },
    15000115: { type: 'string[]' },
    15000636: { type: 'string[]' },
    15000160: { type: 'string[]' },
    15000051: { type: 'string[]' },
    15000024: { type: 'string[]' },
    15000015: { type: 'string[]' },
    15000032: { type: 'string[]' },
    15000045: { type: 'string[]' },
    15000123: { type: 'string[]' },
    15000016: { type: 'string[]' },
    15000033: { type: 'string[]' },
    15000101: { type: 'string[]' },
    15000430: { type: 'string[]' },
  },
  {
    dataStructure: 'JSON',
  },
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

  for (const brawl in brawlersVictory) {
    const result = {}
    brawlersVictory[brawl].forEach((el) => (result[el] = result[el] + 1 || 1))

    const brawlersVic = brawlersVictory[brawl].filter((el, index) => brawlersVictory[brawl].indexOf(el) === index)

    await Promise.all(
      brawlersVic.map(async (player) => {
        const brawlerResult = await repository.search().where('name').equals(player).return.first()

        if (brawlerResult) {
          const brawlEdit = await repository.fetch(brawlerResult.entityId)

          brawlEdit[brawl] = [(Number(brawlEdit[brawl][0]) + result[player]).toString(), brawlEdit[brawl][1]]

          await repository.save(brawlEdit)
        } else {
          await repository.createAndSave({
            name: player,
            15000019: ['0', '5'],
            15000018: ['0', '5'],
            15000053: ['0', '5'],
            15000306: ['0', '5'],
            15000300: ['0', '5'],
            15000294: ['0', '5'],
            15000367: ['0', '5'],
            15000548: ['0', '5'],
            15000368: ['0', '5'],
            15000623: ['0', '5'],
            15000634: ['0', '5'],
            15000471: ['0', '5'],
            15000007: ['0', '5'],
            15000115: ['0', '5'],
            15000636: ['0', '5'],
            15000160: ['0', '5'],
            15000051: ['0', '5'],
            15000024: ['0', '5'],
            15000015: ['0', '5'],
            15000032: ['0', '5'],
            15000045: ['0', '5'],
            15000123: ['0', '5'],
            15000016: ['0', '5'],
            15000033: ['0', '5'],
            15000101: ['0', '5'],
            15000430: ['0', '5'],
            [brawl]: [result[player].toString(), '5'],
          })
        }
      }),
    )
  }

  for (const brawl in brawlersDefeat) {
    const result = {}
    brawlersDefeat[brawl].forEach((el) => (result[el] = result[el] + 1 || 1))

    const brawlersDef = brawlersDefeat[brawl].filter((el, index) => brawlersDefeat[brawl].indexOf(el) === index)

    await Promise.all(
      brawlersDef.map(async (player) => {
        const brawlerResult = await repository.search().where('name').equals(player).return.first()

        if (brawlerResult) {
          const brawlEdit = await repository.fetch(brawlerResult.entityId)

          brawlEdit[brawl] = [brawlEdit[brawl][0], (Number(brawlEdit[brawl][1]) + result[player]).toString()]

          await repository.save(brawlEdit)
        } else {
          await repository.createAndSave({
            name: player,
            15000019: ['0', '5'],
            15000018: ['0', '5'],
            15000053: ['0', '5'],
            15000306: ['0', '5'],
            15000300: ['0', '5'],
            15000294: ['0', '5'],
            15000367: ['0', '5'],
            15000548: ['0', '5'],
            15000368: ['0', '5'],
            15000623: ['0', '5'],
            15000634: ['0', '5'],
            15000471: ['0', '5'],
            15000007: ['0', '5'],
            15000115: ['0', '5'],
            15000636: ['0', '5'],
            15000160: ['0', '5'],
            15000051: ['0', '5'],
            15000024: ['0', '5'],
            15000015: ['0', '5'],
            15000032: ['0', '5'],
            15000045: ['0', '5'],
            15000123: ['0', '5'],
            15000016: ['0', '5'],
            15000033: ['0', '5'],
            15000101: ['0', '5'],
            15000430: ['0', '5'],
            [brawl]: ['0', '5'],
          })
        }
      }),
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
