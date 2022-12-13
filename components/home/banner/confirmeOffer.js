import Link from "next/link";
import Image from "next/image";
import React from "react";

function ConfirmOffer() {
  return (
    <div className="card card-outline-secondary home-form">
      <div className="confirm_offer_banner">
        <div className="cob_head">
          <span>Welcome back!</span>
          <h2>
            <span>You’re only a click away from </span>{" "}
            <span>confirming your offer!</span>
          </h2>
        </div>
        <div className="cob_body">
          <div className="cob_in">
            <div className="cob_offer_product">
              <Image
                src="/images/car1.png"
                alt="car"
                title="car"
                width={285}
                height={155}
              />
            </div>
            <div className="cob_offer_name">
              <h2>2022 Ford Ranger</h2>
              <p>
                <span>2.3L EcoBoost® I4 engine</span>
                <span>.</span>
                <span>May, 12, 2022</span>
              </p>
            </div>
            <div className="cob_offer_price">
              <h1>$7,000</h1>
            </div>
            <div className="poweredBy">
              <Image
                src="/images/jd.svg"
                alt="poweredBy"
                title="poweredBy"
                width={200}
                height={24}
              />
            </div>
            <div className="offer_expire">
              <h2>Offer expires in:</h2>
              <div className="oe_time_left">
                <div className="oet_col">
                  <div className="oet_col_in">
                    <span>04</span>
                  </div>
                  <span>DAYS</span>
                </div>
                <div className="oet_col">
                  <div className="oet_col_in">
                    <span>00</span>
                  </div>
                  <span>hrs</span>
                </div>
                <div className="oet_col">
                  <div className="oet_col_in">
                    <span>00</span>
                  </div>
                  <span>mins</span>
                </div>
                <div className="oet_col">
                  <div className="oet_col_in">
                    <span>00</span>
                  </div>
                  <span>secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cob_foo">
          {/* <Link href="/offer" className='confirm_offer_btn'>
    <span>Confirm My Offer</span> 
    <span>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 16L7.075 14.6L12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16Z" fill="#353442"/></svg>
    </span>
  </Link> */}
          <Link href="/offer">
            <span className="confirm_offer_btn">
              <span>Confirm My Offer</span>
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 16L7.075 14.6L12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16Z"
                    fill="#353442"
                  />
                </svg>
              </span>
            </span>
          </Link>
          <button
            className="start_btn"
            onClick={() => {
              setShowConfirmOffer(false);
            }}
          >
            <span>Start Over</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOffer;
