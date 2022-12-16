import { Clock, DisLike, Like, SandClock } from "components/common/icons";
import InfoIcon from "components/common/infoIcon";
import MetaHead from "components/common/metaHead";
import { Form, Button, Input, Select, InputNumber } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { InfoCircleOutlined } from "@ant-design/icons";
import useCheckMobile from "utils/useCheckMobile";
const { Option } = Select;

function Initial() {
  const isMobile = useCheckMobile();
  const { current, steps } = useSelector((state) => state.offer);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <MetaHead title={steps[current].title} />
      {!isMobile ? (
        <Form
          layout={"vertical"}
          name={steps[current].name}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
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
                        <Select
                          defaultValue="lucy"
                          size="large"
                          className="w-100 row m-0 color_list"
                          placeholder="Enter Mileage"
                        >
                          <Option className="color_card" value="china" label="China">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                              <div className="dropItemSpn">
                                <span
                                  style={{ backgroundColor: "red" }}
                                  className="color_dot"
                                ></span>
                              </div>
                              <span>value</span>
                            </div>
                          </Option>
                          <Option className="color_card" value="china" label="China">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                              <div className="dropItemSpn">
                                <span
                                  style={{ backgroundColor: "red" }}
                                  className="color_dot"
                                ></span>
                              </div>
                              <span>value</span>
                            </div>
                          </Option>
                        </Select>
                        
                      </Form.Item>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-12 p-0">
                      <label htmlFor="">Transmission</label>
                      <div className="chooseBlock selector row selectorRow">
                        <div className="selecotr-item col-lg-6 p-0">
                          <input
                            type="radio"
                            id="radio1"
                            name="selector"
                            className="selector-item_radio"
                            defaultChecked
                          />
                          <label
                            htmlFor="radio1"
                            className="selector-item_label"
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
                          />
                          <label
                            htmlFor="radio2"
                            className="selector-item_label"
                          >
                            Manual (i.e. Stick Shift)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-12 p-0">
                      <label htmlFor="">
                        Does the vehicle start and drive?
                      </label>
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
                            className="selector-item_label labelflexCenter"
                          >
                            <Like />
                            <span>Yes</span>
                          </label>
                        </div>
                        <div className="selecotr-item col-lg-6 pr-0">
                          <input
                            type="radio"
                            id="no"
                            name="selector1"
                            className="selector-item_radio"
                          />
                          <label
                            htmlFor="no"
                            className="selector-item_label labelflexCenter"
                          >
                            <DisLike /> <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offer_block">
              <div className="ob_hd">
                <h2>Where can we send your offer?</h2>
              </div>
              <div className="offer_block-body">
                <form autoComplete="off" className="form" role="form">
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-6 p-0">
                      <Form.Item
                        label="Zip Code"
                        name={["user", "zip"]}
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please input your zib code!",
                          },
                          {
                            validator: (rule, value = "") => {
                              if (value.trim().length != 0) {
                                if (/^\d{5}(-\d{4})?$/.test(value)) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  "The zip code must contain 5 digits"
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
                            "We send a copy of your quote to pick up right where you left off. We DO NOT distribute your info to 3rd parties..",
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
                      <label htmlFor="">When are you selling your car?</label>
                      <div className="chooseBlock selector row selectorRow rowSell">
                        <div className="sellItemChoose">
                          <input
                            type="radio"
                            id="sl1"
                            name="sl1"
                            className="selector-item_radio"
                            defaultChecked
                          />
                          <label
                            htmlFor="sl1"
                            className="selector-item_label labelflexCenter"
                          >
                            <Clock /> <span>ASAP!</span>
                          </label>
                        </div>
                        <div className="sellItemChoose">
                          <input
                            type="radio"
                            id="sl2"
                            name="sl1"
                            className="selector-item_radio"
                          />
                          <label
                            htmlFor="sl2"
                            className="selector-item_label labelflexCenter"
                          >
                            <SandClock />
                            <span>In a Few Weeks</span>
                          </label>
                        </div>
                        <div className="sellItemChoose">
                          <input
                            type="radio"
                            id="sl3"
                            name="sl1"
                            className="selector-item_radio"
                          />
                          <label
                            htmlFor="sl3"
                            className="selector-item_label labelflexCenter"
                          >
                            <span>Maybe Later...</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                // disabled={isDisable}
              >
                <span>Get My Initial Offer</span>
              </Button>
            </div>
          </div>
        </Form>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Initial;
