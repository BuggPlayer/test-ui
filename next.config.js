/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  /*  experimental: {
    serverActions: true,
  }, */
};

module.exports = nextConfig;
