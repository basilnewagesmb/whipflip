import React from "react";
import useCheckMobile from "utils/useCheckMobile";
import AverageInfo from "./averageInfo";
import CarInfo from "./carInfo";
import OfferInfo from "./offerInfo";
import ProgressBar from "./ProgressBar";
import WillComeback from "./willComeback";

function SideBar({ data }) {
  const isMobile = useCheckMobile();
  return (
    <div className="col-lg-4 p-0">
      <div className="formLeftSec">
        <ProgressBar isMobile={isMobile} />
        {!isMobile ? (
          <div className="itemForSell">
            <CarInfo data={data} isShow={!isMobile} />
            <OfferInfo isShow={false} />
            <AverageInfo isShow={false} />
          </div>
        ) : (
          ""
        )}
        <WillComeback isShow={false && !isMobile} />
      </div>
    </div>
  );
}

export default SideBar;
