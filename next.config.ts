import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Optimized for production deployment
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
};

export default nextConfig;
