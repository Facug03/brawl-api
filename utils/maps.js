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
            winRate:
              (Number(ar[brawl][0]) /
                (Number(ar[brawl][0]) + Number(ar[brawl][1]))) *
              100,
          },
        ]
      }
    })
  }

  return brawlers
}

export const modes = [
  {
    name: 'Balon Brawl',
    maps: [
      { name: 'Sneaky Fields', id: '15000050' },
      { name: 'Pinhole Punt', id: '15000026' },
      { name: 'Super Beach', id: '15000051' },
    ],
  },
  {
    name: 'Gem Grab',
    maps: [
      { name: 'Hard Rock Mine', id: '15000007' },
      { name: 'Double Swoosh', id: '15000115' },
      { name: 'Crystal Arcade', id: '15000008' },
    ],
  },
  {
    name: 'Bounty',
    maps: [
      { name: 'Canal Grande', id: '15000054' },
      { name: 'Shooting Star', id: '15000005' },
      { name: 'Layer Cake', id: '15000082' },
    ],
  },
  {
    name: 'Knockout',
    maps: [
      { name: 'Out In The Open', id: '1500054}8' },
      { name: 'Goldarm Gulch', id: '15000367' },
      { name: 'Belles Rock', id: '15000368' },
    ],
  },
  {
    name: 'Hot Zone',
    maps: [
      { name: 'Dueling Beetles', id: '15000306' },
      { name: 'Ring Of Fire', id: '15000300' },
      { name: 'Open Zone', id: '15000527' },
    ],
  },
  {
    name: 'Heist',
    maps: [
      { name: 'Safe Zone', id: '15000019' },
      { name: 'Pit Stop', id: '15000137' },
      { name: 'Bridge Too Far', id: '15000072' },
    ],
  },
]

const showdown = [
  { name: '', id: '15000014' },
  { name: '', id: '15000101' },
  { name: '', id: '15000013' },
  { name: '', id: '15000043' },
  { name: '', id: '15000033' },
  { name: '', id: '15000032' },
  { name: '', id: '15000016' },
]
