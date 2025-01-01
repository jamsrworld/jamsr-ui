import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
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
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
