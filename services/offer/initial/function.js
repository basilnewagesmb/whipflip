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
function useInitialForm({ form, data, carouselRef, goTo }) {
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
    const res = await createInitialOffer({
      ...rest,
      ...values,
      ...site,
      from: "dropdown",
      userMileage: values.mileage,
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
      if (offerRes?.data) {
        dispatch(clear());
        dispatch(setInitialOffer(offerRes?.data));
        router.push({
          pathname: "/prospect/[id]/quote",
          query: { id: offerRes?.data?.uid },
        });
      } else {
        message.error(offerRes?.data?.message || "Something went wrong");
      }
    } else {
      message.error(res?.data?.message || "Something went wrong");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
    if (isMobile && errorInfo.errorFields[0].name == "color") {
      dispatch(setCurrentSlide(1));
      carouselRef.current.goTo(1);
    }
    if (isMobile && errorInfo.errorFields[0].name == "mileage") {
      dispatch(setCurrentSlide(0));
      carouselRef.current.goTo(0);
    }
  };

  const formDate = {
    isLoading: isLoading || isCreating,
    initialValues: {
      transmission: "automatic",
      does_vehicle_start: true,
      readiness_uid: data?.readiness?.[0]?.uid,
    },
    onFinish,
    onFinishFailed,
    isDisable: isLoading,
    mileage,
    mileageOnblur: () => {
      var diff = moment().diff(`${data.modelyear}-01-01`, "years", true);
      if (diff > 2 && mileage != null && mileage >= 0 && mileage <= 9999) {
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
                  You've entered "{mileage + " "}" for milage.
                  <br />
                  Do you want to double check the number?
                </p>
              ) : (
                <p>
                  Are you sure your vehicle only has "{mileage + " "}" miles?
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
