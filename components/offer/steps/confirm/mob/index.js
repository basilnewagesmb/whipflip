import React from "react";
import Image from "next/image";
import PoweredBy from "components/common/poweredBy";
import ShimmerImage from "components/common/shimmerImage";
import getAmount from "utils/getAmount";

function ConfirmMob({ initialOffer }) {
  return (
    <div className="mobConfirmOff">
      <div className="container">
        <div className="confOffBody">
          <h1>
            Your <i>FLIPPIN’</i> Awesome Offer!
          </h1>
          <div className="ioCard">
            <h2>Initial offer: {getAmount(initialOffer)}</h2>
            <div className="offerProduct-mobi row">
              <div className="ofp_left col-4 p-0">
                <ShimmerImage src={initialOffer?.image} alt="car" title="car" />
              </div>
              <div className="ofp_right col-8">
                <h3>2022 Ford Ranger</h3>
                <span>2.3L EcoBoost® I4 engine</span>
              </div>
            </div>
            <PoweredBy />
          </div>
          <div className="custo_info">
            <p>We’d love to buy your car!</p>
            <p>You’re just one quick step away from confirming your offer.</p>
          </div>
          <button className="confirm_off_btn">
            <span>Confirm My Offer</span>
            <span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 20.25L11.075 18.85L16.675 13.25H4.5V11.25H16.675L11.075 5.65L12.5 4.25L20.5 12.25L12.5 20.25Z"
                  fill="#353442"
                />
              </svg>
            </span>
          </button>
          <a
            href="#"
            className="custo_info-aref"
            onClick={(e) => showLeaveHandler(e)}
          >
            I’ll come back later
          </a>
          <div className="whip_cus_info">
            <div className="wci_in wci-mob-in">
              <div className="wci_left">
                <Image
                  src="/images/bulb.svg"
                  alt="jd power"
                  title="jd power"
                  width={80}
                  height={80}
                />
              </div>
              <div className="wci_right">
                <p>
                  Feel free to compare your free estimate to average trade-in
                  values and you may see that your car might worth up to{" "}
                  <b>14% higher than the national average!</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmMob;
