import React, { useEffect } from "react";
import SideBar from "components/offer/sideBar.js/index";
import Initial from "components/offer/steps/initial/index";
import { useDispatch, useSelector } from "react-redux";
import useCheckMobile from "utils/checkMobile";
import { useRouter } from "node_modules/next/router";
import { initialize } from "features/site/siteSlice";
import { isDev, isLocal } from "utils/helper";
function OfferLayout({ children, data, current }) {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const shouldNotTrack = isLocal("localhost") || isDev();

  useEffect(() => {
    shouldNotTrack &&
      window?.ga &&
      ga(function () {
        dispatch(initialize(query));
      });
  }, [query]);
  const isMobile = useCheckMobile();
  return (
    <div className="offer_body">
      <div className="container">
        <div className="row">
          <SideBar data={data} current={current} />
          <div className={!isMobile ? "col-lg-8" : "col-12"}>{children}</div>
        </div>
      </div>
    </div>
  );
}
export default OfferLayout;
