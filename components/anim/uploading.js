import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/data/uploading.json";
function UploadingAnim({ isLoading, speed }) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };
  return <Lottie options={defaultOptions} width={80} speed={speed} />;
}

export default UploadingAnim;
