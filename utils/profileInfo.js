export function getRankImg(n) {
  if (n > 34)
    return 'https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/obsidian/mini'
  else if (n >= 30)
    return 'https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/ruby/mini'
  else if (n >= 25)
    return 'https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/emerald/mini'
  else if (n >= 20)
    return 'https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/amethyst/mini'
  else if (n >= 15)
    return 'https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/diamond/mini'
  else if (n >= 10)
    return 'https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/gold/mini'
  else if (n >= 5)
    return 'https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/silver/mini'
  else if (n >= 1)
    return 'https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/bronze/mini'
}

export function getPowerImg(n) {
  if (n > 18) return 'masters'
  else if (n >= 16) return 'legendary'
  else if (n >= 13) return 'mythic'
  else if (n >= 10) return 'diamond'
  else if (n >= 7) return 'gold'
  else if (n >= 4) return 'silver'
  else n >= 1
  return 'bronze'
}

export const getBrawlerColor = {
  SHELLY: '#94d7f4',
  ROSA: '#25d118',
  POCO: '#25d118',
  'EL PRIMO': '#25d118',
  NITA: '#25d118',
  BARLEY: '#25d118',
  BROCK: '#25d118',
  BULL: '#25d118',
  COLT: '#25d118',
  GUS: '#0086f9',
  JACKY: '#0086f9',
  '8-BIT': '#0086f9',
  CARL: '#0086f9',
  TICK: '#0086f9',
  PENNY: '#0086f9',
  DYNAMIKE: '#0086f9',
  DARRYL: '#0086f9',
  JESSIE: '#0086f9',
  RICO: '#0086f9',
  BO: '#b116ed',
  BONNIE: '#b116ed',
  GRIFF: '#b116ed',
  GROM: '#b116ed',
  STU: '#b116ed',
  EDGAR: '#b116ed',
  NANI: '#b116ed',
  EMZ: '#b116ed',
  BEA: '#b116ed',
  BIBI: '#b116ed',
  PIPER: '#b116ed',
  FRANK: '#b116ed',
  PAM: '#b116ed',
  SQUEAK: '#fe0020',
  SPROUT: '#fe0020',
  GRAY: '#fe0020',
  BYRON: '#fe0020',
  MAX: '#fe0020',
  'MR. P': '#fe0020',
  GENE: '#fe0020',
  TARA: '#fe0020',
  MORTIS: '#fe0020',
  CHESTER: '#feee1c',
  AMBER: '#feee1c',
  SANDY: '#feee1c',
  MEG: '#feee1c',
  CROW: '#feee1c',
  SPIKE: '#feee1c',
  LEON: '#feee1c',
  MANDY:
    'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  BUSTER:
    'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  SAM: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  OTIS: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  JANET:
    'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  EVE: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  FANG: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  LOLA: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  ASH: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  BUZZ: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  BELLE:
    'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  RUFFS:
    'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  LOU: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  COLETTE:
    'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  GALE: 'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
  SURGE:
    'linear-gradient(203deg, rgba(236,199,27,1) 6%, rgba(234,113,36,1) 21%, rgba(208,35,118,1) 37%, rgba(167,20,227,1) 70%)',
}

export const mode = {
  gemGrab: { name: 'Gem Grab', color: '#953be6' },
  soloShowdown: { name: 'Solo Showdown', color: '#64a617' },
  brawlBall: { name: 'Brawl Ball', color: '#8399e1' },
  hotZone: { name: 'Hot Zone', color: '#d7384e' },
  duoShowdown: { name: 'Duo Showdown', color: '#64a617' },
  knockout: { name: 'Knockout', color: '#ff8213' },
  bigGame: { name: 'Big Game', color: '#a60024' },
  wipeout: { name: 'Wipeout', color: '#d62ce0' },
  bounty: { name: 'Bounty', color: '#02cdfd' },
  heist: { name: 'Heist', color: '#d85cd4' },
}
