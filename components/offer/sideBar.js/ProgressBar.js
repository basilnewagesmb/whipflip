import { Steps } from "antd";
import React from "react";
import { useSelector } from "react-redux";

function ProgressBar({ isMobile }) {
  const offer = useSelector((state) => state.offer);
  return (
    <Steps
      className={!isMobile ? "mb-5 " : ""}
      current={offer.current}
      labelPlacement="vertical"
      items={offer.steps}
      responsive={false}
      size="large"
    />
  );
}

export default ProgressBar;
