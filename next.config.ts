import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // FIX: Whitelists all the qualities used in your images to stop the console errors
    qualities: [50, 60, 65, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    // FIX: This removes the 170ms "Render Blocking" delay by inlining styles
    optimizeCss: true,
  },
};

export default nextConfig;