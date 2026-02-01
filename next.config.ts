import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // FIX: This whitelists the quality levels you used so the errors stop
    qualities: [50, 60, 65, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    // FIX: This inlines CSS to remove that 170ms "Render Blocking" warning
    optimizeCss: true,
  },
};

export default nextConfig;