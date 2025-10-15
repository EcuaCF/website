import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/website',
        permanent: true, // Use false for temporary redirects
      },
    ];
  },
  basePath: "/website",
  assetPrefix: "/website/",
}
module.exports = nextConfig;