// import { useState, useEffect } from "react";
import {isMobile} from 'react-device-detect';

const useMobileDetect = () => {

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   console.log(navigator.userAgent
  //     );
  //   const detectMobile = () => {
  //     const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(
  //       window.navigator.userAgent
  //     );
  //     setIsMobile(isMobileDevice);
  //   };
  //   detectMobile();
  //   window.addEventListener("resize", detectMobile);
  //   return () => {
  //     window.removeEventListener("resize", detectMobile);
  //   };
  // }, []);

  return isMobile;
};

export default useMobileDetect;
