export function mostUsedInMaps(brawlers, maps) {
  const mapsFilter = {}

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
    const brawlerFilter = { name: brawler.name, used: 0 }

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
    15000160: [],
    15000026: [],
    15000118: [],
    15000007: [],
    15000115: [],
    15000008: [],
    15000617: [],
    15000054: [],
    15000005: [],
    15000367: [],
    15000440: [],
    15000368: [],
    15000306: [],
    15000300: [],
    15000527: [],
    15000019: [],
    15000018: [],
    15000137: [],
    15000014: [],
    15000043: [],
    15000032: [],
    15000016: [],
    15000045: [],
    15000015: [],
    15000123: [],
    15000033: [],
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
    const brawlerFilter = { name: brawler.name, vic: 0, def: 0 }

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

export const showdownMaps = [
  '15000014',
  '15000043',
  '15000032',
  '15000016',
  '15000045',
  '15000015',
  '15000123',
  '15000033',
]

export const showdown = [
  {
    name: 'showdown',
    maps: [
      { name: 'Scorched Stone', id: '15000014' },
      { name: 'Double Trouble', id: '15000043' },
      { name: 'Acid Lakes', id: '15000032' },
      { name: 'Feast or Famine', id: '15000016' },
      { name: 'Island Invasion', id: '15000045' },
      { name: 'Cavern Churn', id: '15000033' },
      { name: 'Rockwall Brawl', id: '15000015' },
      { name: 'Flying Fantasies', id: '15000123' },
    ],
  },
]

export const vsMaps = [
  '15000160',
  '15000026',
  '15000118',
  '15000007',
  '15000115',
  '15000008',
  '15000617',
  '15000054',
  '15000005',
  '15000367',
  '15000440',
  '15000368',
  '15000306',
  '15000300',
  '15000527',
  '15000019',
  '15000018',
  '15000137',
]

export const modes = [
  {
    name: 'brawlBall',
    maps: [
      { name: 'Field Goal', id: '15000160' },
      { name: 'Pinhole Punt', id: '15000026' },
      { name: 'Pinball Dreams', id: '15000118' },
    ],
  },
  {
    name: 'gemGrab',
    maps: [
      { name: 'Hard Rock Mine', id: '15000007' },
      { name: 'Double Swoosh', id: '15000115' },
      { name: 'Crystal Arcade', id: '15000008' },
    ],
  },
  {
    name: 'bounty',
    maps: [
      { name: 'Infinite Doom', id: '15000617' },
      { name: 'Canal Grande', id: '15000054' },
      { name: 'Shooting Star', id: '15000005' },
    ],
  },
  {
    name: 'knockout',
    maps: [
      { name: 'Goldarm Gulch', id: '15000367' },
      { name: 'Flaring Phoenix', id: '15000440' },
      { name: 'Belles Rock', id: '15000368' },
    ],
  },
  {
    name: 'hotZone',
    maps: [
      { name: 'Dueling Beetles', id: '15000306' },
      { name: 'Ring Of Fire', id: '15000300' },
      { name: 'Open Zone', id: '15000527' },
    ],
  },
  {
    name: 'heist',
    maps: [
      { name: 'Safe Zone', id: '15000019' },
      { name: 'Kaboom Canyon', id: '15000018' },
      { name: 'Pit Stop', id: '15000137' },
    ],
  },
]

export function createEmptyBrawlersObject(vsMaps, showdownMaps) {
  let brawlers = {}

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
