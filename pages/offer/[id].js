import React from "react";
import SideBar from "components/offer/sideBar.js/index";
import Initial from "components/offer/steps/initial/index";
function offer({ data }) {
  return (
    <div className="offer_body">
      <div className="container">
        <div className="row">
          <SideBar data={data} />
          <div className="col-lg-8">
           <Initial/>
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
