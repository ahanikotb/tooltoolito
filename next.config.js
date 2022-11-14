/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true, domains: ["cdn.buymeacoffee.com"] },
};

module.exports = nextConfig;
