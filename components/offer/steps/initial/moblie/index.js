import React, { useRef, useState } from "react";
import CarInfo from "./carInfo";
import { Carousel } from "antd";
import Milage from "./milage";
import ColorPicker from "./color";
import Transmission from "./transmission";
import StartAndDrive from "./start-and-drive";
import SeeInitOffer from "./see-init-offer";

function InitialMob({ data, form }) {
  const [container, setContainer] = useState(null);

  const carouselRef = useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="bookingcar">
      <div className="container">
        <CarInfo data={data} />
        <div className="offer_block noBordBtm offer_block_mobi">
          <div className="ob_hd">
            <h2>Vehicle Basics</h2>
          </div>
          <Carousel
            afterChange={onChange}
            dots={false}
            effect={"fade"}
            infinite={false}
            ref={carouselRef}
          >
            <Milage carouselRef={carouselRef} form={form} data={data} />
            <ColorPicker carouselRef={carouselRef} form={form} data={data} />
            <Transmission carouselRef={carouselRef} />
            <StartAndDrive />
            <SeeInitOffer />{" "}
          </Carousel>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default InitialMob;
