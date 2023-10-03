/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brawlpro.com',
  generateRobotsTxt: true,
  changefreq: 'hourly',
  autoLastmod: false,
  priority: 0.75,
  additionalSitemaps: ['/sitemap/brawlers.xml', '/sitemap/players-0.xml'],
  transform: async (config, path) => {
    const secondaryPath = ['/brawlers', '/events', '/rank', '/brawlers/powerleague', '/brawlers/showdown']

    const result = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    }

    if (path === '/') {
      result.priority = 1
      return result
    }

    if (secondaryPath.includes(path)) {
      result.priority = 0.8
      return result
    }

    return result
  },
}
