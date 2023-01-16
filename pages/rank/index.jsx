import Image from 'next/image'

import styles from './Rank.module.css'
import Container from '../../components/Container/Container'

export default function Rank({ rankings }) {
  console.log(rankings)
  return (
    <Container>
      <h2 className={styles.title}>Leaderboards</h2>
      <section className={styles.section}>
        {rankings.items.map((player, index) => (
          <article
            className={`${styles.article} ${
              index % 2 === 0 ? styles.even : styles.odd
            }`}
            key={player.tag}
          >
            <div className={styles.rankCont}>
              <div className={styles.rankCenter}>
                <h4 className={styles.rank}>{player.rank}</h4>
              </div>
              <Image
                className={styles.img}
                src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${player.icon.id}/custom`}
                alt={`profile of the ${player.rank} in the world of Brawl Stars`}
                width={60}
                height={60}
              />
              <div>
                <h4
                  className={styles.name}
                  style={{ color: `#${player.nameColor.slice(4)}` }}
                >
                  {player.name}
                </h4>
                <h5 className={styles.clubName}>{player.club?.name}</h5>
              </div>
            </div>
            <div className={styles.trophiesCont}>
              <Image
                src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini'
                alt='trophy icon'
                width={30}
                height={25}
              />
              <h4 className={styles.trophies}>{player.trophies}</h4>
            </div>
          </article>
        ))}
      </section>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://bsproxy.royaleapi.dev/v1/rankings/global/players?limit=50&authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw'
  )

  const rankings = await res.json()
  // console.log(rankings)
  return { props: { rankings } }
}
