import { getServerSideSitemap } from 'next-sitemap'

import { token } from 'config'

const SitemapPlayers = () => {}

export default SitemapPlayers

export const getServerSideProps = async (ctx) => {
  const COUNTRIES = ['AR', 'BR', 'CA', 'ES', 'FR', 'GB', 'IT', 'JP', 'KR', 'RU', 'US', 'BR', 'CN']

  const allPlayers = []

  await Promise.allSettled(
    COUNTRIES.map(async (country) => {
      const players = await fetch(`https://bsproxy.royaleapi.dev/v1/rankings/${country}/players?authorization=${token}`)
        .then((res) => res.json())
        .catch((e) => console.log(e))

      for (const player of players?.items) {
        allPlayers.push(player.tag.slice(1))
      }
    }),
  )

  const playersSitemap = allPlayers.map((player) => ({
    loc: `${process.env.NEXT_PUBLIC_BASE_PATH}player/${player}`,
    lastmod: new Date().toISOString(),
  }))

  return await getServerSideSitemap(ctx, [...playersSitemap])
}
