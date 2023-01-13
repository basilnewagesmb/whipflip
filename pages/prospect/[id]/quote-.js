import React, { useEffect } from "react";
import SideBar from "components/offer/sideBar.js/index";
import Initial from "components/offer/steps/initial/index";
import { useDispatch, useSelector } from "react-redux";
import useCheckMobile from "utils/checkMobile";
import { useRouter } from "node_modules/next/router";
import { initialize } from "features/site/siteSlice";
import Confirm from "components/offer/steps/confirm/index";
import Sell from "components/offer/steps/sell/index";
function Offer({ data }) {
  const { query } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    ga(function () {
      dispatch(initialize(query));
    });
  }, [query]);
  const isMobile = useCheckMobile();
  const { current } = useSelector((state) => state.offer);
  return (
    <div className="offer_body">
      <div className="container">
        <div className="row">
          <SideBar data={data} />
          <div className={!isMobile ? "col-lg-8" : "col-12"}>
            {current == 0 && <Initial data={data} />}
            {current == 1 && <Confirm data={data} />}
            {current == 2 && <Sell data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles?vehicleID=${id}`
  );
  const data = await resp.json();
  return { props: { data } };
}

export default Offer;
