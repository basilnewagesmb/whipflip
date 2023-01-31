import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/data/scroll.json";
function Scroll({ isLoading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  if (isLoading) {
    return <Lottie options={defaultOptions} width={50} />;
  }
}

export default Scroll;
