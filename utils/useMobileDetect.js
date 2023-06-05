import { useState, useEffect } from "react";

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => {
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(
        window.navigator.userAgent
      );
      setIsMobile(isMobileDevice);
    };
    detectMobile();
    window.addEventListener("resize", detectMobile);
    return () => {
      window.removeEventListener("resize", detectMobile);
    };
  }, []);

  return isMobile;
};

export default useMobileDetect;
