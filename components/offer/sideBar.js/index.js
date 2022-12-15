import React from "react";
import AverageInfo from "./averageInfo";
import CarInfo from "./carInfo";
import OfferInfo from "./offerInfo";
import ProgressBar from "./ProgressBar";
import WillComeback from "./willComeback";

function SideBar({ data }) {
  return (
    <div className="col-lg-4 p-0">
      <div className="formLeftSec">
        <ProgressBar />
        <div className="itemForSell" >
          <CarInfo data={data} />
          <OfferInfo isShow={false} />
          <AverageInfo isShow={false} />
        </div>
        <WillComeback isShow={true} />
      </div>
    </div>
  );
}

export default SideBar;
