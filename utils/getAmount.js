import React from "react";

function getAmount(value) {
  if (value?.manrev) {
    return "$ NEEDS REVIEW";
  } else {
    if (value?.status == "quote") {
      if (value?.is_deduction_added) {
        return `$${new Intl.NumberFormat("en-US").format(
          (value?.base_trade_amount - value?.initial_dedcution_amount) / 100
        )}`;
      } else {
        return `$${new Intl.NumberFormat("en-US").format(
          value?.quote_amount / 100
        )}`;
      }
    } else {
      return `$${new Intl.NumberFormat("en-US").format(
        value?.offer_amount / 100
      )}`;
    }
  }
}

export default getAmount;
