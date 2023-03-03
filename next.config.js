/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "demo.whipflip.com",
      "whipflip.com",
      "d2ivfcfbdvj3sm.cloudfront.net",
    ],
  }
};

module.exports = nextConfig;
