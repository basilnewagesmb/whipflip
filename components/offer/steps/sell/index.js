import React from "react";
import useSellFuc from "services/offer/sell/function";
import Accept from "./web/accept";
import SellFrom from "./web/sellForm";

function Sell({ data }) {
  const sellData = useSellFuc(data);
  const { isAccept } = sellData;
  return (
    <>
      {!isAccept && <Accept {...sellData} />}
      {isAccept && <SellFrom {...sellData} />}
    </>
  );
}

export default Sell;
