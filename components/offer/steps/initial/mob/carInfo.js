import ShimmerImage from "components/common/shimmerImage";
import React from "react";
import Fade from "react-reveal/Fade";

export default function CarInfo({ data, full }) {
  if (full) {
    return (
      <div className="offerProduct mt-2 row">
        <Fade>
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
          </div>{" "}
        </Fade>
      </div>
    );
  } else {
    return (
      <div className="offerProduct mt-2 row border-top-0 border-left-0 border-right-0">
        <Fade>
          <div className="ofp_right col-12 text-center">
            <span className="text-center text-muted">
              {data.enableMultiTrim ? data.body : data.trim}
            </span>
          </div>
        </Fade>
      </div>
    );
  }
}
