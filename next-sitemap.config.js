/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brawlpro.com',
  generateRobotsTxt: true,
  changefreq: 'hourly',
  autoLastmod: false,
  priority: 0.75,
  additionalSitemaps: ['https://brawlpro.com/sitemap/brawlers.xml', 'https://brawlpro.com/sitemap/players-0.xml'],
  transform: async (config, path) => {
    const secondaryPath = ['/events', '/rank', '/brawlers/powerleague', '/brawlers/showdown']

    const result = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    }

    if ('/brawlers'.includes(path)) {
      return
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
