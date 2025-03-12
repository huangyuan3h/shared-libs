/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@shared-libs/ui'],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
