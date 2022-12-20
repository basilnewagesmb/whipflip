import React from "react";

function getAmount(value) {
  if (value?.manrev) {
    return "$ NEEDS REVIEW";
  } else {
    if (value?.status == "quote") {
      return `$${new Intl.NumberFormat("en-US").format(
        value?.quote_amount / 100
      )}`;
    } else {
      `$${new Intl.NumberFormat("en-US").format(value?.offer_amount / 100)}`;
    }
  }
}

export default getAmount;
