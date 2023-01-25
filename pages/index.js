import Head from 'next/head'

import Main from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Brawl Stars Stats, Database & Maps | Brawl Pro</title>
        <meta name='application-name' content='Brawl Pro' />
        <meta
          name='description'
          content='Brawl Stars Stats, information about Brawl Talk, best Brawlers for power league and showdown. Search your profile statistics, battle log, see leaderboard from the world and each country'
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta property='og:title' content='Brawl Stars Stats, Database & Maps | Brawl Pro' />
        <meta property='og:url' content='https://brawlpro.com' />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <meta name='google' content='notranslate' />
        <link rel='icon' href='/crown.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Main />
    </>
  )
}
