import OfferLayout from "components/offer/layout";
import Initial from "components/offer/steps/initial/index";
import React from "react";

function index({ data }) {
  return (
    <OfferLayout data={data} current={0}>
      <Initial data={data} />
    </OfferLayout>
  );
}
export async function getServerSideProps({ res, query }) {
  const { vehicle_id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles?vehicleID=${vehicle_id}`
  );
  const data = await resp.json();
  return { props: { data } };
}

export default index;
