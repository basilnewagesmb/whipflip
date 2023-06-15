import { Form, Modal, message, Button } from "antd";
import BreakDown from "components/anim/breakdown";
import SpeedoMeter from "components/anim/speed";
import { setCurrentSlide } from "features/mob/mobSlice";
import { setInitialOffer } from "features/offer/offerSlice";
import { clear } from "features/site/siteSlice";
import {} from "node_modules/antd/es/index";
import moment from "moment";
import { useRouter } from "node_modules/next/router";
import { useDispatch, useSelector } from "react-redux";
import useCheckMobile from "utils/checkMobile";
import { useCreateInitialOfferMutation, useGetOfferByIdMutation } from "../api";
import { useState } from "react";
function useInitialForm({ form, data, carouselRef, goTo, props }) {
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
    setIsLoadingApi(true);
    const { stills, ...rest } = data;
    const res = await createInitialOffer({
      ...rest,
      ...values,
      ...site,
      from: "dropdown",
      userMileage: values.mileage.toString(),
      image: data.stills[0].image,
      image: data.stills[0].image,
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
    });
    if (res?.data?.uid) {
      const offerRes = await getOfferById(res?.data?.uid);
      console.log(offerRes);
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
        Modal.error({
          centered: true,
          okText: "Go to Home",
          onOk: () => {
            Modal.destroyAll();
            router.push("/");
          },
          title: "UH-OH!",
          content: (
            <p>
              WhipFlip is currently not in your area…yet. Please check back with
              us in the future as we are adding new service areas regularly. If
              you have any questions or concerns, please contact our Customer
              Success Team at <a href="tel:+18883493189">(888) 349-3189.</a>
            </p>
          ),
        });
      }
    } else {
      setIsLoadingApi(false);
      message.error(res?.data?.message || "Something went wrong");
    }
  };
  const onFinishFailed = (errorInfo) => {
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
    initialValues: {},
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
                    goTo(0);
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
                  isMobile && goTo(1);
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
