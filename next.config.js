/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   esmExternals: false,
  //   jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  // },
  images: {
    domains: ['storage.googleapis.com', 'codac-364707.appspot.com'],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  env: {
    ssrSessionKey: process.env.SSR_SESSION_KEY,
  },
};

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' };
    }

    return config;
  },
};
