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
  // EXPERIMENTAL: This inlines the CSS needed for the Hero directly into the HTML
  // It removes the 190ms "Render Blocking" delay you are seeing in PageSpeed.
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;