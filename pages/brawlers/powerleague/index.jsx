import Head from 'next/head'

import { bestBrawlersInMaps, mostUsedInMaps, vsMaps } from '@utils/maps'
import { getBrawlers } from '@lib/redis'
import { PowerLeague } from '@pages/PowerLeague'

export default function PowerLeaguePage({ leagueBrawlers, mostUsed }) {
  return (
    <>
      <Head>
        <title>Best Brawlers for Power League | Brawl Pro</title>
        <meta
          property='og:title'
          content='Best Brawlers for Power League Database | Brawl Pro'
        />
        <meta
          name='description'
          content="You can see what's the best pick in brawl stars. We have a database where we save all data from pl matches, you can find the characters win rate or the most used."
        />
        <meta
          property='og:description'
          content="You can see what's the best pick in brawl stars. We have a database where we save all data from pl matches, you can find the characters win rate or the most used."
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta
          property='og:url'
          content='https://brawlpro.com/brawlers/powerleague'
        />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/logo.png' />
        <link
          rel='canonical'
          href='https://brawlpro.com/brawlers/powerleague'
        />
      </Head>
      <PowerLeague leagueBrawlers={leagueBrawlers} mostUsed={mostUsed} />
    </>
  )
}

export async function getStaticProps() {
  const brawlers = await getBrawlers()

  const leagueBrawlers = bestBrawlersInMaps(brawlers)

  const mostUsed = mostUsedInMaps(brawlers, vsMaps)

  return { props: { leagueBrawlers, mostUsed } }
}
