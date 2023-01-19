import Initial from "components/offer/steps/confirm/mob/valuate/initial";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import useValuateFun from "services/offer/confirm/valuateFun";
import { useGetOfferQuery } from "services/offer/api";
const Camera = dynamic(
  () => import("components/offer/steps/confirm/mob/valuate/camera"),
  { ssr: false }
);
function Index({ data }) {
  const { data: offerData } = useGetOfferQuery(data?.uid, {
    skip: !data?.uid,
  });
  const valuateControl = useValuateFun({offerData});
  const { state } = valuateControl;
  return (
    <>
      {state.current == "initial" && <Initial {...valuateControl} />}
      {state.current == "camera" && <Camera {...valuateControl} />}
    </>
  );
}

export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  return {
    props: { data },
  };
}
export default Index;
