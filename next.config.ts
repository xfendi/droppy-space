import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [new URL("https://r2.droppy.space/**")],
  },
};

export default nextConfig;
