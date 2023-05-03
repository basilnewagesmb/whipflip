import React from "react";

function getAmount(value) {
  let amount = null;
  if (value?.manrev) {
    return "$ NEEDS REVIEW";
  } else {
    if (value?.status == "quote") {
      if (value?.is_deduction_added) {
        amount = new Intl.NumberFormat("en-US").format(
          (value?.base_trade_amount - value?.initial_dedcution_amount) / 100
        );
        return `$${formatNum(amount)}`;
      } else {
        amount = new Intl.NumberFormat("en-US").format(
          value?.quote_amount / 100
        );
        return `$${formatNum(amount)}`;
      }
    } else {
      amount = new Intl.NumberFormat("en-US").format(value?.offer_amount / 100);
      return `$${formatNum(amount)}`;
    }
  }
}
const formatNum = (n) => {
  return Math.round(parseFloat(n.replace(",", "")))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default getAmount;
