import { useState, useEffect } from "react";

const getOrientation = () => window?.screen?.orientation?.type;

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  const updateOrientation = (event) => {
    setOrientation(getOrientation());
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("orientationchange", updateOrientation);
      return () => {
        window.removeEventListener("orientationchange", updateOrientation);
      };
    }
  }, [window]);

  return orientation;
};

export default useScreenOrientation;
