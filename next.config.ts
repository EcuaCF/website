import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // You likely already have this if you're using GitHub Pages
  basePath: "/website", // 👈 this tells Next.js where it lives
  assetPrefix: "/website/", // 👈 ensures static assets load correctly
};
module.exports = nextConfig

export default nextConfig;
