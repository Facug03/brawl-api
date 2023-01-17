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
  const soloRanked = items.filter(
    (item) => item.battle.type === 'soloRanked' && item.battle.starPlayer
  )

  const showdown = items.filter((item) => item.battle.mode === 'soloShowdown')

  let brawlersVictory = {}
  let brawlersDefeat = {}

  soloRanked.forEach((map) => {
    if (map.battle.teams[0].some((ele) => ele.name === player)) {
      const team0 = map.battle.teams[0].map((team) => team.brawler.name)
      const team1 = map.battle.teams[1].map((team) => team.brawler.name)

      if (map.battle.result === 'victory') {
        brawlersVictory = {
          ...brawlersVictory,
          [map.event.id]: [...(brawlersVictory[map.event.id] || []), ...team0],
        }
        brawlersDefeat = {
          ...brawlersDefeat,
          [map.event.id]: [...(brawlersDefeat[map.event.id] || []), ...team1],
        }
      } else {
        brawlersVictory = {
          ...brawlersVictory,
          [map.event.id]: [...(brawlersVictory[map.event.id] || []), ...team1],
        }
        brawlersDefeat = {
          ...brawlersDefeat,
          [map.event.id]: [...(brawlersDefeat[map.event.id] || []), ...team0],
        }
      }
    } else {
      const team0 = map.battle.teams[0].map((team) => team.brawler.name)
      const team1 = map.battle.teams[1].map((team) => team.brawler.name)

      if (map.battle.result === 'victory') {
        brawlersVictory = {
          ...brawlersVictory,
          [map.event.id]: [...(brawlersVictory[map.event.id] || []), ...team1],
        }
        brawlersDefeat = {
          ...brawlersDefeat,
          [map.event.id]: [...(brawlersDefeat[map.event.id] || []), ...team0],
        }
      } else {
        brawlersVictory = {
          ...brawlersVictory,
          [map.event.id]: [...(brawlersVictory[map.event.id] || []), ...team0],
        }
        brawlersDefeat = {
          ...brawlersDefeat,
          [map.event.id]: [...(brawlersDefeat[map.event.id] || []), ...team1],
        }
      }
    }
  })

  showdown.forEach((map) => {
    const winners = map.battle.players
      .slice(0, 4)
      .map((player) => player.brawler.name)
    const losers = map.battle.players
      .slice(4)
      .map((player) => player.brawler.name)

    brawlersVictory = {
      ...brawlersVictory,
      [map.event.id]: [...(brawlersVictory[map.event.id] || []), ...winners],
    }
    brawlersDefeat = {
      ...brawlersDefeat,
      [map.event.id]: [...(brawlersDefeat[map.event.id] || []), ...losers],
    }
  })

  if (Object.keys(brawlersVictory).length) {
    return {
      brawlersVictory,
      brawlersDefeat,
    }
  }

  return null
}
