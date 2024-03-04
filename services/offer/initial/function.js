import { Form, Modal, message, Button } from "antd";
import BreakDown from "components/anim/breakdown";
import SpeedoMeter from "components/anim/speed";
import { setCurrentSlide } from "features/mob/mobSlice";
import { setInitialOffer } from "features/offer/offerSlice";
import { clear } from "features/site/siteSlice";
import moment from "moment";
import { useRouter } from "node_modules/next/router";
import { useDispatch, useSelector } from "react-redux";
import useCheckMobile from "utils/checkMobile";
import { useCreateInitialOfferMutation, useGetOfferByIdMutation } from "../api";
import { useState } from "react";
import OOA from "components/common/OOA";
import GTMDataLayer from "utils/GTM/dataLayer";
function useInitialForm({ form, data, carouselRef, goTo, props }) {
  const gtm = GTMDataLayer();
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const router = useRouter();
  const isMobile = useCheckMobile();
  const [createInitialOffer, { isLoading: isCreating }] =
    useCreateInitialOfferMutation();
  const [getOfferById, { isLoading }] = useGetOfferByIdMutation();
  const site = useSelector((state) => state.site);
  const dispatch = useDispatch();
  const mileage = Form.useWatch("mileage", form);
  const onFinish = async (values) => {
    const { stills, ...rest } = data;
    const isM1 = data?.is_m1;
    const commonProperties = {
      ...rest,
      ...values,
      ...site,
      from: isM1 ? "m1" : "dropdown",
      userMileage: values.mileage.toString(),
      image: data?.stills[0]?.image,
      color_name: values.color.name,
      color_code: values.color.code,
      issues: {
        mechanical: {
          engine: [],
          warning: [],
          modification: [],
          tires: "",
        },
        cosmetic: {
          interior: "",
          exterior: "",
        },
        history: [],
      },
      plate: "",
      state: "",
      documentData: site.documentUrl,
      gc_id: site.gaClientId,
      gclick_id: site.gaClickId,
      referrerUrl: site.referrerUrl,
    };
    const upData = isM1
      ? {
          ...commonProperties,
          vehicle_id: data?.trimlevel?.find((item) => item.trim == values.trim)
            ?.vehicle_id,
          prospect_id: data?.uid,
          user_id: data?.user_id,
        }
      : { ...commonProperties };
    setIsLoadingApi(true);
    const res = await createInitialOffer(upData);
    if (res?.data?.uid) {
      try {
        gtm.quoteCompleted({
          email: res?.data?.email,
          phone_number: res?.data?.phone,
          postal_code: res?.data?.zipcode,
        });
      } catch (error) {
        console.log({ GTMDataLayer: error });
      }
      const offerRes = await getOfferById(res?.data?.uid);
      if (offerRes?.data?.area != "OOA") {
        if (offerRes?.data) {
          try {
            if (window?._kmq) {
              window?._kmq.push(["identify", res?.data?.email || ""]);
            }
          } catch (error) {}
          dispatch(clear());
          dispatch(setInitialOffer(offerRes?.data));
          if (offerRes.data["is_over_quote"]) {
            props.analytics.event("OverPrice", "Price is over $50k");
            props.fbpixel &&
              props.fbpixel.customEvent("OverPrice", {
                content_name: "Vehicle Decode",
                content_category: `OverPrice`,
                contents: [
                  {
                    ...offerRes.data,
                  },
                ],
              });
          } else {
            props.analytics.event(
              "quote",
              "Quote Generated",
              offerRes.data.uid
            );
            props.fbpixel &&
              props.fbpixel.customEvent("quote", {
                content_name: "Quote Generated",
                content_category: `Quote Generated`,
                contents: [
                  {
                    ...offerRes.data,
                  },
                ],
              });
            router.push({
              pathname: "/prospect/[id]/quote",
              query: { id: offerRes?.data?.uid },
            });
          }
        } else {
          setIsLoadingApi(false);
          message.error(offerRes?.data?.message || "Something went wrong");
        }
      } else {
        setIsLoadingApi(false);
        Modal.info({
          centered: true,
          icon: null,
          footer: null,
          title: null,
          content: <OOA />,
          wrapClassName: "o_o_a",
        });
      }
    } else {
      setIsLoadingApi(false);
      message.error(res?.data?.message || "Something went wrong");
    }
  };
  const onFinishFailed = (errorInfo) => {
    var errorElements = document?.getElementsByClassName(
      "ant-form-item-has-error"
    );
    if (errorElements?.length > 0) {
      var firstErrorElement = errorElements[0];
      firstErrorElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (isMobile && errorInfo.errorFields[0].name == "color") {
      dispatch(setCurrentSlide(1));
      //carouselRef.current.goTo(1);
    }
    if (isMobile && errorInfo.errorFields[0].name == "mileage") {
      dispatch(setCurrentSlide(0));
      //carouselRef.current.goTo(0);
    }
  };
  const formDate = {
    isLoading: isLoadingApi,
    initialValues: { user: { ...data, zip: data?.zipcode } },
    onFinish,
    onFinishFailed,
    isDisable: isLoading,
    mileage,
    mileageOnblur: () => {
      let mileageNum = parseInt(mileage?.toString()?.replaceAll(",", ""));
      var diff = moment().diff(`${data.modelyear}-01-01`, "years", true);
      if (
        diff > 2 &&
        mileageNum != null &&
        mileageNum >= 0 &&
        mileageNum <= 9999
      ) {
        Modal.warning({
          className: "confirm-model",
          icon: <SpeedoMeter isLoading={true} />,
          // footer: null,
          closable: true,
          title: (
            <h6 className="text-center">
              {isMobile ? "Is this right?" : "Confirm Mileage"}
            </h6>
          ),
          content: (
            <div className="text-center">
              {isMobile ? (
                <p>
                  You've entered "{mileageNum + ""}" for milage.
                  <br />
                  Do you want to double check the number?
                </p>
              ) : (
                <p>
                  Are you sure your vehicle only has "{mileageNum + ""}" miles?
                </p>
              )}
              {isMobile && (
                <Button
                  onClick={() => {
                    //goTo(0);
                    Modal.destroyAll();
                  }}
                  className={"getOfferBtn"}
                >
                  Enter Again
                </Button>
              )}
              <Button
                className={
                  isMobile ? "getOfferBtn mt-3 bg-light border" : "getOfferBtn"
                }
                onClick={() => {
                  // isMobile && goTo(1);
                  Modal.destroyAll();
                }}
              >
                {isMobile ? "Continue" : "Confirm"}
              </Button>
            </div>
          ),
          okButtonProps: {
            className: "getOfferBtn d-none",
          },
          onOk: () => {
            alert();
          },
        });
      }
    },
    breakDownPop: () => {
      Modal.success({
        className: "confirm-model",
        icon: <BreakDown isLoading={true} />,
        footer: null,
        closable: true,
        title: <h6 className="text-center">Uh oh!</h6>,
        okText: "OK",
        content: (
          <div className="text-center">
            <p>
              Currently WhipFlip is not purchasing vehicles that are running
              poorly or fully inoperable. This includes vehicles that do not
              start due to dead/bad batteries, engine seized, transmission
              inoperable or severely malfunctioning, flat tires, etc.
              <br />
              You will need to fully repair any of the issues mentioned above
              before proceeding forward. We may require proof of repair or
              proper running condition before extending an final offer.
            </p>
          </div>
        ),
        okButtonProps: {
          className: "getOfferBtn",
        },
      });
    },
  };

  return formDate;
}

export default useInitialForm;
