import CarAnim from "components/anim/car";
import React from "react";

function LoaderAnim({ isLoading }) {
  if (isLoading) {
    return (
      <div className="full-page-loading">
        <CarAnim isLoading={isLoading} />
      </div>
    );
  }
}

export default LoaderAnim;
