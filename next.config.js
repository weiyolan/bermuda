/** @type {import('next').NextConfig} */
const { i18nRewriter } = require("next-i18n-router");
const i18nConfig = require("./src/i18nConfig");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  // i18n: {
  //   locales: ['en', 'nl'],
  //   defaultLocale: 'en',
  // },
  images: {
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // domains: ['cdn.sanity.io'],

    // NEXTJS13
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    // DEFAULT:
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async redirects() {
    return [
      // {
      //   source: '/home',
      //   destination: '/',
      //   permanent: true,
      //   // locale:false,
      // },
      {
        source: "/nl/studio",
        destination: "/en/studio",
        permanent: true,
        locale: false,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/home",
          destination: "/",
          // permanent: true,
          // locale:false,
        },
      ],
      afterFiles: i18nRewriter(i18nConfig),
    };
  },

  //  // FOR SVGR Check Milo's project
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack'],
  //   });

  //   return config;
  // },

  reactStrictMode: true,
});

module.exports = nextConfig;
