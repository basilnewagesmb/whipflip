import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";
function CarAnim({ isLoading }) {
  if (isLoading) {
    return (
      <div className="vh-100 d-flex  justify-content-center align-items-center flex-column">
        <p className="text-center">
          Your awesome initial offer
          <br /> is loading...
        </p>
        <Fade spy={isLoading} left>
          <Image src="/images/car-anim.gif" width={200} height={200} />
        </Fade>
      </div>
    );
  }
}

export default CarAnim;
