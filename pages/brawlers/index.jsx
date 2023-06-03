import Head from 'next/head'

import { Brawlers } from '@pages/Brawlers'

export default function BrawlersPage({ brawlers }) {
  return (
    <>
      <Head>
        <title>Brawlers Brawl Stars | Brawl Pro</title>
        <meta property='og:title' content='Brawlers Brawl Stars | Brawl Pro' />
        <meta
          name='description'
          content="Find out when a brawl stars character is released and see which brawler is the best for 3v3 mode and showdown, we have a database that's better than a tierlist."
        />
        <meta
          property='og:description'
          content="Find out when a brawl stars character is released and see which brawler is the best for 3v3 mode and showdown, we have a database that's better than a tierlist."
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta property='og:url' content='https://brawlpro.com/brawlers' />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/logo.png' />
        <link rel='canonical' href='https://brawlpro.com/brawlers' />
      </Head>

      <Brawlers brawlers={brawlers} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.brawlapi.com/v1/brawlers')

  const data = await res.json()

  const brawlers = data.list.map((brawl) => {
    return {
      name: brawl.name,
      avatarId: brawl.avatarId,
      id: brawl.id,
      rarity: brawl.rarity.name,
      rarityColor: brawl.rarity.color,
      rarityId: brawl.rarity.id,
    }
  })

  return { props: { brawlers } }
}
