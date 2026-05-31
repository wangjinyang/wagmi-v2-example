/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages subpath configuration
  // For local development at root, set NEXT_PUBLIC_BASE_PATH=''
  basePath:
    typeof process.env.NEXT_PUBLIC_BASE_PATH !== "undefined"
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : "/wagmi-v2-example",
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@react-native-async-storage/async-storage': false,
    };
    return config;
  },
};

module.exports = nextConfig;
