/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages subpath configuration
  // For local development at root, set NEXT_PUBLIC_BASE_PATH=''
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/wagmi-v2-example',
};

module.exports = nextConfig;
