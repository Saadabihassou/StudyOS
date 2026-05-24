import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow importing images from external sources
  images: {
    domains: ["randomuser.me"],
  },
};

export default nextConfig;
