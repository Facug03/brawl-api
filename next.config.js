/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experiments = {
    topLevelAwait: true,
  },
  images: {
    domains: ['imagedelivery.net'],
  },
}

module.exports = nextConfig
