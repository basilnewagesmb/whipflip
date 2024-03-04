import React from "react";
import CarInfo from "./carInfo";
import { Select, Form } from "antd";
import Milage from "./milage";
import ColorPicker from "./color";
import Transmission from "./transmission";
import StartAndDrive from "./start-and-drive";
import SeeInitOffer from "./see-init-offer";
import useMobileHandler from "services/offer/initial/mobileHandler";
import { useDispatch } from "react-redux";
function InitialMob({ data, form, carouselRef }) {
  const isM1 = data?.is_m1;
  const { currentSlide, next, prev, goTo } = useMobileHandler(
    carouselRef,
    form
  );
  const dispatch = useDispatch();
  return (
    <div className="bookingcar">
      <div className="container">
        <CarInfo data={data} full={currentSlide == 0} />
        <div className="offer_block noBordBtm offer_block_mobi">
          <div className="ob_hd d-flex justify-content-between">
            <h2>Vehicle Basics</h2>
          </div>
          {isM1 && (
            <div className="form-group row ob_frm_row">
              <div className="col-lg-6 p-0">
                <Form.Item
                  label="Trim"
                  name="trim"
                  className="m-0 w-100"
                  rules={[
                    {
                      required: true,
                      message: "Please select your Trim!",
                    },
                  ]}
                >
                  <Select
                    size="large"
                    className="w-100"
                    placeholder="Select Trim"
                  >
                    {data?.trimlevel?.map((item) => (
                      <Select.Option value={item.trim}>
                        {item.trim}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </div>
          )}
          <Milage form={form} data={data} next={next} goTo={goTo} />
          <ColorPicker form={form} data={data} next={next} />
          <Transmission form={form} next={next} />
          <StartAndDrive form={form} data={data} next={next} />
          <SeeInitOffer form={form} data={data} goTo={goTo} />{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default InitialMob;
