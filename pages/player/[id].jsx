import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Player.module.css'
import Container from '../../components/Container/Container'
import BattleLog from '../../components/BattleLog/BattleLog'
import { postBrawler, sortBrawlers } from '../../utils/postBrawlers'
import Brawler from '../../components/Brawler/Brawler'

export default function Player(player) {
  const [drop, setDrop] = useState(false)

  useEffect(() => {
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
              color: `#${player.nameColor.slice(4)}`,
            },
            ...profile,
          ])
        )
      }

      if (profile.length === 6 && !isRepeated) {
        window.localStorage.setItem(
          'player',
          JSON.stringify([
            { player: player.name, tagPlayer: player.tag },
            ...profile.slice(0, -1),
          ])
        )
      }
    }
  }, [player.name, player.tag, player.nameColor])
  // console.log(player)

  // useEffect(() => {
  //   if (player?.items && player?.name) {
  //     const sortedBrawlers = sortBrawlers(player.items, player.name)

  //     if (sortedBrawlers) {
  //       let start = performance.now()
  //       postBrawler(sortedBrawlers)
  //         .then((res) => {
  //           console.log(res)
  //           let end = performance.now()
  //           console.log('Tiempo empleado:', end - start, 'milisegundos')
  //         })
  //         .catch((err) => console.log(err))
  //     }
  //   }
  // }, [player.items, player.name])

  if (player.tag === undefined) {
    return <h3 className={styles.error}>Error</h3>
  }

  const nameColor = `#${player.nameColor.slice(4)}`
  return (
    <>
      <Head>
        <title>{player.name + ' profile | Brawl Stars Stats'}</title>
        <meta
          name='Brawl Stars Stats'
          content={`Brawl Stars stats of ${player.name}`}
        />
        <link rel='icon' href='/crown.png' />
      </Head>
      <Container>
        <header className={styles.head}>
          <div className={styles.icon}>
            <Image
              className={styles.img}
              src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${player.icon.id}/profile`}
              alt='profile picture of Brawl Stars'
              width={120}
              height={120}
            />
            <p className={styles.tag}>{player.tag}</p>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileContainer}>
              <div className={styles.nameContainer}>
                <h2 className={styles.name} style={{ color: nameColor }}>
                  {player.name}
                </h2>
                <div className={styles.exp}>
                  <Image
                    src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/player-level/custom'
                    alt='player level icon of Brawl Stars'
                    width={50}
                    height={50}
                  />
                  <p className={styles.level}>{player.expLevel}</p>
                </div>
              </div>
              <div className={styles.trophies}>
                <Image
                  src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini'
                  alt='trophy icon'
                  width={30}
                  height={25}
                />
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

              <Link
                className={styles.infoClub}
                href={`/club/${player.club.tag.slice(1)}`}
              >
                <p className={styles.stats}>{player.club.name}</p>
              </Link>
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
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const fecthPlayer = [
    fetch(
      `https://bsproxy.royaleapi.dev/v1/players/%23${id}?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw`
    ).then((res) => res.json()),
    fetch(
      `https://bsproxy.royaleapi.dev/v1/players/%23${id}/battlelog?limit=5&authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw`
    ).then((res) => res.json()),
  ]

  const res = await Promise.allSettled(fecthPlayer)

  let player

  res.forEach((resp) => {
    if (resp.status === 'fulfilled') {
      player = { ...player, ...resp.value }
    }
  })

  return { props: player }
}
