import Head from 'next/head'

import Main from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Brawl Pro | Brawl Stars Stats</title>
        <meta name='Brawl pro' content='Brawl Pro' />
        <meta
          name='description'
          content='Brawl Pro. Brawl Stars Stats, information about Brawl Talk, best Brawlers for power league and showdown. Search your profile statistics, battle log, see leaderboard from the world and each country'
        />
        <meta name='google' content='notranslate' />
        <link rel='icon' href='/crown.png' />
      </Head>
      <Main />
    </>
  )
}
