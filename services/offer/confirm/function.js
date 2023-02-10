import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useConditionsQuery,
  useStatesQuery,
  useVehicleWithPlateMutation,
  useVehicleWithVinMutation,
} from "services/util";
import useCheckMobile from "utils/checkMobile";
import { Form, Modal, QRCode, message, Space, Radio } from "antd";
import {
  useAddDamagesMutation,
  useGetOfferQuery,
  useSkipToInstantOfferMutation,
} from "../api";
import Image from "next/image";
import { setCurrent } from "features/offer/offerSlice";
import { useRouter } from "next/router";
import SkipButton from "components/offer/steps/confirm/web/skipButton";
import { ShowEasyStepMob } from "./mobFunction";
import { ExclamationCircleFilled } from "@ant-design/icons";
function useConfirmForm({ form }) {
  const { confirm } = Modal;
  const dispatch = useDispatch();
  const [isValid, setValid] = useState(true);
  const formRealValues = Form.useWatch([], form);
  const isMobile = useCheckMobile();
  const initialOfferData = useSelector((state) => state.offer);
  const { query } = useRouter();
  const { data: offerData } = useGetOfferQuery(query.id, {
    skip: !query.id,
  });
  const [initialOffer, setInitialOffer] = useState(
    initialOfferData.initialOffer
  );
  const [skipToInstantOffer, {}] = useSkipToInstantOfferMutation();
  useEffect(() => {
    if (offerData) {
      setInitialOffer(offerData);
      if (offerData.status == "quote" && offerData?.is_deduction_added == "Y") {
        !isMobile
          ? ShowEasyStep(dispatch, setCurrent, skipToInstantOffer, initialOffer)
          : ShowEasyStepMob(
              dispatch,
              setCurrent,
              skipToInstantOffer,
              initialOffer
            );
      }
    }
  }, [offerData, isMobile]);

  const { data: states } = useStatesQuery();
  const { data: conditions, isLoading: isConditionsLoading } =
    useConditionsQuery();
  const [vehicleWithVin, vinHdl] = useVehicleWithVinMutation();
  const [vehicleWithPlate, platHdl] = useVehicleWithPlateMutation();
  const [addDamages, { isLoading: confirming }] = useAddDamagesMutation();

  // useEffect(() => {
  //   if (form) {
  //     form.setFieldValue("tire", conditions?.tire[0]?.uid);
  //     form.setFieldValue(
  //       ["cosmetic", "interior"],
  //       conditions?.cosmetic?.interior[0]?.uid
  //     );
  //     form.setFieldValue(
  //       ["cosmetic", "exterior"],
  //       conditions?.cosmetic?.exterior[0]?.uid
  //     );
  //   }
  // }, [conditions?.tire, conditions?.cosmetic]);

  const initialValues = {
    info: {
      type: "vin",
    },
  };
  const onFinish = async (data) => {
    const { info, tire } = data;
    let res;
    switch (info.type) {
      case "vin":
        res = await vehicleWithVin(info.vinNumber);
        if (res?.error?.data?.message) {
          window.scrollTo(0, 0);
          setValid(false);
        } else {
          setValid(true);
        }
        break;
      case "plate":
        res = await vehicleWithPlate(info);
        if (res?.error?.data?.message) {
          window.scrollTo(0, 0);
          setValid(false);
        } else {
          setValid(true);
        }
        break;
      default:
        break;
    }
    const issues = {
      mechanical: {
        engine: data?.conditions[1].data
          .filter((item) => item.active)
          .map((item) => item.uid),
        warning: data?.conditions[2].data
          .filter((item) => item.active)
          .map((item) => item.uid),
        modification: data?.conditions[3].data
          .filter((item) => item.active)
          .map((item) => item.uid),
        tires: tire,
      },
      history: data?.conditions[0].data
        .filter((item) => item.active)
        .map((item) => item.uid),
      uid: offerData.uid,
      cosmetic: data.cosmetic,
    };
    if (res?.data?.trimlevel?.length) {
      showConfirm(res?.data?.trimlevel, data, issues);
    } else {
      message.error("No vehicle details found!");
    }
  };
  const showConfirm = (level, data, issues) => {
    confirm({
      title: "Choose your vehicle trim:",
      icon: <ExclamationCircleFilled />,
      closable: true,
      content: (
        <Radio.Group>
          <Space
            direction="vertical"
            onChange={async (e) => {
              const full_trim = level.find(
                (item) => item.vehicle_id == e.target.value
              ).body;
              const cRes = await addDamages({
                issues,
                vin: data?.info.vinNumber || "",
                plate_state: data?.info.state || "",
                plate_number: data?.info.plateNumber || "",
                full_trim,
                jd_vehicle_id: e.target.value,
                uid: initialOffer?.uid,
              });
              if (cRes?.data) {
                Modal.destroyAll();
              } else {
                message.error("something went wrong");
              }
            }}
          >
            {level?.map((item, k) => (
              <Radio value={item.vehicle_id} key={k}>
                {item.body}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      ),
      footer: false,
    });
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  const formDate = {
    formRealValues,
    initialOffer,
    isMobile,
    states,
    conditions,
    isConditionsLoading,
    isValid,
    initialValues,
    onFinish,
    onFinishFailed,
    vinHdl,
    platHdl,
    setValid,
    confirming,
  };
  return formDate;
}
export const ShowEasyStep = (
  dispatch,
  setCurrent,
  skipToInstantOffer,
  initialOffer
) => {
  Modal.info({
    title: "One Final Easy Step!",
    className: "final_easy_step_modal",
    width: 700,
    closable: true,
    icon: null,
    placement: "top",
    okButtonProps: {
      style: {
        display: "none",
      },
    },
    content: (
      <div className="fesBody px-0">
        <div className="fesBody_in">
          <div className="fesBody_in_row row">
            <div className="col-lg-4 fes_col fes_col_left">
              <div className="fes_col_left_in">
                <Image
                  src="/images/easy-final.svg"
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
            </div>
            <div className="col-lg-8 fes_col fes_col_right">
              <div className="fes_col_right_in">
                <div className="tag">
                  <span>Highly Recommended!</span>
                </div>
                <div className="fcr_head">
                  <h2>Use our awesome photo tool!</h2>
                </div>
                <div className="fcr_list">
                  <ul>
                    <li>Fully guided and super-duper easy!</li>
                    <li>
                      Takes less than a minute using a smartphone or tablet!
                    </li>
                    <li>
                      Lasers in exact value so no money is left on the table!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="fes_middle">
            <div className="fesm_hd">
              <h2>On your phone, do one of the following:</h2>
            </div>
            <div className="fesCon">
              <div className="fesConItem">
                <div className="fesConItemRow align-items-center">
                  <div className="fesCon_left">
                    <div className="fesConItem_img">
                      <Image
                        src="/images/access-email.svg"
                        alt="easy final"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  <div className="fesCon_right">
                    <div className="fesConItem_detail">
                      <h3>Access the photo tool via email</h3>
                      <p>
                        We’ve sent you an email! Open the email on your phone
                        and tap the link.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="seprator">
                <span>-OR</span>
              </div>
              <div className="fesConItem">
                <div className="fesConItemRow align-items-center">
                  <div className="fesCon_left">
                    <div className="fesConItem_img">
                      <Image
                        src="/images/url.svg"
                        alt="Access the photo"
                        title="Access the photo"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  <div className="fesCon_right">
                    <div className="fesConItem_detail">
                      <h3>Go to www.whipflip.com on your phone</h3>
                      <p>
                        Tap the “Retrieve Offer” button and enter your email
                        address.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {window?.location?.href && (
                <div className="d-none">
                  <div className="seprator">
                    <span>-OR</span>
                  </div>
                  <div className="fesConItem d-flex align-items-center justify-content-center">
                    <div className="fesConItemRow align-items-center">
                      <div className="fesConItem_detail d-flex align-items-center justify-content-center flex-column">
                        <QRCode size={100} value={window?.location?.href} />{" "}
                        <h3>Scan this QR code on your phone</h3>
                        <p>continue in your phone</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="fesFooter">
          <h2>Can't take the photos right now?</h2>
          <div className="fesFooter_body">
            <p>
              Your instant offer is a click away! Well confirm the exact
              condition at your driveway. The final value might change.
            </p>
            <SkipButton
              skipToInstantOffer={skipToInstantOffer}
              initialOffer={initialOffer}
            />
          </div>
        </div>
      </div>
    ),
    onOk() {},
  });
};

export const Images = () => {
  return {
    tire: {
      tires_better: {
        src: "/images/plenty-thread.svg",
        description: "Recently replaced tires",
      },
      tires_normal: {
        src: "/images/some-thread.svg",
        description: "Average wear, but passes inspection",
      },
      tires_rough: {
        src: "/images/bald.svg",
        description: "Little tread left, steel belts showing",
      },
    },
    cosmetic: {
      exterior_better: {
        src: "/images/great.svg",
        description:
          "Truly in showroom condition. May only have a few barely visible imperfections.",
      },
      exterior_normal: {
        src: "/images/average.svg",
        description:
          "A few SMALL dings, dents, or scratches on the body, but nothing needing significant repair.",
      },
      exterior_rough: {
        src: "/images/rough.svg",
        description:
          "Medium to large dents, several scratches, cracked bumper, and/or heavy rust.",
      },
      interior_better: {
        src: "/images/great.svg",
        description:
          "It might not have the new car smell, but the interior is super clean and there are no signs of wear.",
      },
      interior_normal: {
        src: "/images/average.svg",
        description:
          "A little dirty but nothing a good detail can't fix. Some wear and tear, but no need for significant repairs.",
      },
      interior_rough: {
        src: "/images/rough.svg",
        description:
          "Tears, excessive wear, heavily stained seats and carpet, damaged interior parts, and/or significant odor.",
      },
    },
  };
};
export default useConfirmForm;
