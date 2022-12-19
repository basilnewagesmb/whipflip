import { useWindowSize } from "@react-hook/window-size/throttled";

import React, { useEffect, useState } from "react";
function useCheckMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [width] = useWindowSize();
  useEffect(() => {
    if (width >= 991) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width]);
  return isMobile;
}

export default useCheckMobile;
