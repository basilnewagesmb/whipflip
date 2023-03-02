import Head from "next/head";
import React from "react";

function MetaHead({ title = "", description = "" }) {
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
      <meta name="twitter:site" content="https://www.whipflip.com/" />
      <meta property="og:url" content="https://www.whipflip.com/" />
      <meta
        property="og:title"
        content="Sell Your Car Online in 3 Steps | Whip Flip"
      />
      <meta
        property="og:description"
        content="Selling your used car online has never been easier. Find out what your car is worth and get a better offer than trade in. We come to you. Paid on the spot."
      />
      <link rel="canonical" href="https://www.whipflip.com/" />
    </Head>
  );
}

export default MetaHead;
