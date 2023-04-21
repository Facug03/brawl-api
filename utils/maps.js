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
    15000578: [],
    15000005: [],
    15000054: [],
    15000115: [],
    15000007: [],
    15000147: [],
    15000586: [],
    15000018: [],
    15000019: [],
    15000143: [],
    15000026: [],
    15000592: [],
    15000587: [],
    15000294: [],
    15000300: [],
    15000368: [],
    15000440: [],
    15000548: [],
    15000043: [],
    15000589: [],
    15000582: [],
    15000016: [],
    15000015: [],
    15000014: [],
    15000013: [],
    15000032: [],
    15000101: [],
    15000033: [],
    15000093: [],
    15000105: [],
    15000109: [],
    15000272: [],
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
  '15000043',
  '15000589',
  '15000582',
  '15000016',
  '15000015',
  '15000014',
  '15000013',
  '15000032',
  '15000101',
  '15000033',
  '15000093',
  '15000105',
  '15000109',
  '15000272',
]

export const vsMaps = [
  '15000578',
  '15000005',
  '15000054',
  '15000115',
  '15000007',
  '15000147',
  '15000586',
  '15000018',
  '15000019',
  '15000143',
  '15000026',
  '15000592',
  '15000587',
  '15000294',
  '15000300',
  '15000368',
  '15000440',
  '15000548',
]

export const modes = [
  {
    name: 'brawlBall',
    maps: [
      { name: 'Beach Ball', id: '15000143' },
      { name: 'Pinhole Punt', id: '15000026' },
      { name: 'Iron Corridor', id: '15000592' },
    ],
  },
  {
    name: 'gemGrab',
    maps: [
      { name: 'Hard Rock Mine', id: '15000007' },
      { name: 'Double Swoosh', id: '15000115' },
      { name: 'Acute Angle', id: '15000147' },
    ],
  },
  {
    name: 'bounty',
    maps: [
      { name: 'Canal Grande', id: '15000054' },
      { name: 'Shooting Star', id: '15000005' },
      { name: 'Nowhere To Hide', id: '15000578' },
    ],
  },
  {
    name: 'knockout',
    maps: [
      { name: 'Out In The Open', id: '15000548' },
      { name: 'Flaring Phoenix', id: '15000440' },
      { name: 'Belles Rock', id: '15000368' },
    ],
  },
  {
    name: 'hotZone',
    maps: [
      { name: 'Iron Cover', id: '15000587' },
      { name: 'Ring Of Fire', id: '15000300' },
      { name: 'Split', id: '15000294' },
    ],
  },
  {
    name: 'heist',
    maps: [
      { name: 'Safe Zone', id: '15000019' },
      { name: 'Kaboom Canyon', id: '15000018' },
      { name: 'Center Control', id: '15000586' },
    ],
  },
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
      { name: 'Lush Poles', id: '15000582' },
      { name: 'Rockwall Brawl', id: '15000015' },
    ],
  },
]
