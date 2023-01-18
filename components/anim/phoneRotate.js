import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/data/rotate.json";
function RotatePhone({ isLoading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  if (isLoading) {
    return <Lottie options={defaultOptions} width={160} />;
  }
}

export default RotatePhone;
