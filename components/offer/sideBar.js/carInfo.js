import PoweredBy from "components/common/poweredBy";
import ShimmerImage from "components/common/shimmerImage";
import Link from "next/link";
import React from "react";
import getAmount from "utils/getAmount";

function CarInfo(prop) {
  const { data, isShow, initialOffer } = prop;
  return (
    isShow && (
      <>
        <div className="itemImg d-flex align-items-center justify-content-center flex-column">
          {initialOffer ? (
            <>
              <h4>
                {initialOffer.status === "offer" ? "Final" : "Initial"} Offer:{" "}
                {getAmount(initialOffer)}!
              </h4>
              <PoweredBy />
            </>
          ) : (
            <>
              <h5>YOUR AWESOME CAR</h5>
            </>
          )}
          <ShimmerImage
            src={data?.stills?.[0]?.image || data?.image}
            alt={`${data?.modelyear} ${data?.make} ${data?.model} ${
              data?.enableMultiTrim ? data?.body : data?.trim
            }`}
            title={`${data?.modelyear} ${data?.make} ${data?.model} ${
              data?.enableMultiTrim ? data?.body : data?.trim
            }`}
            height={250}
            preview={false}
            fallback={"/images/no-car-image.png"}
          />
        </div>
        <div className="itemInfo">
          <h2>
            {data?.modelyear} {data?.make} {` ${data?.model} `}
          </h2>
          <span>{data?.enableMultiTrim ? data?.body : data?.trim}</span>
          <Link href="/">Not your car?</Link>
        </div>
      </>
    )
  );
}

export default CarInfo;
