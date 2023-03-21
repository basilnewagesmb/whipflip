import Head from "next/head";
import React from "react";

function MetaHead({
  title = "",
  description = "",
  ogTitle = "",
  ogDescription = "",
  extraContent = "",
  ogImage = "",
}) {
  const pageUrl = `${window.location.href}` || "https://www.whipflip.com/";
  const ogStaticImg = "https://whipflipnow.s3.amazonaws.com/Whipflip+Logo.png";
  const staticDescription =
    "Selling your used car online has never been easier. Find out what your car is worth and get a better offer than trade in. We come to you. Paid on the spot.";
  return (
    <Head>
      <title>{!title ? "Whip Flip" : title + " | Whip Flip"}</title>;
      <meta
        name="C"
        content={!description ? staticDescription : description}
      ></meta>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={pageUrl} />
      <meta
        property="twitter:title"
        content={!title ? "Whip Flip" : title + " | Whip Flip"}
      />
      <meta
        property="twitter:description"
        content={!description ? staticDescription : description}
      />
      <meta property="og:url" content={pageUrl} />
      <meta
        property="og:title"
        content={!ogTitle ? "Whip Flip" : ogTitle + " | Whip Flip"}
      />
      <meta
        property="og:description"
        content={"sdnmds"}
      />
      <meta
        property="twitter:image"
        content={"https://whipflipnow.s3.amazonaws.com/Whipflip+Logo.png"}
      />
      <meta property="og:image" content={"https://whipflipnow.s3.amazonaws.com/Whipflip+Logo.png"} />
      <meta
        property="og:image:secure_url"
        content={"https://whipflipnow.s3.amazonaws.com/Whipflip+Logo.png"}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <link rel="canonical" href={pageUrl} />
      {extraContent}
    </Head>
  );
}

export default MetaHead;
