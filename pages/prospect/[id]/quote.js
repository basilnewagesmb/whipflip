import OfferLayout from "components/offer/layout";
import Confirm from "components/offer/steps/confirm/index";
import React, { useEffect, useState } from "react";
import { useGetOfferQuery } from "services/offer/api";

function Index(props) {
  const { data, fbpixel, analytics } = props;
  const { data: offerData } = useGetOfferQuery(data?.uid, {
    skip: !data?.uid,
  });
  useEffect(() => {
    if (fbpixel) {
      fbpixel.customEvent("Initial-Offer", {
        content_ids: [],
        content_category: "Initial Offer",
        content_name: "Initial Offer",
        content_type: "Initial-Offer",
        contents: [],
        currency: "",
        num_items: 0,
        predicted_ltv: 0,
        search_string: "",
        status: "",
        value: "",
      });
    }
    analytics &&
      analytics.event("Initial Offer", "Initial Offer", `Initial Offer`);
  }, [fbpixel, analytics]);
  return (
    <OfferLayout data={offerData || data} current={1}>
      <Confirm
        data={offerData || data}
        fbpixel={fbpixel}
        analytics={analytics}
      />
    </OfferLayout>
  );
}
export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  if (data.status !== "quote") {
    return {
      redirect: {
        permanent: false,
        destination: `/prospect/${data.uid}/${data.status}`,
      },
      props: { data },
    };
  } else {
    return {
      props: { data },
    };
  }
}

export default Index;
