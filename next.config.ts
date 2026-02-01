import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: require('path').join(__dirname),
  images: {
    domains: [],
    unoptimized: true,
  },
};

export default nextConfig;
