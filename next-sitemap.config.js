/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brawlpro.com',
  generateRobotsTxt: true,
  changefreq: 'hourly',
  autoLastmod: false,
  priority: 0.75,
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
  additionalPaths: async (config) => {
    const result = []

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/P0PULRC'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/VLQPVPY'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/QRUQQLV0'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/LJCL8P0'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/82RGU8PR'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/YQUCCJ2'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/28PU0P9L0'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/8Y98Q8U'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/9ULYPV8'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/2282LR0YG'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/YJ88Q2G'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/80QUGYC'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/8PJRRG2C'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/PCPRPJV'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/8LQ9JR82'))

    result.push(await config.transform({ ...config, changefreq: 'hourly', priority: 0.5 }, '/player/QCC0UVC'))

    return result
  },
}
