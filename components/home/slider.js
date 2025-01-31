import { setReviews } from "features/reviews/reviewsSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import services from "utils/services";

const HappyCustomersSlider = () => {
  const dispatch = useDispatch();
  const reviews = useRef(null);
  useEffect(() => {
    if (window)
      services.loadScript(
        `https://widgets.rr.skeepers.io/carousel/74b77a84-2556-b644-d55f-1bd5142f4822/2d22ee34-65df-4b2c-b954-c6280398ee28.js`,
        () => {}
      );
  }, []);

  return (
    <div className="container pt-5">
      <div
        class="skeepers_carousel_container"
        dataSlidesCount="4"
        ref={reviews}
      ></div>
    </div>
  );
};

export default HappyCustomersSlider;
