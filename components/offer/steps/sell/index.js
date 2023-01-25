import React from "react";
import useSellFuc from "services/offer/sell/function";
import Accept from "./web/accept";
import Flip from "react-reveal/Fade";
import SellFrom from "./web/sellForm";

function Sell({ data }) {
  const sellData = useSellFuc(data);
  const { isAccept } = sellData;
  return (
    <>
      <Flip top when={!isAccept} collapse duration={500}>
        <Accept {...sellData} />
      </Flip>
      <Flip bottom when={isAccept} collapse duration={500}>
        <SellFrom {...sellData} />
      </Flip>
    </>
  );
}

export default Sell;
