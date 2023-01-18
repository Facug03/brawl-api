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
    15000050: { type: 'string[]' },
    15000026: { type: 'string[]' },
    15000051: { type: 'string[]' },
    15000082: { type: 'string[]' },
    15000005: { type: 'string[]' },
    15000054: { type: 'string[]' },
    15000007: { type: 'string[]' },
    15000008: { type: 'string[]' },
    15000115: { type: 'string[]' },
    15000137: { type: 'string[]' },
    15000019: { type: 'string[]' },
    15000072: { type: 'string[]' },
    15000300: { type: 'string[]' },
    15000527: { type: 'string[]' },
    15000306: { type: 'string[]' },
    15000548: { type: 'string[]' },
    15000367: { type: 'string[]' },
    15000368: { type: 'string[]' },
    15000014: { type: 'string[]' },
    15000101: { type: 'string[]' },
    15000013: { type: 'string[]' },
    15000043: { type: 'string[]' },
    15000033: { type: 'string[]' },
    15000032: { type: 'string[]' },
    15000016: { type: 'string[]' },
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
    for (let player of brawlersVictory[brawl]) {
      const brawlerResult = await repository
        .search()
        .where('name')
        .equals(player)
        .return.first()

      if (brawlerResult) {
        const brawlEdit = await repository.fetch(brawlerResult.entityId)

        brawlEdit[brawl] = [
          (Number(brawlEdit[brawl][0]) + 1).toString(),
          brawlEdit[brawl][1],
        ]

        await repository.save(brawlEdit)
      } else {
        await repository.createAndSave({
          name: player,
          15000050: ['0', '0'],
          15000026: ['0', '0'],
          15000051: ['0', '0'],
          15000082: ['0', '0'],
          15000005: ['0', '0'],
          15000054: ['0', '0'],
          15000007: ['0', '0'],
          15000008: ['0', '0'],
          15000115: ['0', '0'],
          15000137: ['0', '0'],
          15000019: ['0', '0'],
          15000072: ['0', '0'],
          15000300: ['0', '0'],
          15000527: ['0', '0'],
          15000306: ['0', '0'],
          15000548: ['0', '0'],
          15000367: ['0', '0'],
          15000368: ['0', '0'],
          15000014: ['0', '0'],
          15000101: ['0', '0'],
          15000013: ['0', '0'],
          15000043: ['0', '0'],
          15000033: ['0', '0'],
          15000032: ['0', '0'],
          15000016: ['0', '0'],
          [brawl]: ['1', '0'],
        })
      }
    }
  }

  for (let brawl in brawlersDefeat) {
    for (let player of brawlersDefeat[brawl]) {
      const brawlerResult = await repository
        .search()
        .where('name')
        .equals(player)
        .return.first()

      if (brawlerResult) {
        const brawlEdit = await repository.fetch(brawlerResult.entityId)

        brawlEdit[brawl] = [
          brawlEdit[brawl][0],
          (Number(brawlEdit[brawl][1]) + 1).toString(),
        ]

        await repository.save(brawlEdit)
      } else {
        await repository.createAndSave({
          name: player,
          15000050: ['0', '0'],
          15000026: ['0', '0'],
          15000051: ['0', '0'],
          15000082: ['0', '0'],
          15000005: ['0', '0'],
          15000054: ['0', '0'],
          15000007: ['0', '0'],
          15000008: ['0', '0'],
          15000115: ['0', '0'],
          15000137: ['0', '0'],
          15000019: ['0', '0'],
          15000072: ['0', '0'],
          15000300: ['0', '0'],
          15000527: ['0', '0'],
          15000306: ['0', '0'],
          15000548: ['0', '0'],
          15000367: ['0', '0'],
          15000368: ['0', '0'],
          15000014: ['0', '0'],
          15000101: ['0', '0'],
          15000013: ['0', '0'],
          15000043: ['0', '0'],
          15000033: ['0', '0'],
          15000032: ['0', '0'],
          15000016: ['0', '0'],
          [brawl]: ['0', '1'],
        })
      }
    }
  }
  // for (let brawl of brawlersVictory) {
  //   const brawlerResult = await repository
  //     .search()
  //     .where('name')
  //     .equals(brawl)
  //     .return.first()

  //   if (brawlerResult) {
  //     const brawlEdit = await repository.fetch(brawlerResult.entityId)
  //     console.log(brawlEdit.victories)
  //     brawlEdit.victories = brawlEdit.victories + 1

  //     await repository.save(brawlEdit)
  //   } else {
  //     await repository.createAndSave({
  //       name: brawl,
  //       victories: 1,
  //       defeats: 0,
  //     })
  //   }
  // }

  // for (let brawl of brawlersDefeat) {
  //   const brawlerResult = await repository
  //     .search()
  //     .where('name')
  //     .equals(brawl)
  //     .return.first()

  //   if (brawlerResult) {
  //     const brawlEdit = await repository.fetch(brawlerResult.entityId)

  //     brawlEdit.defeats = brawlEdit.defeats + 1

  //     await repository.save(brawlEdit)
  //   } else {
  //     await repository.createAndSave({
  //       name: brawl,
  //       victories: 0,
  //       defeats: 1,
  //     })
  //   }
  // }

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
