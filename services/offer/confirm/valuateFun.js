import { message } from "antd";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFullScreenHandle } from "react-full-screen";
import useScreenOrientation from "utils/useScreenOrientation";
import { useCreateInstantOfferMutation } from "../api";
import { useLoginMutation, useProcessQuoteMutation } from "../clearQuote";
import { Modal } from "antd";
import { isIOS } from "react-device-detect";
function useValuateFun({ offerData, analytics, fbpixel }) {
  const { push } = useRouter();
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
      facingMode: { exact: "environment" },
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
    onUserMediaError: async () => {
      const permission = await navigator.permissions.query({ name: "camera" });
      if (permission.state == "granted") {
        await handle.enter();
        console.log("granted");
      } else {
        await handle.exit();
        await Modal.error({
          title: "Camera is blocked",
          content: (
            <div>
              {isIOS
                ? "WhipFlip requires access to your camera. camera is blocked, please reload the page"
                : "WhipFlip requires access to your camera. camera is blocked, please enable from site settings and reload the page"}
              <img className="ml-2" src="/images/ic_blocked_camera_dark.svg" />
            </div>
          ),
          okText: "Reload",
          onOk: () => {
            location.reload();
          },
          closable: false,
        });
      }
    },
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
  const [createInstantOffer] = useCreateInstantOfferMutation();
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
      if (processRes?.data) {
        setState((prev) => ({ ...prev, speed: 2 }));
        let dData = processRes.data;
        let deductionData = { panels: [] };
        state?.stills?.forEach((item, index) => {
          deductionData.panels.push({
            quoteId: dData.quoteId,
            image: dData.segmentImages.rawImages[index],
            title: item.title,
            annotatedImage: dData.segmentImages.annotatedImages[index],
          });
        });
        deductionData["damages"] = dData.segmentationEstimate.estimates
          .filter((item) => item.damageCode != "Clean")
          .reduce((obj, damage) => {
            return { ...obj, [damage.name]: damage["damageCode"] };
          }, {});
        const postData = {
          detection_data: deductionData,
          odometer_image: "", //odometerImage.Location,
          vin: offerData.vin,
          uid: offerData.uid,
          plate_state: offerData.plate_state,
          plate_number: offerData.plate_number,
          option: 1,
          full_trim: offerData.body || "",
        };
        if (offerData.enableMultiTrim) {
          postData.jd_vehicle_id = offerData.jd_vehicle_id;
        } else {
          postData.trim = offerData.trim;
        }
        const offerRes = await createInstantOffer(postData);
        if (offerRes?.data.uid) {
          if (response.data["is_over_quote"]) {
            analytics?.event("OverPrice", "Offer page", `Over Price`);
            fbpixel &&
              fbpixel.customEvent("OverPrice", {
                content_name: "Offer page",
                content_category: `OverPrice`,
                contents: [
                  {
                    ...response.data,
                  },
                ],
              });
          }
          push(`/prospect/${offerRes?.data.uid}/${offerRes?.data.status}`);
        } else {
          message.error("Something went Wrong");
        }
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
