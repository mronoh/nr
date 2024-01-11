/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  },
  reactStrictMode: true,
  compiler: { removeConsole: false },
  swcMinify: true
}

module.exports = nextConfig
