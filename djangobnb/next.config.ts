import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: '64.226.81.32',
        port: '1337',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
