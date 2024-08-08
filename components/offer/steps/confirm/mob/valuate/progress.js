import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";
import { Carousel } from "antd";
import UploadingAnim from "components/anim/uploading";

export const Progress = ({ speed }) => {
  return (
    <div className="d-flex  justify-content-center  text-center flex-column">
      <UploadingAnim isLoading={true} speed={speed} />
      <p className="text-center text-muted">
        Please wait! This can take up to minute..
      </p>
      <p className="text-center text-muted">
        <b>
          Your awesome offer
          <br /> is getting ready...
        </b>
      </p>
      <Fade spy={true} left>
        <Image src="/images/car-anim.gif" width={200} height={200} />
      </Fade>
      <p className="text-center">Why sell to WhipFlip?</p>
      <Carousel
        className="mb-5"
        autoplay={true}
        autoplaySpeed={2000}
        loop={true}
        fade
      >
        <div>
          <div className="whip_cus_info px-4">
            <div className="wci_in d-block">
              <div className="wci_right  d-flex flex-column align-items-center justify-content-center">
                <Image
                  src="/images/bp.svg"
                  alt="bulb"
                  title="bulb"
                  width={60}
                  height={60}
                />
                <p>
                  <b>
                    Messing with strangers and tire-kickers is now a thing of
                    the past! WhipFlip is at your door, on your time to buy!
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="whip_cus_info px-4">
            <div className="wci_in d-block">
              <div className="wci_right  d-flex flex-column align-items-center justify-content-center">
                <Image
                  src="/images/car.svg"
                  alt="bulb"
                  title="bulb"
                  width={60}
                  height={60}
                />
                <p>
                  <b>
                    No more traveling to dealers for low ball trade in offers!
                    WhipFlip comes to you to pay and pick up!
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="whip_cus_info px-4">
            <div className="wci_in d-block">
              <div className="wci_right  d-flex flex-column align-items-center justify-content-center">
                <Image
                  src="/images/car.svg"
                  alt="bulb"
                  title="bulb"
                  width={60}
                  height={60}
                />
                <p>
                  <b>
                    {`WhipFlip has a 5 Star Google review average and BBB A
                    Rating. We're trusted by the best names in the industry!`}
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="whip_cus_info px-4">
            <div className="wci_in d-block">
              <div className="wci_right  d-flex flex-column align-items-center justify-content-center">
                <p>
                  <b>
                    Our partnership with JD Power ensures your offer is
                    top-notch and based on current market value!
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
