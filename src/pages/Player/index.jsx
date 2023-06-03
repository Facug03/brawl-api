import { useState, useEffect } from 'react'
import Image from 'next/image'

import styles from './Player.module.css'
import Container from '@components/Container'
import BattleLog from '@components/BattleLog/BattleLog'
import { postBrawler, sortBrawlers } from '@utils/postBrawlers'
import Brawler from '@components/Brawler/Brawler'

export function Player({ player }) {
  const [drop, setDrop] = useState(false)

  useEffect(() => {
    if (player?.items && player?.name) {
      const sortedBrawlers = sortBrawlers(player.items, player.name)
      console.log(sortedBrawlers)
      if (sortedBrawlers) {
        let start = performance.now()
        postBrawler(sortedBrawlers)
          .then((res) => {
            console.log(res)
            let end = performance.now()
            console.log('Tiempo empleado:', end - start, 'milisegundos')
          })
          .catch((err) => console.log(err))
      }
    }

    if (player.name !== undefined) {
      const getProfile = window.localStorage.getItem('player')
      const profile = getProfile ? JSON.parse(getProfile) : []

      const isRepeated = profile.some((el) => el.player === player.name)

      if (profile.length < 6 && !isRepeated) {
        window.localStorage.setItem(
          'player',
          JSON.stringify([
            {
              player: player.name,
              tagPlayer: player.tag,
              color: player.nameColor
                ? `#${player.nameColor.slice(4)}`
                : '#ffffff',
            },
            ...profile,
          ])
        )
      }

      if (profile.length === 6 && !isRepeated) {
        window.localStorage.setItem(
          'player',
          JSON.stringify([
            {
              player: player.name,
              tagPlayer: player.tag,
              color: player.nameColor
                ? `#${player.nameColor.slice(4)}`
                : '#ffffff',
            },
            ...profile.slice(0, -1),
          ])
        )
      }
    }
  }, [player.name, player.tag, player.nameColor, player.items])

  if (player.tag === undefined) {
    return <h3 className={styles.error}>Error</h3>
  }

  const nameColor = player.nameColor
    ? `#${player.nameColor.slice(4)}`
    : '#ffffff'
  return (
    <Container>
      <header className={styles.head}>
        <div className={styles.icon}>
          <div className={styles.imgProfile}>
            <Image
              className={styles.img}
              src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${player.icon.id}/profile`}
              alt='profile picture of Brawl Stars'
              fill={true}
            />
          </div>
          <p className={styles.tag}>{player.tag}</p>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileContainer}>
            <div className={styles.nameContainer}>
              <h2 className={styles.name} style={{ color: nameColor }}>
                {player.name}
              </h2>
              <div className={styles.exp}>
                <div className={styles.imgExp}>
                  <Image
                    src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/player-level/custom'
                    alt='player level icon of Brawl Stars'
                    fill={true}
                  />
                </div>
                <p className={styles.level}>{player.expLevel}</p>
              </div>
            </div>
            <div className={styles.trophies}>
              <div className={styles.imgTrophy}>
                <Image
                  src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini'
                  alt='trophy icon'
                  fill={true}
                />
              </div>
              <p className={styles.number}>{player.trophies}</p>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.info}>
        {player?.club?.tag && (
          <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer} style={{ color: nameColor }}>
              Club
            </h3>

            <a
              className={styles.infoClub}
              href={`/club/${player.club.tag.slice(1)}`}
            >
              <p className={styles.stats}>{player.club.name}</p>
            </a>
          </div>
        )}
        <div className={styles.statsProfile}>
          <h3 className={styles.infoPlayer} style={{ color: nameColor }}>
            Highest trophies
          </h3>
          <p className={styles.stats}>{player.highestTrophies}</p>
        </div>
        <div className={styles.statsProfile}>
          <h3 className={styles.infoPlayer} style={{ color: nameColor }}>
            3 vs 3 victories
          </h3>
          <p className={styles.stats}>{player['3vs3Victories']}</p>
        </div>
        <div className={styles.statsProfile}>
          <h3 className={styles.infoPlayer} style={{ color: nameColor }}>
            Duo victories
          </h3>
          <p className={styles.stats}>{player.duoVictories}</p>
        </div>
        <div className={styles.statsProfile}>
          <h3 className={styles.infoPlayer} style={{ color: nameColor }}>
            Solo victories
          </h3>
          <p className={styles.stats}>{player.soloVictories}</p>
        </div>
        <div className={styles.statsProfile}>
          <h3 className={styles.infoPlayer} style={{ color: nameColor }}>
            Exp points
          </h3>
          <p className={styles.stats}>{player.expPoints}</p>
        </div>
        {/* <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer}>
              Qualified to championship challenge
            </h3>
            <p>{player.isQualifiedFromChampionshipChallenge ? 'Yes' : 'No'}</p>
          </div> */}
      </div>
      <div onClick={() => setDrop(!drop)} className={styles.drop}>
        <h3 className={styles.text}>
          <span className={`${drop && styles.open} ${styles.close}`}>
            {'>'}
          </span>
          Battle Log
        </h3>
      </div>
      {drop && (
        <div>
          {player.items ? (
            player.items.map((item) => {
              if (
                item.battle.type?.includes('Ranked') &&
                !item.battle.starPlayer
              )
                return
              return (
                <BattleLog
                  key={item.battleTime}
                  nameColor={nameColor}
                  battleTime={item.battleTime}
                  battle={item.battle}
                  event={item.event}
                  playerProfile={player.name}
                />
              )
            })
          ) : (
            <h3 className={styles.error}>{player.reason}</h3>
          )}
        </div>
      )}
      <div className={styles.brawlers}>
        {player.brawlers.map((brawler) => (
          <Brawler
            key={brawler.id}
            id={brawler.id}
            name={brawler.name}
            rank={brawler.rank}
            power={brawler.power}
            trophies={brawler.trophies}
            highestTrophies={brawler.highestTrophies}
            gears={brawler.gears}
            gadgets={brawler.gadgets}
            starPowers={brawler.starPowers}
          />
        ))}
      </div>
    </Container>
  )
}
