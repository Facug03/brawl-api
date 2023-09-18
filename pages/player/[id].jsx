import Head from 'next/head'

import styles from '@pages/Player/Player.module.css'
import { Player } from '@pages/Player'
import { basePath } from 'config'

export default function PlayerPage(player) {
  if (player.reason) {
    return (
      <div className={styles.errorContainer}>
        <h2 className={styles.error}>The tag doesn&apos;t exits, look if you spelled it right.</h2>
        <a href={`${basePath}`} className={styles.button}>
          Home
        </a>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{player.name + ' Profile Stats & Battle Log | Brawl Pro'}</title>
        <meta property="og:title" content={player.name + ' Profile Stats & Battle Log | Brawl Pro'} />
        <meta
          name="description"
          content={`Brawl Stars stats of ${player.name}, battle log of every mode, trophies, all brawlers gadgets and star powers and more info!.`}
        />
        <meta
          property="og:description"
          content={`Brawl Stars stats of ${player.name}, battle log of every mode, trophies, all brawlers gadgets and star powers and more info!.`}
        />
        <meta name="apple-mobile-web-app-title" content="Brawl Pro" />
        <meta property="og:url" content={`https://brawlpro.com/player/${player.tag.slice(1)}`} />
        <meta property="og:site_name" content="Brawl Pro" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#363b4e" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href={`https://brawlpro.com/player/${player.tag.slice(1)}`} />
      </Head>
      <Player player={player} />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const fecthPlayer = [
    fetch(
      `https://bsproxy.royaleapi.dev/v1/players/%23${id}?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw`,
    ).then((res) => res.json()),
    fetch(
      `https://bsproxy.royaleapi.dev/v1/players/%23${id}/battlelog?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw`,
    ).then((res) => res.json()),
  ]

  const res = await Promise.allSettled(fecthPlayer)

  let player

  res.forEach((resp) => {
    if (resp.status === 'fulfilled') {
      player = { ...player, ...resp.value }
    }
  })
  console.log({ player })
  return { props: player }
}
