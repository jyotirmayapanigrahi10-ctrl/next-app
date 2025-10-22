import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // ✅ Required for Docker/ECS deployment
  reactStrictMode: true, // optional but recommended
  poweredByHeader: false, // optional security best practice
  eslint: {
    ignoreDuringBuilds: true, // optional for smoother CI/CD builds
  },
  typescript: {
    ignoreBuildErrors: true, // optional for CI/CD
  },
};

export default nextConfig;
