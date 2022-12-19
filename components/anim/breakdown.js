import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/data/breakdown.json";
function BreakDown({ isLoading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  if (isLoading) {
    return <Lottie options={defaultOptions} width={200} />;
  }
}

export default BreakDown;
