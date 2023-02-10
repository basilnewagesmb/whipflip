import React, { useEffect, useState } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Modal from "react-bootstrap/Modal";
function LoaderAnim({ isLoading, text }) {
  const [loadingScreen, setLoadingScreen] = useState(false);
  useEffect(() => {
    setLoadingScreen(isLoading);
  }, [isLoading]);

  return (
    <Modal show={loadingScreen} fullscreen={true}>
      <div className="vh-100 d-flex  justify-content-center align-items-center flex-column">
        <p className="text-center">
          {text || (
            <div>
              Your awesome initial offer
              <br /> is loading...
            </div>
          )}
        </p>
        <Fade spy={loadingScreen} left>
          <Image src="/images/car-anim.gif" width={200} height={200} />
        </Fade>
      </div>{" "}
    </Modal>
  );
}

export default LoaderAnim;
