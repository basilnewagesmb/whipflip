import { Button } from "antd";
import React, { useState } from "react";
function SkipButton({ skipToInstantOffer, initialOffer }) {
  const [skipping, setSkipping] = useState(false);
  return (
    <Button
      size="large"
      className="rounded"
      loading={skipping}
      onClick={async () => {
        setSkipping(true);
        const res = await skipToInstantOffer({
          detection_data: initialOffer?.detection_data || [],
          odometer_image: initialOffer?.odometer_image,
          vin: initialOffer?.vin,
          uid: initialOffer?.uid,
          plate_state: initialOffer?.plate_state,
          plate_number: initialOffer?.plate_number,
          option: 2,
          full_trim: initialOffer?.full_trim,
          jd_vehicle_id: initialOffer.jd_vehicle_id,
        });
        setSkipping(false);
        if (res.data) {
          window.location.href = `/prospect/${initialOffer.uid}/${res.data.status}`;
        } else {
        }
      }}
    >
      Skip to Instant Offer
    </Button>
  );
}

export default SkipButton;
