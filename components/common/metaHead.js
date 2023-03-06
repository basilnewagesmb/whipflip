import Head from "next/head";
import React from "react";

function MetaHead({
  title = "",
  description = "",
  ogTitle = "",
  ogDescription = "",
  extraContent = "",
}) {
  const pageUrl = `${window.location.href}` || "https://www.whipflip.com/";
  return (
    <Head>
      <title>{!title ? "Whip Flip" : title + " | Whip Flip"}</title>;
      <meta
        name="Description"
        content={
          !description
            ? "Selling your used car online has never been easier. Find out what your car is worth and get a better offer than trade in. We come to you. Paid on the spot."
            : description
        }
      ></meta>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={pageUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta
        property="og:title"
        content={!ogTitle ? "Whip Flip" : ogTitle + " | Whip Flip"}
      />
      <meta
        property="og:description"
        content={
          !ogDescription
            ? "Selling your used car online has never been easier. Find out what your car is worth and get a better offer than trade in. We come to you. Paid on the spot."
            : ogDescription
        }
      />
      <link rel="canonical" href={pageUrl} />
      {extraContent}
    </Head>
  );
}

export default MetaHead;
