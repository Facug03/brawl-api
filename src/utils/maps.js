export function mostUsedInMaps(brawlers, maps) {
  let mapsFilter = {}

  brawlers.forEach((brawler) => {
    for (const brawl in brawler.entityFields) {
      if (maps.some((map) => map === brawl)) {
        const sum = brawler[brawl].reduce((a, b) => Number(a) + Number(b), 0)

        mapsFilter = {
          ...mapsFilter,
          [brawl]: [...(mapsFilter[brawl] || []), { name: brawler.name, used: sum }],
        }
      }
    }
  })

  for (const map in mapsFilter) {
    mapsFilter[map] = mapsFilter[map].sort((a, b) => b.used - a.used).slice(0, 10)
  }

  return mapsFilter
}

export function mostUsedBrawlers(brawlers, maps) {
  const brawlersFilter = brawlers.map((brawler) => {
    let brawlerFilter = { name: brawler.name, used: 0 }

    for (const brawl in brawler.entityFields) {
      if (maps.some((map) => map === brawl)) {
        const used = brawler[brawl].reduce((a, b) => Number(a) + Number(b), 0) + brawlerFilter.used
        brawlerFilter = { ...brawlerFilter, used }
      }
    }

    return brawlerFilter
  })

  return brawlersFilter.sort((a, b) => b.used - a.used)
}

export function bestBrawlersInMaps(arr) {
  const brawlers = {
    15000019: [],
    15000018: [],
    15000053: [],
    15000306: [],
    15000300: [],
    15000294: [],
    15000367: [],
    15000548: [],
    15000368: [],
    15000623: [],
    15000634: [],
    15000471: [],
    15000007: [],
    15000115: [],
    15000636: [],
    15000160: [],
    15000051: [],
    15000024: [],
    15000015: [],
    15000032: [],
    15000045: [],
    15000123: [],
    15000016: [],
    15000033: [],
    15000101: [],
    15000430: [],
  }

  for (const brawl in brawlers) {
    arr.forEach((ar) => {
      if (ar[brawl][0] !== '0' || ar[brawl][1] !== '0') {
        brawlers[brawl] = [
          ...brawlers[brawl],
          {
            name: ar.name,
            winRate: Math.round((Number(ar[brawl][0]) / (Number(ar[brawl][0]) + Number(ar[brawl][1]))) * 100),
          },
        ]
          .sort((a, b) => b.winRate - a.winRate)
          .slice(0, 10)
      }
    })
  }

  return brawlers
}

export function BestBrawlers(brawlers, maps) {
  const brawlersFilter = brawlers.map((brawler) => {
    let brawlerFilter = { name: brawler.name, vic: 0, def: 0 }

    for (const brawl in brawler.entityFields) {
      if (maps.some((map) => map === brawl)) {
        const vic = Number(brawler[brawl][0]) + Number(brawlerFilter.vic)
        const def = Number(brawler[brawl][1]) + Number(brawlerFilter.def)
        brawlerFilter = { ...brawlerFilter, vic, def }
      }
    }
    return brawlerFilter
  })

  const bestBrawlers = brawlersFilter.map((brawl) => {
    return {
      name: brawl.name,
      winRate: Math.round((brawl.vic / (brawl.vic + brawl.def)) * 100),
    }
  })

  return bestBrawlers.sort((a, b) => b.winRate - a.winRate)
}

export const showdown = [
  {
    name: 'showdown',
    maps: [
      { name: 'Rockwall Brawl', id: '15000015' },
      { name: 'Acid Lakes', id: '15000032' },
      { name: 'Island Invasion', id: '15000045' },
      { name: 'Flying Fantasies', id: '15000123' },
      { name: 'Feast or Famine', id: '15000016' },
      { name: 'Cavern Churn', id: '15000033' },
      { name: 'Dark Passage', id: '15000101' },
      { name: 'Dried Up River', id: '15000430' },
    ],
  },
]

export const modes = [
  {
    name: 'brawlBall',
    maps: [
      { name: 'Field Goal', id: '15000160' },
      { name: 'Super Beach', id: '15000051' },
      { name: 'Backyard Bowl', id: '15000024' },
    ],
  },
  {
    name: 'gemGrab',
    maps: [
      { name: 'Hard Rock Mine', id: '15000007' },
      { name: 'Double Swoosh', id: '15000115' },
      { name: 'Last Stop', id: '15000636' },
    ],
  },
  {
    name: 'wipeout',
    maps: [
      { name: 'Shooting Star', id: '15000623' },
      { name: 'Layer Bake', id: '15000634' },
      { name: 'Infinite Doom', id: '15000471' },
    ],
  },
  {
    name: 'knockout',
    maps: [
      { name: 'Goldarm Gulch', id: '15000367' },
      { name: 'Out in the Open', id: '15000548' },
      { name: 'Belles Rock', id: '15000368' },
    ],
  },
  {
    name: 'hotZone',
    maps: [
      { name: 'Dueling Beetles', id: '15000306' },
      { name: 'Ring Of Fire', id: '15000300' },
      { name: 'Split', id: '15000294' },
    ],
  },
  {
    name: 'heist',
    maps: [
      { name: 'Safe Zone', id: '15000019' },
      { name: 'Kaboom Canyon', id: '15000018' },
      { name: 'Hot Potato', id: '15000053' },
    ],
  },
]

export const vsMaps = modes.reduce((acc, act) => {
  const ids = act.maps.map((map) => map.id)

  return ids.concat(acc)
}, [])

export const showdownMaps = showdown[0].maps.map((map) => map.id)

export function createEmptyBrawlersObject(vsMaps, showdownMaps) {
  const brawlers = {}

  vsMaps.forEach((mapId) => {
    const map = modes.find((mode) => mode.maps.some((m) => m.id === mapId))
    if (map) {
      map.maps.forEach((mapData) => {
        if (!brawlers[mapData.id]) {
          brawlers[mapData.id] = []
        }
      })
    }
  })

  showdownMaps.forEach((mapId) => {
    const map = showdown[0].maps.find((m) => m.id === mapId)
    if (map) {
      if (!brawlers[map.id]) {
        brawlers[map.id] = []
      }
    }
  })

  return brawlers
}

// Example usage:
// const emptyBrawlers = createEmptyBrawlersObject(vsMaps, showdownMaps)
// console.log(emptyBrawlers)
// console.log(emptyBrawlers['15000160'])
// console.log(emptyBrawlers['15000014'])
