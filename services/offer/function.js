import { Form, Modal, message } from "antd";
import BreakDown from "components/anim/breakdown";
import SpeedoMeter from "components/anim/speed";
import { setInitialOffer } from "features/offer/offerSlice";
import { clear } from "features/site/siteSlice";
import { useRouter } from "node_modules/next/router";
import { useDispatch, useSelector } from "react-redux";
import { useCreateInitialOfferMutation, useGetOfferByIdMutation } from "./api";
function useInitialForm(form, data) {
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
      } else {
        message.error(offerRes.data.message || "Something went wrong");
      }
    } else {
      message.error(res.data.message || "Something went wrong");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const router = useRouter();

  const formDate = {
    isLoading: isLoading || isCreating,
    initialValues: {
      transmission: "automatic",
      does_vehicle_start: true,
      readiness_uid: data?.readiness[0].uid,
    },
    onFinish,
    onFinishFailed,
    isDisable: isLoading,
    mileage,
    mileageOnblur: () => {
      if (mileage >= 0 && mileage <= 9999) {
        Modal.success({
          className: "confirm-model",
          icon: <SpeedoMeter isLoading={true} />,
          footer: null,
          closable: true,
          title: <h6 className="text-center">Confirm Mileage</h6>,
          okText: "Confirm",
          content: (
            <div className="text-center">
              <p>
                Are you sure your vehicle only has {mileage + " "}
                miles?
              </p>
            </div>
          ),
          okButtonProps: {
            className: "getOfferBtn",
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
