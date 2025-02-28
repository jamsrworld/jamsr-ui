import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ["@jamsr-ui/react"],
  },
  images: {
    contentDispositionType: "inline",
    remotePatterns: [
      {
        hostname: "i.pravatar.cc",
      },
      {
        hostname: "*.jamsrworld.com",
      },
      {
        hostname: "*.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
