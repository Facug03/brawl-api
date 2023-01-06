import Head from 'next/head'
import Image from 'next/image'

import styles from './Player.module.css'

export default function Player({ player }) {
  console.log(player)
  if (player.tag === undefined) {
    return <h3>{player.reason}</h3>
  }

  const nameColor = `#${player.nameColor.slice(4)}`
  return (
    <>
      <Head>
        <title>{player.name + ' profile'}</title>
        <meta
          name='Brawl Stars Stats'
          content={`Brawl Stars stats of ${player.name}`}
        />
      </Head>
      <div className={styles.container}>
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
                  src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/custom'
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
          <div>Highest trophies {player.highestTrophies}</div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const res = await fetch(
    `https://api.brawlstars.com/v1/players/%23${id}?authorization=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNGQ1Y2RmLWEzNWUtNDg0My05MzA0LWNlN2ZhYmEwNmI3NiIsImlhdCI6MTY3Mjc3MTY5NSwic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkwLjAuMTgwLjMzIl0sInR5cGUiOiJjbGllbnQifV19.W-9nPaFCA2xx1QVD71W6TB1-Jz7ZUQvbmzFP7LdZJJdSmRziP1NUJ8OcwgyY-aVp-YR8D7GwTJGqJwpFkoToVA`
  )
  console.log(res.status)
  const player = await res.json()
  console.log(player)
  return { props: { player } }
}
