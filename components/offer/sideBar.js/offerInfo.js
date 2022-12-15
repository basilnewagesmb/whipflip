import InfoIcon from "components/common/infoIcon";
import React from "react";

function OfferInfo({ isShow }) {
  return (
    isShow && (
      <div className="offer_factors">
        <h2>Your Offer Factors:</h2>
        <div className="off_items">
          <div className="off_item">
            <span>Cosmetic:</span>
            <span>-$0</span>
          </div>
          <div className="off_item">
            <span>Mechanical:</span>
            <span>-$200</span>
          </div>
          <div className="off_item">
            <span>Vehicle History:</span>
            <span>-$0</span>
          </div>
        </div>
        <div className="fooText">
          <InfoIcon fill="#FFC000" />
          <span>What are these?</span>
        </div>
      </div>
    )
  );
}

export default OfferInfo;
