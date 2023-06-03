import Head from 'next/head'

import { bestBrawlersInMaps, mostUsedInMaps, showdownMaps } from '@utils/maps'
import { getBrawlers } from '@lib/redis'
import { Showdown } from '@pages/Showdown'

export default function ShowdownPage({ leagueBrawlers, mostUsed }) {
  return (
    <>
      <Head>
        <title>Best Brawlers for Showdown | Brawl Pro</title>
        <meta
          property='og:title'
          content='Best Brawlers for Showdown | Brawl Pro'
        />
        <meta
          name='description'
          content='Find the current maps so you can see what is the best pick for every map and the most used brawlers directly from our database.'
        />
        <meta
          property='og:description'
          content='Find the current maps so you can see what is the best pick for every map and the most used brawlers directly from our database.'
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta
          property='og:url'
          content='https://brawlpro.com/brawlers/showdown'
        />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/logo.png' />
        <link rel='canonical' href='https://brawlpro.com/brawlers/showdown' />
      </Head>
      <Showdown leagueBrawlers={leagueBrawlers} mostUsed={mostUsed} />
    </>
  )
}

export async function getStaticProps() {
  const brawlers = await getBrawlers()

  const leagueBrawlers = bestBrawlersInMaps(brawlers)

  const mostUsed = mostUsedInMaps(brawlers, showdownMaps)

  return { props: { leagueBrawlers, mostUsed } }
}
