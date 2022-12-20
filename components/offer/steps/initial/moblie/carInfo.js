import ShimmerImage from "components/common/shimmerImage";
import React from "react";

export default function CarInfo({ data }) {
  return (
    <div className="offerProduct mt-2 row">
      <div className="ofp_left col-4">
        <ShimmerImage
          src={data?.stills?.[0]?.image}
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
      <div className="ofp_right col-8">
        <h1>
          {data.modelyear} {data.make}
        </h1>
        <span>{data.enableMultiTrim ? data.body : data.trim}</span>
      </div>
    </div>
  );
}
