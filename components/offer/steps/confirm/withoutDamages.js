import React from "react";
import getAmount from "utils/getAmount";

function WithoutDamages({ initialOffer }) {
  return (
    <div className="offer_right">
      <div className="or_head">
        <h1>Awesome Initial Offer: {getAmount(initialOffer)}!</h1>
        <p>
          Your offer may be higher or lower. We just need a few important bits
          of information to finalize a GREAT offer!
        </p>
      </div>
    </div>
  );
}

export default WithoutDamages;
