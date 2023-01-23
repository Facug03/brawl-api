/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.experiments.topLevelAwait = true 
    return config
  },
  images: {
    domains: ['imagedelivery.net'],
  },
}

module.exports = nextConfig
