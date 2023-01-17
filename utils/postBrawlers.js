export async function postBrawler(brawlers) {
  console.log(brawlers)
  const res = await fetch('http://localhost:3000/api/rate', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(brawlers),
  })

  const result = await res.json()

  return result
}

export function sortBrawlers(items, player) {
  const maps = items.filter(
    (item) => item.battle.type === 'soloRanked' && item.battle.starPlayer
  )

  let brawlersVictory = []
  let brawlersDefeat = []

  maps.forEach((map) => {
    if (map.battle.teams[0].some((ele) => ele.name === player)) {
      const team0 = map.battle.teams[0].map((team) => team.brawler.name)
      const team1 = map.battle.teams[1].map((team) => team.brawler.name)

      if (map.battle.result === 'victory') {
        brawlersVictory = [...brawlersVictory, ...team0]
        brawlersDefeat = [...brawlersDefeat, ...team1]
      } else {
        brawlersVictory = [...brawlersVictory, ...team1]
        brawlersDefeat = [...brawlersDefeat, ...team0]
      }
    } else {
      const team0 = map.battle.teams[0].map((team) => team.brawler.name)
      const team1 = map.battle.teams[1].map((team) => team.brawler.name)

      if (map.battle.result === 'victory') {
        brawlersVictory = [...brawlersVictory, ...team1]
        brawlersDefeat = [...brawlersDefeat, ...team0]
      } else {
        brawlersVictory = [...brawlersVictory, ...team0]
        brawlersDefeat = [...brawlersDefeat, ...team1]
      }
    }
  })

  return {
    brawlersVictory,
    brawlersDefeat,
  }
}
