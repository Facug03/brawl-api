/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brawlpro.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  additionalPaths: async (config) => {
    const result = []

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/P0PULRC'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/VLQPVPY'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/QRUQQLV0'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/LJCL8P0'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/82RGU8PR'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/YQUCCJ2'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/28PU0P9L0'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/8Y98Q8U'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/9ULYPV8'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/2282LR0YG'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/YJ88Q2G'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/80QUGYC'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/8PJRRG2C'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/PCPRPJV'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/8LQ9JR82'
      )
    )

    result.push(
      await config.transform(
        { ...config, changefreq: 'hourly', priority: 0.6 },
        '/player/QCC0UVC'
      )
    )

    return result
  },
}
