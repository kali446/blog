/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        { hostname: 'cdn.sanity.io' },
        { hostname: 'source.unsplash.com' },
      ],
    },
  };
  
  module.exports = nextConfig;
  