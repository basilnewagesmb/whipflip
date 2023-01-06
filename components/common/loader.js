import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
function LoaderAnim({ isLoading }) {
  return (
    <div
      className="full-page-loading"
      style={{
        overflow: "hidden",
        height: `${isLoading ? "100%" : 0}`,
      }}
    >
      <div className="vh-100 d-flex  justify-content-center align-items-center flex-column">
        <p className="text-center">
          Your awesome initial offer
          <br /> is loading...
        </p>
        <Fade spy={isLoading} left>
          <Image src="/images/car-anim.gif" width={200} height={200} />
        </Fade>
      </div>
    </div>
  );
}

export default LoaderAnim;
