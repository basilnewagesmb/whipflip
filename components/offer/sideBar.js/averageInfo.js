import Image from "next/image";
import React from "react";

function AverageInfo({ isShow }) {
  return (
    isShow && (
      <div className="whip_cus_info">
        <div className="wci_in">
          <div className="wci_left">
            <Image
              src="/images/bulb.svg"
              alt="bulb"
              title="bulb"
              width={100}
              height={100}
            />
          </div>
          <div className="wci_right">
            <p>
              Feel free to compare your free estimate to average trade-in values
              and you may see that your car might worth up to{" "}
              <b>14% higher than the national average!</b>
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default AverageInfo;
