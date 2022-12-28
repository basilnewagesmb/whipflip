import { Clock, DisLike, Like, SandClock } from "components/common/icons";
import MetaHead from "components/common/metaHead";
import { Form, Button, Input, InputNumber } from "antd";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { InfoCircleOutlined } from "@ant-design/icons";
import useCheckMobile from "utils/checkMobile";
import ColorSelect from "./web/colorSelect";
import useInitialForm from "services/offer/function";
import LoaderAnim from "components/common/loader";
import InitialMob from "./moblie/index";

function Initial({ data }) {
  const isMobile = useCheckMobile();
  const { current, steps } = useSelector((state) => state.offer);
  const [form] = Form.useForm();
  const carouselRef = useRef();
  const {
    onFinish,
    onFinishFailed,
    mileageOnblur,
    initialValues,
    breakDownPop,
    isLoading,
    isDisable,
  } = useInitialForm({form, data, carouselRef});

  return (
    <div>
      <MetaHead title={steps[current].title} />
      <LoaderAnim isLoading={isLoading} />
      {!isMobile ? (
        <Form
          layout={"vertical"}
          name={steps[current].name}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
          initialValues={initialValues}
        >
          <div className="offer_right">
            <div className="or_head">
              <h1>Tell Us About Your Vehicle</h1>
            </div>
            <div className="offer_block">
              <div className="ob_hd">
                <h2>Vehicle Basics</h2>
              </div>
              <div className="offer_block-body">
                <div className="form" role="form">
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-6 p-0">
                      <Form.Item
                        label="Mileage"
                        name="mileage"
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please input your mileage!",
                          },
                        ]}
                      >
                        <InputNumber
                          size="large"
                          className="w-100"
                          placeholder="Enter Mileage"
                          min={0}
                          maxLength={6}
                          onBlur={mileageOnblur}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-6 p-0 color_picker">
                      <Form.Item
                        label="Color"
                        name="color"
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please select your vehicle color!",
                          },
                        ]}
                      >
                        <ColorSelect form={form} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-12 p-0">
                      <label htmlFor=""></label>
                      <Form.Item
                        label="Transmission"
                        name="transmission"
                        className="m-0 w-100"
                      >
                        <div className="chooseBlock selector row selectorRow">
                          <div className="selecotr-item col-lg-6 p-0">
                            <input
                              type="radio"
                              id="radio1"
                              name="selector"
                              className="selector-item_radio"
                              defaultChecked
                              onChange={() => {
                                form.setFieldsValue({
                                  transmission: "automatic",
                                });
                              }}
                            />
                            <label
                              htmlFor="radio1"
                              className="selector-item_label height_40_flex"
                            >
                              Automatic
                            </label>
                          </div>
                          <div className="selecotr-item col-lg-6 pr-0">
                            <input
                              type="radio"
                              id="radio2"
                              name="selector"
                              className="selector-item_radio"
                              onChange={() => {
                                form.setFieldsValue({
                                  transmission: "manual",
                                });
                              }}
                            />
                            <label
                              htmlFor="radio2"
                              className="selector-item_label height_40_flex"
                            >
                              Manual (i.e. Stick Shift)
                            </label>
                          </div>
                        </div>{" "}
                      </Form.Item>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-12 p-0">
                      <Form.Item
                        label="Does the vehicle start and drive?"
                        name="does_vehicle_start"
                        className="m-0 w-100"
                      >
                        <div className="chooseBlock selector row selectorRow">
                          <div className="selecotr-item col-lg-6 p-0">
                            <input
                              type="radio"
                              id="yes"
                              name="selector1"
                              className="selector-item_radio"
                              defaultChecked
                            />
                            <label
                              htmlFor="yes"
                              className="selector-item_label labelflexCenter height_40_flex"
                            >
                              <Like />
                              <span>Yes</span>
                            </label>
                          </div>
                          <div
                            className="selecotr-item col-lg-6 pr-0"
                            onClick={() => breakDownPop()}
                          >
                            <input
                              type="radio"
                              id="no"
                              name="selector1"
                              className="selector-item_radio"
                              disabled
                            />
                            <label
                              htmlFor="no"
                              className="selector-item_label labelflexCenter height_40_flex"
                            >
                              <DisLike /> <span>No</span>
                            </label>
                          </div>
                        </div>
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offer_block border-0">
              <div className="ob_hd">
                <h2>Where can we send your offer?</h2>
              </div>
              <div className="offer_block-body">
                <div className="form">
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-6 p-0">
                      <Form.Item
                        label="Zip Code"
                        name={["user", "zip"]}
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please input your zip code!",
                          },
                          {
                            validator: (rule, value = "") => {
                              if (value.trim().length != 0) {
                                if (/^\d{4,5}?$/.test(value)) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  "The zip code must contain 4 or 5 digits"
                                );
                              }
                              return Promise.resolve();
                            },
                          },
                        ]}
                        tooltip={{
                          title:
                            "Do we cover your area? Enter your zip code to find out.",
                          icon: <InfoCircleOutlined />,
                        }}
                      >
                        <Input
                          size="large"
                          className="w-100"
                          placeholder="Enter Here"
                          maxLength={5}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-6 p-0">
                      <Form.Item
                        label="Email"
                        name={["user", "email"]}
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Email!",
                          },
                          {
                            required: false,
                            validator: (rule, value = "") => {
                              if (value.trim().length != 0) {
                                if (
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                    value
                                  )
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject("Invalid email");
                              }
                              return Promise.resolve();
                            },
                          },
                        ]}
                        tooltip={{
                          title:
                            "We send a copy of your quote to pick up right where you left off. We DO NOT distribute your info to 3rd parties",
                          icon: <InfoCircleOutlined />,
                        }}
                      >
                        <Input
                          size="large"
                          className="w-100"
                          placeholder="Enter Here"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-12 p-0">
                      <div className="iptWrapper align-items-end">
                        <div className="iptLt">
                          <Form.Item
                            label="Phone Number (We won’t bug you!)"
                            name={["user", "phone"]}
                            className="m-0 w-100"
                            rules={[
                              {
                                required: true,
                                message: "Please input your phone number!",
                              },
                              {
                                validator: (rule, value = "") => {
                                  if (value.trim().length != 0) {
                                    if (/^[0-9]{10}$/.test(value)) {
                                      return Promise.resolve();
                                    }
                                    return Promise.reject(
                                      "Invalid phone number"
                                    );
                                  }
                                  return Promise.resolve();
                                },
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              className="w-100"
                              placeholder="Enter Here"
                            />
                          </Form.Item>{" "}
                        </div>
                        <div className="iptrt">
                          <span>
                            We won’t bug you but may need to contact you for
                            additional details quickly.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-12 p-0">
                      <Form.Item
                        label="When are you selling your car?"
                        name="readiness_uid"
                        className="m-0 w-100 h-0"
                      >
                        <Input hidden className="d-none" />
                      </Form.Item>
                      <div className="chooseBlock selector row selectorRow rowSell">
                        {data?.readiness?.map((item, i) => (
                          <div
                            className="sellItemChoose"
                            onClick={() => {
                              form.setFieldValue("readiness_uid", item.uid);
                            }}
                            key={item.uid}
                          >
                            <input
                              type="radio"
                              id={item.uid}
                              name="readiness"
                              className="selector-item_radio"
                              defaultChecked={i == 0}
                            />
                            <label
                              htmlFor={item.uid}
                              className="selector-item_label labelflexCenter"
                            >
                              {item.name == "A FEW WEEKS" && <SandClock />}
                              {item.name == "ASAP!" && <Clock />}
                              <span>{item.name}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="initial_order_btn">
              <Button
                htmlType="submit"
                className="getOfferBtn"
                style={{
                  height: "unset",
                }}
                type="text"
                disabled={isDisable}
              >
                <span>Get My Initial Offer</span>
              </Button>
            </div>
          </div>
        </Form>
      ) : (
        <Form
          layout={"vertical"}
          name={steps[current].name}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
          initialValues={initialValues}
        >
          <InitialMob data={data} form={form} carouselRef={carouselRef} />
        </Form>
      )}
    </div>
  );
}

export default Initial;
