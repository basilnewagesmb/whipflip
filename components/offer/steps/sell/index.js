import LoaderAnim from "components/common/loader";
import React from "react";
import useSellFuc from "services/offer/sell/function";
import Accept from "./web/accept";
import SellFrom from "./web/sellForm";

function Sell({ data }) {
  const sellData = useSellFuc(data);
  const { isAccept, isLoading } = sellData;
  return (
    <>
      <LoaderAnim text="Loading..." isLoading={isLoading} />
      {!isAccept && <Accept {...sellData} />}
      {isAccept && <SellFrom {...sellData} />}
    </>
  );
}

export default Sell;
