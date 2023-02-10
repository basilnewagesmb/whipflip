import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function AverageInfo({ isShow }) {
  const { pathname } = useRouter();
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
              {["quote", "vehicle"]?.includes(
                pathname.split("/")[pathname.split("/").length - 1]
              ) ? (
                <>
                  Feel free to compare your awesome offer to average trade-in
                  value. You may find that your offer is up to{" "}
                  <b>14% higher than the national average!</b>
                </>
              ) : (
                <>
                  <b> 96% of WhipFlip customers</b> who scheduled an appointment
                  to set happily sold their cars to us! Ready to sell? We are
                  ready to buy. No time wasted by either party. We stand behind
                  our words!
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default AverageInfo;
