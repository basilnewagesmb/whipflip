/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "demo.whipflip.com",
      "whipflip.com",
      "d2ivfcfbdvj3sm.cloudfront.net",
      "seal-delaware.bbb.org",
      "dbhdyzvm8lm25.cloudfront.net"
    ],
  },
  headers: () => [
    {
      source: "/:prospect*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
    {
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
    {
      source: "/:vehicle*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/private-sale",
        destination: "/private-sale-vs-trading-in",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/why-sell-to-us",
        destination: "/why-sell-your-car-to-us",
        permanent: true,
      },
      { source: "/index", destination: "/", permanent: true },
      {
        source: "/charlotte-north-carolina",
        destination: "/",
        permanent: true,
      },
      { source: "/pittsburgh-pennsylvania", destination: "/", permanent: true },
      { source: "/columbus-ohio", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
