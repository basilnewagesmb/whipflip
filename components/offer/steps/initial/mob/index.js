import React, { useRef, useState } from "react";
import CarInfo from "./carInfo";
import { Carousel } from "antd";
import Milage from "./milage";
import ColorPicker from "./color";
import Transmission from "./transmission";
import StartAndDrive from "./start-and-drive";
import SeeInitOffer from "./see-init-offer";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import useMobileHandler from "services/offer/initial/mobileHandler";
import { useDispatch } from "react-redux";
import { setCurrentSlide } from "features/mob/mobSlice";
function InitialMob({ data, form, carouselRef }) {
  const { currentSlide, next, prev, goTo } = useMobileHandler(
    carouselRef,
    form
  );
  const dispatch = useDispatch();
  return (
    <div className="bookingcar">
      <div className="container">
        <CarInfo data={data} full={currentSlide == 0} />
        <div className="offer_block noBordBtm offer_block_mobi">
          {currentSlide == 4 ? (
            <div className="initOffHd position-relative">
              <Button
                className="fixed_back d-flex justify-content-center align-items-center"
                shape="circle"
                icon={<LeftOutlined />}
                disabled={currentSlide == 0}
                onClick={prev}
              />
              <h2>
                <span>See Your Initial Offer!</span>
                <span>Where Can We Send It?</span>
              </h2>
            </div>
          ) : (
            <div className="ob_hd d-flex justify-content-between">
              <h2>Vehicle Basics</h2>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  className=" d-flex justify-content-center align-items-center"
                  shape="circle"
                  icon={<LeftOutlined />}
                  disabled={currentSlide == 0}
                  onClick={prev}
                />
              </div>
            </div>
          )}
          <Carousel
            afterChange={(i) => dispatch(setCurrentSlide(i))}
            dots={false}
            effect={"fade"}
            infinite={false}
            ref={carouselRef}
            autoplay={false}
            swipe={false}
          >
            <Milage form={form} data={data} next={next} goTo={goTo} />
            <ColorPicker form={form} data={data} next={next} />
            <Transmission form={form} next={next} />
            <StartAndDrive form={form} data={data} next={next} />
            <SeeInitOffer form={form} data={data} goTo={goTo} />{" "}
          </Carousel>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default InitialMob;
