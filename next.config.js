/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["codac-364707.appspot.com"],
  },
}

module.exports = nextConfig
