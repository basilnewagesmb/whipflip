import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useConditionsQuery,
  useStatesQuery,
  useVehicleWithPlateMutation,
  useVehicleWithVinMutation,
} from "services/util";
import useCheckMobile from "utils/checkMobile";
import { Form, Modal, QRCode, Button, message } from "antd";
import {
  useAddDamagesMutation,
  useGetOfferQuery,
  useSkipToInstantOfferMutation,
} from "../api";
import Image from "next/image";
import { setCurrent } from "features/offer/offerSlice";
import { useRouter } from "next/router";
import SkipButton from "components/offer/steps/confirm/web/skipButton";
function useConfirmFormMob({ form, navFunc }) {
  const [isReview, setIsReview] = useState(false);
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
        ShowEasyStep(dispatch, setCurrent, skipToInstantOffer, initialOffer);
      }
    }
  }, [offerData]);

  const { data: states } = useStatesQuery();
  const { data: conditions, isLoading: isConditionsLoading } =
    useConditionsQuery();
  const [vehicleWithVin, vinHdl] = useVehicleWithVinMutation();
  const [vehicleWithPlate, platHdl] = useVehicleWithPlateMutation();
  const [addDamages, { isLoading: confirming }] = useAddDamagesMutation();

  useEffect(() => {
    if (form) {
      form.setFieldValue("tire", conditions?.tire[0]?.uid);
      form.setFieldValue(
        ["cosmetic", "interior"],
        conditions?.cosmetic?.interior[0]?.uid
      );
      form.setFieldValue(
        ["cosmetic", "exterior"],
        conditions?.cosmetic?.exterior[0]?.uid
      );
    }
  }, [conditions?.tire, conditions?.cosmetic]);

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
    if (res?.data) {
      const cRes = await addDamages({ issues });
      console.log(cRes);
      if (cRes?.data) {
        //ShowEasyStep(dispatch, setCurrent);
      }
    } else {
      message.error("trim not fount");
      navFunc.goTo(0);
    }
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  const formDate = {
    form,
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
    vehicleWithVin,
    vehicleWithPlate,
    isReview,
    setIsReview,
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
                  title="easy final"
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
                        title="easy final"
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
                <>
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
                </>
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

export default useConfirmFormMob;
