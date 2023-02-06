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
              <b> 96% of WhipFlip customers</b> who scheduled an appointment to
              set happily sold their cars to us! Ready to sell? Were ready to
              buy. No time wasted by either party We stand behind our words!
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default AverageInfo;
