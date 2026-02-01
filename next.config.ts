import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Render.com
  output: 'export',

  // Add trailing slash for better static hosting compatibility
  trailingSlash: true,

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  // Skip build optimization for static export
  swcMinify: true,
};

export default nextConfig;
