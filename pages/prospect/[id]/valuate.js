import Initial from "components/offer/steps/confirm/mob/valuate/initial";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import useValuateFun from "services/offer/confirm/valuateFun";
import { useGetOfferQuery } from "services/offer/api";
import ProgressBar from "components/offer/sideBar.js/ProgressBar";
import Header from "layout/Header";
import Footer from "layout/Footer";
const Camera = dynamic(
  () => import("components/offer/steps/confirm/mob/valuate/camera"),
  { ssr: false }
);
const Uploading = dynamic(
  () => import("components/offer/steps/confirm/mob/valuate/uploading"),
  { ssr: false }
);
function Index({ data }) {
  const { data: offerData } = useGetOfferQuery(data?.uid, {
    skip: !data?.uid,
  });
  const valuateControl = useValuateFun({ offerData });
  const { state } = valuateControl;
  return (
    <>
      <ConditionalWrap
        condition={state.current == "uploading"}
        wrap={(wrappedChildren) => (
          <>
            <Header />
            <div className="col-lg-4 pt-5">
              <div className="pt-5 b-0">
                {" "}
                <ProgressBar current={1} />
              </div>
            </div>
            {wrappedChildren}
            <Footer />
          </>
        )}
      >
        {state.current == "initial" && <Initial {...valuateControl} />}
        {state.current == "camera" && <Camera {...valuateControl} />}{" "}
        {state.current == "uploading" && <Uploading {...valuateControl} />}{" "}
      </ConditionalWrap>
    </>
  );
}
const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;
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
