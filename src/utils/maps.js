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
    15000013: [],
    15000033: [],
    15000043: [],
    15000093: [],
    15000095: [],
    15000196: [],
    15000228: [],
    15000352: [],
    15000025: [],
    15000338: [],
    15000024: [],
    15000636: [],
    15000499: [],
    15000678: [],
    15000548: [],
    15000368: [],
    15000679: [],
    15000527: [],
    15000300: [],
    15000680: [],
    15000676: [],
    15000217: [],
    15000072: [],
    15000005: [],
    15000695: [],
    15000696: [],
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
      { name: 'Skull Creek', id: '15000013' },
      { name: 'Cavern Churn', id: '15000033' },
      { name: 'Double Trouble', id: '15000043' },
      { name: 'Dune Drift', id: '15000093' },
      { name: 'Stormy Plains', id: '15000095' },
      { name: 'Forsaken Falls', id: '15000196' },
      { name: 'Safety Center', id: '15000228' },
      { name: 'The Galaxy', id: '15000352' },
    ],
  },
]

export const modes = [
  {
    name: 'brawlBall',
    maps: [
      { name: 'Triple Dribble', id: '15000025' },
      { name: 'Winter Party', id: '15000338' },
      { name: 'Backyard Bowl', id: '15000024' },
    ],
  },
  {
    name: 'gemGrab',
    maps: [
      { name: 'Last Stop', id: '15000636' },
      { name: 'Open Space', id: '15000499' },
      { name: 'Stay in your Lane', id: '15000678' },
    ],
  },
  // {
  //   name: 'wipeout',
  //   maps: [
  //     { name: 'Shooting Star', id: '15000623' },
  //     { name: 'Layer Bake', id: '15000634' },
  //     { name: 'Infinite Doom', id: '15000471' },
  //   ],
  // },
  {
    name: 'bounty',
    maps: [
      { name: 'Shooting Star', id: '15000005' },
      { name: 'Layer Bake', id: '15000695' },
      { name: 'The Great Open', id: '15000696' },
    ],
  },
  {
    name: 'knockout',
    maps: [
      { name: 'Out in the Open', id: '15000548' },
      { name: 'Belles Rock', id: '15000368' },
      { name: 'Close Quarters', id: '15000679' },
    ],
  },
  {
    name: 'hotZone',
    maps: [
      { name: 'Open Zone', id: '15000527' },
      { name: 'Ring Of Fire', id: '15000300' },
      { name: 'The Great Divide', id: '15000680' },
    ],
  },
  {
    name: 'heist',
    maps: [
      { name: 'Riverbed', id: '15000676' },
      { name: 'Tornado Ring', id: '15000217' },
      { name: 'Bridge Too Far', id: '15000072' },
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
