/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a GitHub Pages subpath, uncomment and configure the line below
  // basePath: '/your-repo-name',
};

module.exports = nextConfig;
