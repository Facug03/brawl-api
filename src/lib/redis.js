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
    15000013: { type: 'string[]' },
    15000033: { type: 'string[]' },
    15000043: { type: 'string[]' },
    15000093: { type: 'string[]' },
    15000095: { type: 'string[]' },
    15000196: { type: 'string[]' },
    15000228: { type: 'string[]' },
    15000352: { type: 'string[]' },
    15000025: { type: 'string[]' },
    15000338: { type: 'string[]' },
    15000024: { type: 'string[]' },
    15000636: { type: 'string[]' },
    15000499: { type: 'string[]' },
    15000678: { type: 'string[]' },
    15000548: { type: 'string[]' },
    15000368: { type: 'string[]' },
    15000679: { type: 'string[]' },
    15000527: { type: 'string[]' },
    15000300: { type: 'string[]' },
    15000680: { type: 'string[]' },
    15000676: { type: 'string[]' },
    15000217: { type: 'string[]' },
    15000072: { type: 'string[]' },
    15000005: { type: 'string[]' },
    15000695: { type: 'string[]' },
    15000696: { type: 'string[]' },
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
            15000013: ['0', '5'],
            15000033: ['0', '5'],
            15000043: ['0', '5'],
            15000093: ['0', '5'],
            15000095: ['0', '5'],
            15000196: ['0', '5'],
            15000228: ['0', '5'],
            15000352: ['0', '5'],
            15000025: ['0', '5'],
            15000338: ['0', '5'],
            15000024: ['0', '5'],
            15000636: ['0', '5'],
            15000499: ['0', '5'],
            15000678: ['0', '5'],
            15000548: ['0', '5'],
            15000368: ['0', '5'],
            15000679: ['0', '5'],
            15000527: ['0', '5'],
            15000300: ['0', '5'],
            15000680: ['0', '5'],
            15000676: ['0', '5'],
            15000217: ['0', '5'],
            15000072: ['0', '5'],
            15000005: ['0', '5'],
            15000695: ['0', '5'],
            15000696: ['0', '5'],
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
            15000013: ['0', '5'],
            15000033: ['0', '5'],
            15000043: ['0', '5'],
            15000093: ['0', '5'],
            15000095: ['0', '5'],
            15000196: ['0', '5'],
            15000228: ['0', '5'],
            15000352: ['0', '5'],
            15000025: ['0', '5'],
            15000338: ['0', '5'],
            15000024: ['0', '5'],
            15000636: ['0', '5'],
            15000499: ['0', '5'],
            15000678: ['0', '5'],
            15000548: ['0', '5'],
            15000368: ['0', '5'],
            15000679: ['0', '5'],
            15000527: ['0', '5'],
            15000300: ['0', '5'],
            15000680: ['0', '5'],
            15000676: ['0', '5'],
            15000217: ['0', '5'],
            15000072: ['0', '5'],
            15000005: ['0', '5'],
            15000695: ['0', '5'],
            15000696: ['0', '5'],
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

  console.log({ brawlers })

  return brawlers
}
