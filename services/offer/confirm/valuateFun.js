import React, { useEffect, useState } from "react";
import { useFullScreenHandle } from "react-full-screen";
import useScreenOrientation from "utils/useScreenOrientation";

function useValuateFun() {
  const [state, setState] = useState({
    current: "initial",
  });
  const setCurrent = (current) => {
    setState((prev) => ({ ...prev, current: current }));
  };
  const handle = useFullScreenHandle();
  const orientation = useScreenOrientation();
  useEffect(() => {
    const switchOrientation = async () => {
      try {
        if (handle.active) {
          await handle.exit();
          await window.screen.orientation.unlock();
        } else {
          await handle.enter();
          await window.screen.orientation.lock("landscape");
        }
      } catch (error) {
        console.log(error);
        // axios.post(`${process.env.apiBaseURL}logError`, {
        //   prefix: "camera",
        //   error: JSON.stringify(error.message),
        // });
      }
    };
    switchOrientation();
  }, [orientation]);
  return { state, setState, setCurrent, handle };
}

export default useValuateFun;
