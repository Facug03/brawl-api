import Head from 'next/head'

import Main from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brawl Pro | Brawl Stars Stats</title>
        <meta
          name='description'
          content='Brawl Pro. Brawl Stars Stats, information about Brawl Talk, best Brawlers for power league. Search your profile statistics, battle log, see leaderboard from the world and each country'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/crown.png' />
      </Head>
      <Main />
    </>
  )
}
