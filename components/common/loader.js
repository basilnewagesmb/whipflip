import React, { useEffect } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
function LoaderAnim({ isLoading, text }) {
  useEffect(() => {
    if (isLoading) {
      document.getElementsByTagName("body")[0].style = "overflow: hidden";
      document.getElementsByTagName("footer")[0].style = "display: none";
    } else {
      document.getElementsByTagName("body")[0].style = "overflow: unset";
      document.getElementsByTagName("footer")[0].style = "display: block";
    }
  }, [isLoading]);

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
          {text || (
            <div>
              Your awesome initial offer
              <br /> is loading...
            </div>
          )}
        </p>
        <Fade spy={isLoading} left>
          <Image src="/images/car-anim.gif" width={200} height={200} />
        </Fade>
      </div>
    </div>
  );
}

export default LoaderAnim;
