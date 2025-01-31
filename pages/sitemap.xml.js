const host = "https://www.whipflip.com";

function generateSiteMap({ blogs, seoPages }) {
  const main = [
    {
      url: "/",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 1.0,
    },
    {
      url: "/about",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.8,
    },
    {
      url: "/careers",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.7,
    },
    {
      url: "/contact-us",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.7,
    },
    {
      url: "/faq",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.6,
    },
    {
      url: "/how-it-works",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.8,
    },
    {
      url: "/link-is-no-longer",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.5,
    },
    {
      url: "/our-referral-program",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.6,
    },
    {
      url: "/privacy-policy",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.5,
    },
    {
      url: "/private-sale-vs-trading-in",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.6,
    },
    {
      url: "/reviews",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.7,
    },
    {
      url: "/terms-and-conditions",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.6,
    },
    {
      url: "/why-sell-your-car-to-us",
      lastmod: "2024-03-06T00:00:00+00:00",
      priority: 0.7,
    },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${main
  .map(({ url, priority, lastmod }) => {
    return `
  <url>
  <loc>${`${host}${url}`}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority}</priority>

  </url>
  `;
  })
  .join("")}
${blogs
  .map(({ slug, lastmod }) => {
    return `
<url>
<loc>${`${host}${slug}`}</loc>
<lastmod>${lastmod}</lastmod>
</url>
`;
  })
  .join("")}
  ${seoPages
    .map(({ slug, lastmod }) => {
      return `
  <url>
  <loc>${`${host}${slug}`}</loc>
  <lastmod>${lastmod}</lastmod>
  </url>
  `;
    })
    .join("")}
</urlset>
`;
}

export async function getServerSideProps({ res }) {
  let blogs = [];
  let seoPages = [];
  try {
    const bRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
    const bData = await bRes.json();
    if (bData?.blogs) {
      blogs = [
        {
          slug: "/blog",
          lastmod: new Date(bData?.blogs[0].created_at).toISOString(),
        },
        ...bData?.blogs.map((item) => ({
          slug: "/blog/" + item.name,
          lastmod: new Date(item.created_at).toISOString(),
        })),
      ];
    }
    const sRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/get-seo-pages`
    );
    const sData = await sRes.json();
    if (sData?.seo_pages) {
      seoPages = [
        ...sData?.seo_pages.map((item) => ({
          slug: "/" + item.slug,
          lastmod: new Date(item.created_at).toISOString(),
        })),
      ];
    }
  } catch (error) {}
  const sitemap = generateSiteMap({ blogs, seoPages });
  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default function SiteMap() {}
