import { message } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFullScreenHandle } from "react-full-screen";
import useScreenOrientation from "utils/useScreenOrientation";
import { useLoginMutation, useProcessQuoteMutation } from "../clearQuote";

function useValuateFun({ offerData }) {
  const [state, setState] = useState({
    current: "initial",
    infoSkipped: false,
    preview: false,
    stills: [],
    speed: 0.1,
  });
  useEffect(() => {
    if (offerData?.stills) {
      setState((prev) => ({
        ...prev,
        stills: offerData?.stills?.map((item, i) => ({
          ...item,
          preview: false,
          id: 1 + i,
        })),
      }));
    }
  }, [offerData]);

  const setSkipped = (current) => {
    setState((prev) => ({ ...prev, infoSkipped: current }));
  };
  const setCurrent = (current) => {
    setState((prev) => ({ ...prev, current: current }));
  };
  const setPreview = (current) => {
    setState((prev) => ({ ...prev, preview: current }));
  };
  const handle = useFullScreenHandle();
  const orientation = useScreenOrientation();
  useEffect(() => {
    const switchOrientation = async () => {
      try {
        if (handle.active) {
          await handle.exit();
          await window?.screen?.orientation?.unlock();
        } else {
          await handle.enter();
          await window?.screen?.orientation?.lock("landscape");
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
  const webcamRef = useRef(null);

  const capture = useCallback(
    (id) => {
      try {
        const blob = webcamRef.current.getScreenshot();
        if (blob) {
          setState((prev) => ({
            ...prev,
            stills: [
              ...prev?.stills?.filter((item) => item.id != id),
              ...[
                {
                  ...prev?.stills?.find((item) => item.id == id),
                  preview: true,
                  blob,
                },
              ],
            ],
          }));
        }
      } catch (error) {}
    },
    [webcamRef]
  );
  const camProps = {
    audio: false,
    videoConstraints: {
      aspectRatio: { ideal: 1.7777777778 },
      //  facingMode: { exact: "environment" },
    },
    ref: webcamRef,
    screenshotFormat: "image/png",
    screenshotQuality: 0.99,
    style: {
      textAlign: "center",
      zindex: 8,
      height: "100vh",
      width: "100%",
      objectFit: "cover",
    },
    forceScreenshotSourceSize: true,
    onUserMedia: () => {},
    onUserMediaError: () => {},
  };
  const pendingLayouts = state?.stills?.filter((item) => !item.blob);
  const previewing = state?.stills?.find((item) => item.preview);
  const retake = () => {
    setState((prev) => ({
      ...prev,
      stills: [
        {
          ...prev?.stills?.find((item) => item.preview),
          preview: false,
          blob: null,
        },
      ].concat(
        prev?.stills?.filter(
          (item) => item.id != prev?.stills?.find((item) => item.preview).id
        )
      ),
    }));
  };
  const continue_ = () => {
    setState((prev) => ({
      ...prev,
      stills: prev?.stills?.map((i) => ({ ...i, preview: false })),
    }));
  };
  const [login] = useLoginMutation();
  const [processQuote] = useProcessQuoteMutation();
  const compleat = async () => {
    setCurrent("uploading");
    handle.exit();
    try {
      await window?.screen?.orientation?.lock("portrait");
    } catch (error) {}
    const loginRes = await login();
    if (loginRes?.data?.user) {
      const data = {
        vehicle: {
          licenseplateno: offerData.plate_number || "0000",
        },
        quoteType: "lease",
        dealerCode: "WhipFlip Test",
        paintType: "solid",
        dealer: loginRes?.data?.user?.dealer,
        imageUrls: state?.stills,
      };
      const token = loginRes?.data?.user?.token;
      const processRes = await processQuote({ data, token });
      console.log(processRes);
      if (processRes?.data) {
        setState((prev) => ({ ...prev, speed: 2 }));
      } else {
        message.error("Something went Wrong");
      }
    } else {
      message.error("Something went Wrong");
    }
  };
  return {
    state,
    setState,
    setCurrent,
    setPreview,
    handle,
    setSkipped,
    webcamRef,
    capture,
    camProps,
    offerData,
    pendingLayouts,
    previewing,
    retake,
    continue_,
    compleat,
  };
}

export default useValuateFun;
