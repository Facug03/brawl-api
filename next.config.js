/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
  config.experiments = {
    topLevelAwait: true,
  },
  images: {
    domains: ['imagedelivery.net'],
  },
}

module.exports = nextConfig
