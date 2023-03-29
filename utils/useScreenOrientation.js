import { useState, useEffect } from "react";

const getOrientation = () => window?.screen?.orientation?.type;

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(() => {
    if (typeof window !== "undefined") {
      getOrientation();
    }
  });

  const updateOrientation = (event) => {
    if (typeof window !== "undefined") {
      setOrientation(getOrientation());
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("orientationchange", updateOrientation);
      return () => {
        window.removeEventListener("orientationchange", updateOrientation);
      };
    }
  }, [typeof window]);

  return orientation;
};

export default useScreenOrientation;
