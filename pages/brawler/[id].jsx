import Head from 'next/head'

import { Brawler } from '@pages/Brawler'
import { BRAWLERS } from '@utils/rankings'
// import { mostUsedBrawlers, BestBrawlers, vsMaps, showdownMaps } from '@utils/maps'
// import { getBrawlers } from '@lib/redis'

export default function BrawlerPage({ brawler }) {
  return (
    <>
      <Head>
        <title>{`${brawler.name} Brawl Stars | Brawl Pro`}</title>
        <meta property="og:title" content={`${brawler.name} Brawl Stars | Brawl Pro`} />
        <meta
          name="description"
          content={`${brawler.name} star powers, gadgets and you can find statistics in all modes, tierlist of all brwalers and the win rate`}
        />
        <meta
          property="og:description"
          content={`${brawler.name} star powers, gadgets and you can find statistics in all modes, tierlist of all brwalers and the win rate`}
        />
        <meta name="apple-mobile-web-app-title" content="Brawl Pro" />
        <meta property="og:url" content={`https://brawlpro.com/brawler/${brawler.name.toLocaleLowerCase()}`} />
        <meta property="og:site_name" content="Brawl Pro" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#363b4e" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href={`https://brawlpro.com/brawler/${brawler.name.toLocaleLowerCase()}`} />
      </Head>
      <Brawler
        brawler={brawler}
        // mostUsed={mostUsed}
        // mostUsedSd={mostUsedSd}
        // bestBrawlers={bestBrawlers}
        // bestBrawlersSd={bestBrawlersSd}
      />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.brawlapi.com/v1/brawlers')

  const brawlers = await res.json()

  const paths = brawlers.list.map((brawler) => {
    return {
      params: { id: brawler.name.toLowerCase().split(' ').join('') },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { id } = params

  const brawlerId = BRAWLERS.find((brawler) => brawler.name.toLocaleLowerCase().split(' ').join('') === id)
  // const brawlers = await getBrawlers()
  // const mostUsed = mostUsedBrawlers(brawlers, vsMaps)
  // const mostUsedSd = mostUsedBrawlers(brawlers, showdownMaps)
  // const bestBrawlers = BestBrawlers(brawlers, vsMaps)
  // const bestBrawlersSd = BestBrawlers(brawlers, showdownMaps)
  const res = await fetch(`https://api.brawlapi.com/v1/brawlers/${brawlerId.id}`)
  const brawler = await res.json()

  return {
    props: { brawler },
  }
}
