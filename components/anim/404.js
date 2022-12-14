import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/data/pagina-404.json";
function NotFountAnim({ isLoading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  if (isLoading) {
    return <Lottie options={defaultOptions} width={350} />;
  }
}

export default NotFountAnim;
