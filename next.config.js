/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   esmExternals: false,
  //   jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  // },
  images: {
    domains: ["storage.googleapis.com", "codac-364707.appspot.com"],
  },
  env: {
    ssrSessionKey: process.env.SSR_SESSION_KEY,
  },
}

module.exports = nextConfig
