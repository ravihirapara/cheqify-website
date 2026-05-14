import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/en" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default withNextIntl(nextConfig);
