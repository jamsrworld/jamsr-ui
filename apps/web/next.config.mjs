/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@jamsr-ui/react"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
