/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // Commented out for development
  // basePath: '', // Not needed for development
  // trailingSlash: true, // Not needed for development
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
