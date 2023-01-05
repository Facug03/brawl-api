import Head from 'next/head'

import styles from './Player.module.css'

export default function Player({ player }) {
  console.log(player)
  return (
    <>
      <Head>
        <title>{player.name} Profile</title>
        <meta
          name='Brawl Stars Stats'
          content={`Brawl Stars stats of ${player.name}`}
        />
      </Head>
      <div className={styles.container}>
        <h2>{player.name}</h2>
        <p>{player.trophies}</p>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const res = await fetch(
    `https://api.brawlstars.com/v1/players/%23${id}?authorization=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNGQ1Y2RmLWEzNWUtNDg0My05MzA0LWNlN2ZhYmEwNmI3NiIsImlhdCI6MTY3Mjc3MTY5NSwic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkwLjAuMTgwLjMzIl0sInR5cGUiOiJjbGllbnQifV19.W-9nPaFCA2xx1QVD71W6TB1-Jz7ZUQvbmzFP7LdZJJdSmRziP1NUJ8OcwgyY-aVp-YR8D7GwTJGqJwpFkoToVA`
  )

  const player = await res.json()

  return { props: { player } }
}
