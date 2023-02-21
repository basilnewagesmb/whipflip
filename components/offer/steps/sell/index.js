import LoaderAnim from "components/common/loader";
import React, { useEffect } from "react";
import useSellFuc from "services/offer/sell/function";
import Accept from "./web/accept";
import SellFrom from "./web/sellForm";
function Sell(props) {
  const { data, analytics, fbpixel } = props;
  const sellData = useSellFuc(data);
  const { isAccept, isLoading, zipStatus, formData, successData } = sellData;
  useEffect(() => {
    if (zipStatus === false) {
      analytics?.event(
        "OutOfArea-OfferPage",
        "Out of area",
        `${formData?.formRealData?.zip}`
      );
      fbpixel?.customEvent("OutOfArea-OfferPage", {
        content_name: "Out of area",
        content_category: `OutOfArea-OfferPage: ${formData?.formRealData?.zip}`,
        contents: [
          {
            ...formData?.formRealData,
          },
        ],
      });
    }
  }, [zipStatus]);
  useEffect(() => {
    if (successData?.uid) {
      analytics.event(
        "appointment",
        "Filled Appointment Data",
        successData.uid
      );
      fbpixel &&
        fbpixel.customEvent("appointment", {
          content_name: "Filled Appointment Data",
          content_category: `Filled Appointment Data`,
          content_ids: [successData.uid],
        });
    }
  }, [successData]);

  return (
    <>
      <LoaderAnim text="Loading..." isLoading={isLoading} />
      {!isAccept && <Accept {...sellData} />}
      {isAccept && <SellFrom {...sellData} />}
    </>
  );
}

export default Sell;
