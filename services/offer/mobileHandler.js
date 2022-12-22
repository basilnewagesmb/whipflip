import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

function useMobileHandler(carouselRef, form) {
  const currentSlide = useSelector((state) => state.mob.currentSlide);
  const next = () => {
    carouselRef.current.next();
  };
  const prev = () => {
    carouselRef.current.prev();
  };
  const goTo = (e) => {
    carouselRef.current.goTo(e);
  };

  return { currentSlide, next, prev, goTo };
}

export default useMobileHandler;
