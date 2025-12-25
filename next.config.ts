import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Add trailing slash for better compatibility
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;