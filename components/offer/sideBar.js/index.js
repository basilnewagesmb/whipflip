import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetOfferQuery } from "services/offer/api";
import useCheckMobile from "utils/checkMobile";
import AverageInfo from "./averageInfo";
import CarInfo from "./carInfo";
import OfferInfo from "./offerInfo";
import ProgressBar from "./ProgressBar";
import WillComeback from "./willComeback";

function SideBar({ data, current }) {
  const isMobile = useCheckMobile();
  const { initialOffer } = useSelector((state) => state.offer);
  const { data: offerData } = useGetOfferQuery(
    { id: initialOffer?.uid },
    {
      skip: !initialOffer?.uid,
    }
  );

  return (
    <div className="col-lg-4 p-0">
      <div className="formLeftSec">
        <ProgressBar isMobile={isMobile} current={current} />
        {!isMobile ? (
          <div className="itemForSell">
            <CarInfo
              data={offerData || initialOffer || data}
              isShow={!isMobile}
              initialOffer={offerData || initialOffer}
            />
            <OfferInfo
              data={offerData || initialOffer || data}
              isShow={current > 1}
            />
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
