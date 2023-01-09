/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  images: {
    domains: ['imagedelivery.net'],
  },
}

module.exports = nextConfig
