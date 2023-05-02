/** @type {import('next').NextConfig} */
	const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: false,
  	  i18n,
  // i18n: {
  //   // The locales you want to support in your app
  //   locales: ["en", "fa"],
  //   // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: "fa",
  //   localeDetection: false,
  // },
  images: {
      domains: [
      'via.placeholder.com',
      'res.cloudinary.com',
      's3.amazonaws.com',
      '18.141.64.26',
      '127.0.0.1',
      'localhost',
      'picsum.photos',
      'pickbazar-sail.test',
      'pickbazarlaravel.s3.ap-southeast-1.amazonaws.com',
      'lh3.googleusercontent.com',
    ],
    deviceSizes: [670, 750, 828, 1080, 1224, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};
module.exports = nextConfig;

