import React from "react";
import SideBar from "components/offer/sideBar.js/index";
import Initial from "components/offer/steps/initial/index";
import { useSelector } from "react-redux";
import useCheckMobile from "utils/useCheckMobile";
function offer({ data }) {
  const isMobile = useCheckMobile();
  const { current } = useSelector((state) => state.offer);
  return (
    <div className="offer_body">
      <div className="container">
        <div className="row">
          <SideBar data={data} />
          <div className={!isMobile ? "col-lg-8" : ""}>
            {current == 0 && <Initial />}
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

export default offer;
