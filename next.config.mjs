/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@piwikpro/next-piwik-pro'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  experimental: {
    taint: true,
  },
  env: {
    PASSWORD_PROTECT: process.env.PASSWORD_PROTECT,
  },
};

export default nextConfig;
