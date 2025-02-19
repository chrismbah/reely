import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placebeard.it",
        port: "",
        pathname: "/250/**",
      }
    ],
  },
};

export default nextConfig;
