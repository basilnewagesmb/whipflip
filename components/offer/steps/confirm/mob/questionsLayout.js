import { setCurrentSlide } from "features/mob/mobSlice";
import { Form, Carousel, Input, Button, notification } from "antd";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import useMobileHandler from "services/offer/initial/mobileHandler";
import getAmount from "utils/getAmount";
import ConfirmVehicle from "./confirm-vehicle";
import useConfirmFormMob from "services/offer/confirm/mobFunction";
import VehicleConditionMob from "./vehicle-condition";
import TireConditionsTemp from "./tire-conditions";
import ExteriorConditions from "./exterior-conditions";
import InteriorConditions from "./interior-conditions";
import Bounce from "react-reveal/Bounce";
import { Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import CarInfo from "../../initial/mob/carInfo";
function QuestionsLayout({ initialOffer, fbpixel, analytics }) {
  const carouselRef = useRef();
  const [form] = Form.useForm();
  const navFunc = useMobileHandler(carouselRef, form);
  const formFunc = useConfirmFormMob({
    form,
    navFunc,
    fbpixel,
    analytics,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (form) form.setFieldValue("conditions", formFunc?.conditions?.vehicle);
  }, [formFunc?.conditions?.vehicle]);
  useEffect(() => {
    formFunc?.formRealValues?.conditions?.map((item, i) => {
      form.setFieldValue(
        ["conditions", i, "active"],
        item.data.filter((one) => one.active).length == 0
          ? ""
          : item.data.filter((one) => one.active).length
      );
      form.validateFields([["conditions", i, "active"]]);
    });
  }, [formFunc?.formRealValues?.conditions]);
  const BtnC = () => {
    return (
      <div className="d-flex justify-content-center align-items-center">
        {!formFunc?.isReview && (
          <Button
            size="large"
            htmlType="button"
            className="w-100  m-1 d-flex justify-content-center align-items-center"
            onClick={() => {
              formFunc?.setIsReview(true);
              window.scrollTo(0, 0);
            }}
            icon={<EyeOutlined />}
          >
            Preview
          </Button>
        )}
        <Button
          className="confirm_off_btn m-1"
          size="large"
          htmlType="submit"
          onClick={() => form.submit()}
          loading={formFunc?.vinHdl.isLoading || formFunc?.platHdl.isLoading}
          disabled={
            formFunc?.vinHdl.isLoading ||
            formFunc?.platHdl.isLoading ||
            formFunc?.showTrimConfirm
          }
        >
          <span>
            {formFunc?.vinHdl.isLoading || formFunc?.platHdl.isLoading
              ? "Getting Details..."
              : !formFunc?.isReview
              ? "Continue"
              : "Confirm"}
          </span>
        </Button>
      </div>
    );
  };
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (formFunc?.formRealValues?.cosmetic?.interior) {
      api.open({
        message: false,
        placement: "bottom",
        closable: false,
        key: "updatable",
        description: <BtnC />,
        duration: null,
      });
    }
  }, [formFunc?.formRealValues?.cosmetic?.interior, formFunc]);
  console.log(formFunc?.formRealValues);

  return (
    <div className="container p-0">
      <CarInfo data={initialOffer} />
      {/* {contextHolder} */}
      <Form
        name="confirm-mob"
        form={form}
        {...formFunc}
        autoComplete="off"
        size="large"
        layout="vertical"
        requiredMark={false}
        scrollToFirstError={true}
      >
        <Form.Item label={false} name={"conditions"} hidden>
          <Input />
        </Form.Item>
        {/* <ConditionalWrap
          condition={!formFunc?.isReview}
          wrap={(wrappedChildren) => (
            <Carousel
              afterChange={(i) => dispatch(setCurrentSlide(i))}
              dots={false}
              effect={"fade"}
              infinite={false}
              ref={carouselRef}
              swipe={false}
              autoplay={false}
            >
              {wrappedChildren}
            </Carousel>
          )}
        > */}
        <ConfirmVehicle {...formFunc} {...navFunc} />
        {formFunc?.formRealValues?.conditions?.map((item, i) => (
          <VehicleConditionMob
            key={i}
            i={i}
            item={item}
            {...formFunc}
            {...navFunc}
          />
        ))}
        <TireConditionsTemp
          {...formFunc}
          {...navFunc}
          data={formFunc?.conditions?.tire}
        />
        <ExteriorConditions
          {...formFunc}
          {...navFunc}
          data={formFunc?.conditions?.cosmetic?.exterior}
        />
        <InteriorConditions
          {...formFunc}
          {...navFunc}
          data={formFunc?.conditions?.cosmetic?.interior}
        />
        <Button
          className="confirm_off_btn m-1"
          size="large"
          htmlType="submit"
          loading={formFunc?.vinHdl.isLoading || formFunc?.platHdl.isLoading}
          disabled={
            formFunc?.vinHdl.isLoading ||
            formFunc?.platHdl.isLoading ||
            formFunc?.showTrimConfirm
          }
        >
          <span>
            {formFunc?.vinHdl.isLoading || formFunc?.platHdl.isLoading
              ? "Getting Details..."
              : !formFunc?.isReview
              ? "Continue"
              : "Confirm"}
          </span>
        </Button>
        {/* </ConditionalWrap> */}
      </Form>
    </div>
  );
}
const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;

export default QuestionsLayout;
