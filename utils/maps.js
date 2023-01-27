export function bestBrawlers(arr) {
  let brawlers = {
    15000050: [],
    15000026: [],
    15000051: [],
    15000082: [],
    15000005: [],
    15000054: [],
    15000007: [],
    15000008: [],
    15000115: [],
    15000137: [],
    15000019: [],
    15000072: [],
    15000300: [],
    15000527: [],
    15000306: [],
    15000548: [],
    15000367: [],
    15000368: [],
    15000014: [],
    15000101: [],
    15000013: [],
    15000043: [],
    15000033: [],
    15000032: [],
    15000016: [],
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
        ].sort((a, b) => b.winRate - a.winRate)
      }
    })
  }

  return brawlers
}

export const modes = [
  {
    name: 'brawlBall',
    maps: [
      { name: 'Sneaky Fields', id: '15000050' },
      { name: 'Pinhole Punt', id: '15000026' },
      { name: 'Super Beach', id: '15000051' },
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
      { name: 'Canal Grande', id: '15000054' },
      { name: 'Shooting Star', id: '15000005' },
      { name: 'Layer Cake', id: '15000082' },
    ],
  },
  {
    name: 'knockout',
    maps: [
      { name: 'Out In The Open', id: '15000548' },
      { name: 'Goldarm Gulch', id: '15000367' },
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
      { name: 'Pit Stop', id: '15000137' },
      { name: 'Bridge Too Far', id: '15000072' },
    ],
  },
]

export const showdown = [
  {
    name: 'showdown',
    maps: [
      { name: 'Scorched Stone', id: '15000014' },
      { name: 'Dark Passage', id: '15000101' },
      { name: 'Skull Creek', id: '15000013' },
      { name: 'Double Trouble', id: '15000043' },
      { name: 'Cavern Churn', id: '15000033' },
      { name: 'Acid Lakes', id: '15000032' },
      { name: 'Feast or Famine', id: '15000016' },
    ],
  },
]
