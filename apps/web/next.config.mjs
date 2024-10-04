/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
