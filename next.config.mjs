/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Render.com
  output: 'export',

  // Add trailing slash for better static hosting compatibility
  trailingSlash: true,

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
