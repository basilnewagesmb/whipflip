import { Image } from "antd";
import { useWindowSize } from "@react-hook/window-size/throttled";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "features/offer/offerSlice";
function ReadyToSell() {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [width] = useWindowSize();
  useEffect(() => {
    if (width >= 769) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width]);
  return (
    <div
      className="ready-to-sell"
      style={
        isMobile
          ? {
              backgroundImage: "url()",
            }
          : {}
      }
    >
      <div className="container h100">
        <div className="row h100">
          <div className="col-lg-7 align-self-center">
            <div className="relHd text-center">
              <h2>Ready to Sell?</h2>
              <p>We are ready to buy now, at your door, and on your time!</p>
              <button
                className="sell_car_btn"
                onClick={() => dispatch(setIsModalOpen())}
              >
                Sell Your Car Now!
              </button>
            </div>
          </div>
          <div className={`col-lg-5 col-12 align-self-end ${isMobile && " p-0"}`}>
            <div
              className="rts-rtImg"
              style={
                isMobile
                  ? {
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "40px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                    }
                  : {}
              }
            >
              <Image
                src={
                  isMobile
                    ? "/images/ready-to-sell-bg-mob.webp"
                    : "/images/sell_to_customer.webp"
                }
                alt="Ready to Sell"
                preview={false}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToSell;
