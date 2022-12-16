import PoweredBy from "components/common/poweredBy";
import ShimmerImage from "components/common/shimmerImage";
import React from "react";

function CarInfo({ data, isShow }) {
  return (
    isShow && (
      <>
        <div className="itemImg d-flex align-items-center justify-content-center flex-column">
          {/* <PoweredBy /> */}
          <ShimmerImage
            src={data?.stills[0]?.image}
            alt={`${data.modelyear} ${data.make} ${data.model} ${
              data.enableMultiTrim ? data.body : data.trim
            }`}
            title={`${data.modelyear} ${data.make} ${data.model} ${
              data.enableMultiTrim ? data.body : data.trim
            }`}
            preview={false}
            fallback={"/images/no-car-image.png"}
          />
        </div>
        <div className="itemInfo">
          <h2>
            {data.modelyear} {data.make}
          </h2>
          <span>
            {data.enableMultiTrim ? data.body : data.trim}

            <span className="miles"> {` ${data.model} `}</span>
          </span>
          <a href="#" title="Not a car">
            Not your car?
          </a>
        </div>
      </>
    )
  );
}

export default CarInfo;
