import { Steps } from "antd";
import React from "react";

function ProgressBar() {
  return (
    <Steps
      className="mb-5 "
      current={1}
      labelPlacement="vertical"
      items={[
        {
          title: "Initial Offer",
        },
        {
          title: "Confirm Offer",
        },
        {
          title: "Sell Car",
        },
      ]}
      responsive={false}
      size="large"
    />
  );
}

export default ProgressBar;
