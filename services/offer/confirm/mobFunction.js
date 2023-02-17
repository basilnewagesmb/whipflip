import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useConditionsQuery,
  useStatesQuery,
  useVehicleWithPlateMutation,
  useVehicleWithVinMutation,
} from "services/util";
import useCheckMobile from "utils/checkMobile";
import { Form, Modal, QRCode, Button, message, Space, Radio } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import {
  useAddDamagesMutation,
  useGetOfferQuery,
  useSkipToInstantOfferMutation,
} from "../api";
import Image from "next/image";
import { setCurrent } from "features/offer/offerSlice";
import { useRouter } from "next/router";
import SkipButton from "components/offer/steps/confirm/web/skipButton";
import Link from "next/link";
function useConfirmFormMob({ form, navFunc }) {
  const { confirm } = Modal;
  const [isReview, setIsReview] = useState(false);
  const dispatch = useDispatch();
  const [isValid, setValid] = useState(true);
  const formRealValues = Form.useWatch([], form);
  const isMobile = useCheckMobile();
  const initialOfferData = useSelector((state) => state.offer);
  const { query, pathname } = useRouter();
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
        // ShowEasyStepMob(dispatch, setCurrent, skipToInstantOffer, initialOffer);
      }
    }
  }, [offerData]);

  const { data: states } = useStatesQuery();
  const { data: conditions, isLoading: isConditionsLoading } =
    useConditionsQuery();
  const [vehicleWithVin, vinHdl] = useVehicleWithVinMutation();
  const [vehicleWithPlate, platHdl] = useVehicleWithPlateMutation();
  const [addDamages, { isLoading: confirming }] = useAddDamagesMutation();

  const initialValues = {
    info: {
      type: "vin",
    },
  };
  const onFinish = async (data) => {
    console.log(data);
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
    if ((res?.data?.trimlevel?.length, issues)) {
      showConfirm(res?.data, data, issues);
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
              const full_trim = level?.trimlevel?.find(
                (item) => item.vehicle_id == e.target.value
              ).body;
              const cRes = await addDamages({
                issues,
                vin: data?.info.vinNumber || level?.vin || "",
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
            {level?.trimlevel?.map((item, k) => (
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
export const ShowEasyStepMob = (
  dispatch,
  setCurrent,
  skipToInstantOffer,
  initialOffer
) => {
  Modal.info({
    title: (
      <h6 className="text-center " style={{ color: "#4381c0" }}>
        One Final Easy Step!
      </h6>
    ),
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
              <div className="fes_col_left_in text-center">
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
                <Link href={`/prospect/${initialOffer?.uid}/valuate`}>
                  <Button
                    className="confirm_off_btn rounded"
                    size="large"
                    htmlType="button"
                  >
                    Start Taking Photos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="fesFooter fesBody_in_row">
          <div className="fesFooter_body">
            <div className="fes_col_right_in">
              <div className="fcr_head">
                <h2>Can't take the photos right now?</h2>
              </div>
              <div className="fcr_list text-left">
                <ul>
                  <li>Instant offer is a click away!</li>
                  <li>We'll confirm the exact condition at your delivery. </li>
                  <li>Final value might change </li>
                </ul>
              </div>
            </div>
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
