import React, { useRef, useState } from "react";

function useMobileHandler(carouselRef, form) {
  const [data, setData] = useState({
    currentSlide: 0,
  });
  const setCurrentSlide = (i) => {
    setData((prev) => ({ ...prev, currentSlide: i }));
  };
  const next = () => {
    carouselRef.current.next();
  };
  const prev = () => {
    carouselRef.current.prev();
  };
  const goTo = (e) => {
    carouselRef.current.goTo(e);
  };
  console.log(data);

  return { ...data, setCurrentSlide, next, prev, goTo };
}

export default useMobileHandler;
