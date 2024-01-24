import { Button } from "antd";
import React, { useState } from "react";
import GTMDataLayer from "utils/GTM/dataLayer";

function SkipButton({ skipToInstantOffer, initialOffer, analytics, fbpixel }) {
  const gtm = GTMDataLayer();

  const [skipping, setSkipping] = useState(false);
  const offer = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.offer
  );
  return (
    <Button
      size="large"
      className="rounded getOfferBtn"
      loading={skipping}
      onClick={async () => {
        setSkipping(true);
        const res = await skipToInstantOffer({
          detection_data: initialOffer?.detection_data || [],
          odometer_image: initialOffer?.odometer_image,
          vin: initialOffer?.vin || offer?.initialOffer?.vin,
          uid: initialOffer?.uid,
          plate_state: initialOffer?.plate_state,
          plate_number: initialOffer?.plate_number,
          option: 2,
          full_trim: initialOffer?.full_trim,
          jd_vehicle_id: initialOffer.jd_vehicle_id,
        });
        setSkipping(false);
        if (res.data) {
          analytics &&
            analytics.event("FastForward", "Fast Forward", `Offer generated`);
          fbpixel &&
            fbpixel.customEvent("FastForward", {
              content_name: "Fast Forward",
              content_category: `Offergenerated`,
              contents: [{ ...res.data }],
            });
          try {
            gtm.offerCompleted({
              email: initialOffer?.email,
              phone_number: initialOffer?.phone,
              postal_code: initialOffer?.zipcode
            })
          } catch (error) {
            console.log({ GTMDataLayer: error });
          }
          import("next/router").then(useRouter => {
            const { replace } = useRouter
            replace(`/prospect/${initialOffer?.uid}/offer`);
          });
        }
      }}
    >
      Skip to Final Offer
    </Button>
  );
}

export default SkipButton;
