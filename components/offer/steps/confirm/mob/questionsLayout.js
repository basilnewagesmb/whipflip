import { setCurrentSlide } from "features/mob/mobSlice";
import { Form, Carousel } from "antd";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import useMobileHandler from "services/offer/initial/mobileHandler";
import getAmount from "utils/getAmount";
import ConfirmVehicle from "./confirm-vehicle";
import useConfirmFormMob from "services/offer/confirm/mobFunction";

function QuestionsLayout({ initialOffer }) {
  const carouselRef = useRef();
  const [form] = Form.useForm();
  const { currentSlide, next, prev, goTo } = useMobileHandler(
    carouselRef,
    form
  );
  const formFunc = useConfirmFormMob({
    form,
  });
  const dispatch = useDispatch();
  return (
    <div className="container p-0">
      <div className="itemSelected text-center">
        <span>Initial offer: {getAmount(initialOffer)}</span>
      </div>
      <Form
        name="confirm-mob"
        form={form}
        {...formFunc}
        autoComplete="off"
        size="large"
        layout="vertical"
        requiredMark={false}
      >
        <ConditionalWrap
          condition={false}
          wrap={(wrappedChildren) => (
            <Carousel
              afterChange={(i) => dispatch(setCurrentSlide(i))}
              dots={false}
              effect={"fade"}
              infinite={false}
              ref={carouselRef}
            >
              {wrappedChildren}
            </Carousel>
          )}
        >
          <ConfirmVehicle {...formFunc} />
        </ConditionalWrap>
      </Form>
    </div>
  );
}
const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;

export default QuestionsLayout;
