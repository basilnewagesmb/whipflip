import { Clock, DisLike, Like, SandClock } from "components/common/icons";
import MetaHead from "components/common/metaHead";
import {
  Form,
  Button,
  Input,
  InputNumber,
  Typography,
  Tooltip,
  Select,
  Checkbox,
} from "antd";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { InfoCircleOutlined } from "@ant-design/icons";
import useCheckMobile from "utils/checkMobile";
import ColorSelect from "./web/colorSelect";
import useInitialForm from "services/offer/initial/function";
import LoaderAnim from "components/common/loader";
import InitialMob from "./mob/index";
import Link from "next/link";
const { Text } = Typography;

function Initial(props) {
  const { data } = props;
  const isM1 = data?.is_m1;
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
  } = useInitialForm({ form, data, carouselRef, props });
  const isAgreed = Form.useWatch("agreed", form);

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
          scrollToFirstError={true}
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
                  {" "}
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
                              <Select.Option value={item.trim} key={item}>
                                {item.trim}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                  )}
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
                          maxLength={7}
                          onBlur={mileageOnblur}
                          formatter={(value) =>
                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          }
                          parser={(value) =>
                            value.replace(/\$\s?|(,*)/g, "").toString()
                          }
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
                    <div className="col-lg-6 p-0">
                      <label htmlFor=""></label>
                      <Form.Item
                        label="Transmission"
                        name="transmission"
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Choice!",
                          },
                        ]}
                      >
                        <div className="chooseBlock selector row selectorRow">
                          <div className="selecotr-item col-lg-6 p-0">
                            <input
                              type="radio"
                              id="radio1"
                              name="selector"
                              className="selector-item_radio"
                              onChange={() => {
                                form.setFieldsValue({
                                  transmission: "automatic",
                                });
                              }}
                            />
                            <label
                              htmlFor="radio1"
                              className="selector-item_label height_40_flex justify-content-center uniform_item_label"
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
                              className="selector-item_label height_40_flex justify-content-center uniform_item_label"
                            >
                              <Tooltip title="(i.e. Stick Shift)">
                                Manual
                              </Tooltip>
                            </label>
                          </div>
                        </div>{" "}
                      </Form.Item>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-6 p-0">
                      <Form.Item
                        label="Does the vehicle start and drive?"
                        name="does_vehicle_start"
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Choice!",
                          },
                        ]}
                      >
                        <div className="chooseBlock selector row selectorRow">
                          <div
                            className="selecotr-item col-lg-6 p-0 "
                            onClick={() =>
                              form.setFieldsValue({
                                does_vehicle_start: true,
                              })
                            }
                          >
                            <input
                              type="radio"
                              id="yes"
                              name="selector1"
                              className="selector-item_radio"
                            />
                            <label
                              htmlFor="yes"
                              className="selector-item_label labelflexCenter height_40_flex uniform_item_label"
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
                              className="selector-item_label labelflexCenter height_40_flex uniform_item_label"
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
                            "We send a copy of your initial offer to pick up right where you left off. We DO NOT distribute your info to 3rd parties",
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
                            label={
                              <div>
                                <div> Phone #</div>
                                <div
                                  style={{
                                    fontSize: 12,
                                  }}
                                >
                                  {" "}
                                  (We may need more info or clarification)
                                </div>
                              </div>
                            }
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
                          <div className="iptWrapperSio">
                            <span className="helpin mobHlp">
                              <span>
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.3335 10.3359H7.66683V6.33594H6.3335V10.3359ZM7.00016 5.0026C7.18905 5.0026 7.3475 4.9386 7.4755 4.8106C7.60305 4.68305 7.66683 4.52483 7.66683 4.33594C7.66683 4.14705 7.60305 3.9886 7.4755 3.8606C7.3475 3.73305 7.18905 3.66927 7.00016 3.66927C6.81127 3.66927 6.65305 3.73305 6.5255 3.8606C6.3975 3.9886 6.3335 4.14705 6.3335 4.33594C6.3335 4.52483 6.3975 4.68305 6.5255 4.8106C6.65305 4.9386 6.81127 5.0026 7.00016 5.0026ZM7.00016 13.6693C6.07794 13.6693 5.21127 13.4942 4.40016 13.1439C3.58905 12.7942 2.8835 12.3193 2.2835 11.7193C1.6835 11.1193 1.20861 10.4137 0.858829 9.6026C0.508607 8.79149 0.333496 7.92483 0.333496 7.0026C0.333496 6.08038 0.508607 5.21372 0.858829 4.4026C1.20861 3.59149 1.6835 2.88594 2.2835 2.28594C2.8835 1.68594 3.58905 1.21083 4.40016 0.860604C5.21127 0.510826 6.07794 0.335938 7.00016 0.335938C7.92239 0.335938 8.78905 0.510826 9.60016 0.860604C10.4113 1.21083 11.1168 1.68594 11.7168 2.28594C12.3168 2.88594 12.7917 3.59149 13.1415 4.4026C13.4917 5.21372 13.6668 6.08038 13.6668 7.0026C13.6668 7.92483 13.4917 8.79149 13.1415 9.6026C12.7917 10.4137 12.3168 11.1193 11.7168 11.7193C11.1168 12.3193 10.4113 12.7942 9.60016 13.1439C8.78905 13.4942 7.92239 13.6693 7.00016 13.6693ZM7.00016 12.3359C8.47794 12.3359 9.73639 11.8166 10.7755 10.7779C11.8142 9.73883 12.3335 8.48038 12.3335 7.0026C12.3335 5.52483 11.8142 4.26638 10.7755 3.22727C9.73639 2.1886 8.47794 1.66927 7.00016 1.66927C5.52239 1.66927 4.26416 2.1886 3.2255 3.22727C2.18638 4.26638 1.66683 5.52483 1.66683 7.0026C1.66683 8.48038 2.18638 9.73883 3.2255 10.7779C4.26416 11.8166 5.52239 12.3359 7.00016 12.3359Z"
                                    fill="#8D8C9D"
                                  />
                                </svg>
                              </span>
                              <span>
                                We might need more vehicle details from you.
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="iptrt">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-12 p-0">
                      <Form.Item
                        label="When are you selling your car?"
                        name="readiness_uid"
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Choice!",
                          },
                        ]}
                      >
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
                                name="readiness_uid"
                                value={item.uid}
                                className="selector-item_radio"
                              />
                              <label
                                htmlFor={item.uid}
                                className="selector-item_label labelflexCenter uniform_item_label"
                              >
                                {item.name == "A FEW WEEKS" && <SandClock />}
                                {item.name == "ASAP!" && <Clock />}
                                <span>
                                  {item.name == "I'M NOT"
                                    ? "IN THE FUTURE"
                                    : item.name}
                                </span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </Form.Item>
                    </div>
                  </div>{" "}
                  <div className="form-group row ob_frm_row">
                    <div className="col-lg-12 p-0">
                      <Form.Item
                        label={null}
                        name="agreed"
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Checkbox
                          onChange={(e) => {
                            form.setFieldsValue({
                              agreed: e.target.checked,
                            });
                          }}
                        >
                          I agree to the{" "}
                          <Link href={"/terms-and-conditions"} legacyBehavior>
                            <a target="_blank">terms of use</a>
                          </Link>{" "}
                          &{" "}
                          <Link href={"/privacy-policys"} legacyBehavior>
                            <a target="_blank">Privacy Policy.</a>
                          </Link>
                        </Checkbox>{" "}
                      </Form.Item>
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
                  opacity: !isAgreed ? "0.8" : 1,
                }}
                type="text"
                disabled={isDisable || !isAgreed}
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
