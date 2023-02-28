/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_API_URL).hostname],
  },
  publicRuntimeConfig: {
    api: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL + "/v2/:path*",
      },
    ];
  },
  i18n: {
    locales: ["default", "fr", "es", "ar", "en", "it", "de", "nl"],
    defaultLocale: "default",
    localeDetection: false,
  },
};

module.exports = nextConfig;
