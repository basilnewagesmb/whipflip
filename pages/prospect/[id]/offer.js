import OfferLayout from "components/offer/layout";
import Sell from "components/offer/steps/sell/index";
import React, { useEffect } from "react";
import { useGetOfferQuery } from "services/offer/api";

function Index(props) {
  const { data, fbpixel } = props;
  const { data: offerData } = useGetOfferQuery(data?.uid, {
    skip: !data?.uid,
  });
  useEffect(() => {
    if (fbpixel) {
      const events = ["ViewContent"];
      for (let item of events) {
        fbpixel.event(item, {
          content_ids: [],
          content_category: "",
          content_name: "",
          content_type: "",
          contents: [],
          currency: "",
          num_items: 0,
          predicted_ltv: 0,
          search_string: "",
          status: "",
          value: "",
        });
      }
    }
  }, [fbpixel]);
  

  return (
    <OfferLayout data={offerData || data} current={2}>
      <Sell data={offerData || data} />
    </OfferLayout>
  );
}
export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  if (data.status !== "offer") {
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
