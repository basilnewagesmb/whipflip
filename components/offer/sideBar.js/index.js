import React from "react";
import { useSelector } from "react-redux";
import useCheckMobile from "utils/checkMobile";
import AverageInfo from "./averageInfo";
import CarInfo from "./carInfo";
import OfferInfo from "./offerInfo";
import ProgressBar from "./ProgressBar";
import WillComeback from "./willComeback";

function SideBar({ data }) {
  const isMobile = useCheckMobile();
  const { current, initialOffer } = useSelector((state) => state.offer);
  return (
    <div className="col-lg-4 p-0">
      <div className="formLeftSec">
        <ProgressBar isMobile={isMobile} />
        {!isMobile ? (
          <div className="itemForSell">
            <CarInfo
              data={data}
              isShow={!isMobile}
              initialOffer={initialOffer}
            />
            <OfferInfo isShow={current > 1} />
            <AverageInfo isShow={current > 0} />
          </div>
        ) : (
          ""
        )}
        <WillComeback isShow={initialOffer && !isMobile} />
      </div>
    </div>
  );
}

export default SideBar;
