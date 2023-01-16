import React from "react";
import getAmount from "utils/getAmount";

function WithoutDamages({ initialOffer }) {
  return (
    <div className="offer_right">
      <div className="or_head">
        <h1>Awesome Initial Offer: {getAmount(initialOffer)}!</h1>
        <p>
          We just need a few more bits of information to make your offer as
          accurate as possible!
        </p>
      </div>
    </div>
  );
}

export default WithoutDamages;
