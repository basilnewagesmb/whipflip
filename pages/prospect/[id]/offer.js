import OfferLayout from "components/offer/layout";
import Confirm from "components/offer/steps/confirm/index";
import Sell from "components/offer/steps/sell/index";
import React from "react";
import { useGetOfferQuery } from "services/offer/api";

function Index({ data }) {
  const { data: offerData } = useGetOfferQuery(data?.uid, {
    skip: !data?.uid,
  });

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
