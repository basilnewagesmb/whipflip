/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "demo.whipflip.com",
      "whipflip.com",
      "d2ivfcfbdvj3sm.cloudfront.net",
      "seal-delaware.bbb.org",
      "dbhdyzvm8lm25.cloudfront.net",
      "whipflipnow.s3.amazonaws.com",
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
      {
        source: "/blog/cash_for_cars_new_jersey",
        destination: "/cash-for-cars-new-jersey",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_wilmington_de",
        destination: "/cash-for-cars-wilmington-de",
        permanent: true,
      },
      {
        source: "/blog/how_much_is_a_2015_nissan_altima_worth",
        destination: "/how-much-is-a-2015-nissan-altima-worth",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_akron_ohio",
        destination: "/cash-for-cars-akron-ohio",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_cleveland_oh",
        destination: "/cash-for-cars-cleveland-oh",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_dayton_ohio",
        destination: "/cash-for-cars-dayton-ohio",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_edison_nj",
        destination: "/cash-for-cars-edison-nj",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_youngstown_oh",
        destination: "/cash-for-cars-youngstown-oh",
        permanent: true,
      },
      {
        source: "/blog/sell_my_2019_tesla_model_3",
        destination: "/sell-my-2019-tesla-model-3",
        permanent: true,
      },
      {
        source: "/blog/sell_my_audi_a5_sportback",
        destination: "/sell-my-audi-a5-sportback",
        permanent: true,
      },
      {
        source: "/blog/sell_my_car_in_cincinnati_oh",
        destination: "/sell-my-car-in-cincinnati-oh",
        permanent: true,
      },
      {
        source: "/blog/sell_my_car_in_elizabeth_nj",
        destination: "/sell-my-car-in-elizabeth-nj",
        permanent: true,
      },
      {
        source: "/blog/sell_my_chevy_silverado_1500",
        destination: "/sell-my-chevy-silverado-1500",
        permanent: true,
      },
      {
        source: "/blog/sell_my_kia_forte_gt",
        destination: "/sell-my-kia-forte-gt",
        permanent: true,
      },

      {
        source: "/blog/sell_my_car_in_toms_river_nj",
        destination: "/sell-my-car-in-toms-river-nj",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_in_canton_oh",
        destination: "/cash-for-cars-in-canton-oh",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_in_trenton_nj",
        destination: "/cash-for-cars-in-trenton-nj",
        permanent: true,
      },
      {
        source: "/blog/cash_for_cars_minneapolis_mn",
        destination: "/cash-for-cars-minneapolis-mn",
        permanent: true,
      },
      {
        source: "/blog/sell_your_car_for_cash_in_parma_oh",
        destination: "/sell-your-car-for-cash-in-parma-oh",
        permanent: true,
      },
      {
        source: "/blog/sell_my_2020_alfa_romeo_giulia",
        destination: "/sell-my-2020-alfa-romeo-giulia",
        permanent: true,
      },
      {
        source: "/blog/sell_my_2022_honda_civic",
        destination: "/sell-my-2022-honda-civic",
        permanent: true,
      },
      {
        source: "/blog/sell_my_volkswagen_arteon",
        destination: "/sell-my-volkswagen-arteon",
        permanent: true,
      },
      {
        source: "/blog/sell_my_volvo_s90",
        destination: "/sell-my-volvo-s90",
        permanent: true,
      },
      {
        source: "/blog/sell_my_car_dayton_ohio",
        destination: "/sell-my-car-dayton-ohio",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
