import { BRAWLERS } from '@utils/rankings'
import { getServerSideSitemap } from 'next-sitemap'
import { basePath } from 'config'

const SitemapBrawlers = () => {}

export default SitemapBrawlers

export const getServerSideProps = async (ctx) => {
  const allBrawlers = BRAWLERS.map((brawler) => brawler.name.toLowerCase())

  const brawlersSitemap = allBrawlers.map((brawler) => ({
    loc: `${basePath}brawler/${brawler}`,
    lastmod: new Date().toISOString(),
  }))

  return await getServerSideSitemap(ctx, [...brawlersSitemap])
}
