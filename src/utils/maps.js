export function mostUsedInMaps(brawlers, maps) {
  let mapsFilter = {}

  brawlers.forEach((brawler) => {
    for (let brawl in brawler.entityFields) {
      if (maps.some((map) => map === brawl)) {
        const sum = brawler[brawl].reduce((a, b) => Number(a) + Number(b), 0)

        mapsFilter = {
          ...mapsFilter,
          [brawl]: [
            ...(mapsFilter[brawl] || []),
            { name: brawler.name, used: sum },
          ],
        }
      }
    }
  })

  for (let map in mapsFilter) {
    mapsFilter[map] = mapsFilter[map]
      .sort((a, b) => b.used - a.used)
      .slice(0, 10)
  }

  return mapsFilter
}

export function mostUsedBrawlers(brawlers, maps) {
  const brawlersFilter = brawlers.map((brawler) => {
    let brawlerFilter = { name: brawler.name, used: 0 }

    for (let brawl in brawler.entityFields) {
      if (maps.some((map) => map === brawl)) {
        const used =
          brawler[brawl].reduce((a, b) => Number(a) + Number(b), 0) +
          brawlerFilter.used
        brawlerFilter = { ...brawlerFilter, used }
      }
    }

    return brawlerFilter
  })

  return brawlersFilter.sort((a, b) => b.used - a.used)
}

export function bestBrawlersInMaps(arr) {
  let brawlers = {
    15000160: [],
    15000026: [],
    15000024: [],
    15000007: [],
    15000010: [],
    15000008: [],
    15000082: [],
    15000083: [],
    15000005: [],
    15000548: [],
    15000440: [],
    15000367: [],
    15000293: [],
    15000300: [],
    15000294: [],
    15000019: [],
    15000018: [],
    15000053: [],
    15000014: [],
    15000013: [],
    15000043: [],
    15000032: [],
    15000016: [],
    15000589: [],
    15000015: [],
    15000123: [],
  }

  for (let brawl in brawlers) {
    arr.forEach((ar) => {
      if (ar[brawl][0] !== '0' || ar[brawl][1] !== '0') {
        brawlers[brawl] = [
          ...brawlers[brawl],
          {
            name: ar.name,
            winRate: Math.round(
              (Number(ar[brawl][0]) /
                (Number(ar[brawl][0]) + Number(ar[brawl][1]))) *
                100
            ),
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

    for (let brawl in brawler.entityFields) {
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
  '15000013',
  '15000043',
  '15000032',
  '15000016',
  '15000589',
  '15000015',
  '15000123',
]

export const showdown = [
  {
    name: 'showdown',
    maps: [
      { name: 'Scorched Stone', id: '15000014' },
      { name: 'Skull Creek', id: '15000013' },
      { name: 'Double Trouble', id: '15000043' },
      { name: 'Acid Lakes', id: '15000032' },
      { name: 'Feast or Famine', id: '15000016' },
      { name: 'Hard Limits', id: '15000589' },
      { name: 'Rockwall Brawl', id: '15000015' },
      { name: 'Flying Fantasies', id: '15000123' },
    ],
  },
]

export const vsMaps = [
  '15000160',
  '15000026',
  '15000024',
  '15000007',
  '15000010',
  '15000008',
  '15000082',
  '15000083',
  '15000005',
  '15000548',
  '15000440',
  '15000367',
  '15000293',
  '15000300',
  '15000294',
  '15000019',
  '15000018',
  '15000053',
]

export const modes = [
  {
    name: 'brawlBall',
    maps: [
      { name: 'Field Goal', id: '15000160' },
      { name: 'Pinhole Punt', id: '15000026' },
      { name: 'Backyard Bowl', id: '15000024' },
    ],
  },
  {
    name: 'gemGrab',
    maps: [
      { name: 'Hard Rock Mine', id: '15000007' },
      { name: 'Gem Fort', id: '15000010' },
      { name: 'Crystal Arcade', id: '15000008' },
    ],
  },
  {
    name: 'bounty',
    maps: [
      { name: 'Layer Cake', id: '15000082' },
      { name: 'Dry Season', id: '15000083' },
      { name: 'Shooting Star', id: '15000005' },
    ],
  },
  {
    name: 'knockout',
    maps: [
      { name: 'Out In The Open', id: '15000548' },
      { name: 'Flaring Phoenix', id: '15000440' },
      { name: 'Goldarm Gulch', id: '15000367' },
    ],
  },
  {
    name: 'hotZone',
    maps: [
      { name: 'Parallel Plays', id: '15000293' },
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

// {
//   name: 'knockout',
//   maps: [
//     { name: 'Out In The Open', id: '15000548' },
//     { name: 'Flaring Phoenix', id: '15000440' },
//     { name: 'Belles Rock', id: '15000368' },
//   ],
// },

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
