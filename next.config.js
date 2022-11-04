/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   esmExternals: false,
  //   jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  // },
  images: {
    domains: ["codac-364707.appspot.com"],
  },
}

module.exports = nextConfig
