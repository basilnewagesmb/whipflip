import Image from "next/image";
import React from "react";
import useCheckMobile from "utils/checkMobile";
function ReadyToSell() {
  const isMobile = useCheckMobile();
  return (
    <div className="ready-to-sell">
      <div className="container h100">
        <div className="row h100">
          <div className="col-lg-7 align-self-center">
            <div className="relHd text-center">
              <h2>Ready to Sell?</h2>
              <p>We are ready to buy now, at your door, and on your time!</p>
              <button className="sell_car_btn">Sell Your Car Now!</button>
            </div>
          </div>
          <div className="col-lg-5 align-self-end">
            <div className="rts-rtImg">
              <Image
                src="/images/sell_to_customer.png"
                alt="Ready to Sell"
                title="Ready to Sell"
                width={445}
                height={392}
                style={
                  isMobile && {
                    objectFit: "cover",
                    objectPosition: "left",
                  }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToSell;
