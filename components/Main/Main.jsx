import Link from 'next/link'
import { useState } from 'react'

import styles from './Main.module.css'

export default function Main() {
  const [idPlayer, setIdPlayer] = useState('')
  const [idClub, setIdClub] = useState('')

  const controlInput = ({ target }) => {
    console.log(target.value)
    if (
      target.name === 'player' &&
      target.value.length < 10 &&
      /^[A-Za-z0-9]*$/.test(target.value)
    ) {
      setIdPlayer(target.value.toUpperCase())
    } else if (
      target.name === 'club' &&
      target.value.length < 10 &&
      /^[A-Za-z0-9]*$/.test(target.value)
    ) {
      setIdClub(target.value.toUpperCase())
    }
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.card} ${styles.player}`}>
        <h2 className={styles.search}>Search player by tag</h2>
        <form className={styles.form}>
          <span className={styles.hashtag}>#</span>
          <input
            value={idPlayer}
            name='player'
            onChange={controlInput}
            className={styles.tag}
          />
          <Link href={`/player/${idPlayer}`} className={styles.button}>
            Search
          </Link>
        </form>
      </div>
      <div className={styles.card}>
        <h2 className={styles.search}>Search club by tag</h2>
        <form className={styles.form}>
          <span className={styles.hashtag}>#</span>
          <input
            value={idClub}
            name='club'
            onChange={controlInput}
            className={styles.tag}
          />
          <Link href='/' className={styles.button}>
            Search
          </Link>
        </form>
      </div>
    </main>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     'https://api.brawlstars.com/v1/players/%23GRCJCL02?authorization=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNGQ1Y2RmLWEzNWUtNDg0My05MzA0LWNlN2ZhYmEwNmI3NiIsImlhdCI6MTY3Mjc3MTY5NSwic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkwLjAuMTgwLjMzIl0sInR5cGUiOiJjbGllbnQifV19.W-9nPaFCA2xx1QVD71W6TB1-Jz7ZUQvbmzFP7LdZJJdSmRziP1NUJ8OcwgyY-aVp-YR8D7GwTJGqJwpFkoToVA'
//   )
//   console.log(res)
//   const data = await res.json()
//   console.log(data)
//   // Pass data to the page via props
//   return { props: { data } }
// }
