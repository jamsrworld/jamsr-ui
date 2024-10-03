/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@jamsr-ui/react"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
