import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
    domains: ['fakestoreapi.com'], // Only needed if you're using the legacy 'domains' config
  },
  // Optional: Add experimental features if needed
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;