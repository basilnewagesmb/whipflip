import OfferLayout from "components/offer/layout";
import Confirm from "components/offer/steps/confirm/index";
import React from "react";

function index({ data }) {
  return (
    <OfferLayout data={data} current={1}>
      <Confirm data={data} />
    </OfferLayout>
  );
}
export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  return { props: { data } };
}

export default index;
