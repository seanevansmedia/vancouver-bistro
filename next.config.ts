import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // SPEED FIX: This inlines critical CSS to solve "Render Blocking" issues
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;