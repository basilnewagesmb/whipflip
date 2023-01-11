import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import getAmount from "utils/getAmount";
import useCheckMobile from "utils/checkMobile";
import ConfirmMob from "./mob/index";
import { Button, Form, Input, InputNumber, Select, Modal } from "antd";
import InfoIcon from "components/common/infoIcon";
import { useConditionsQuery, useStatesQuery } from "services/util";
import VehicleCD from "./web/vehicleCD";
function Confirm() {
  const [isValid, setValid] = useState(null);
  const [form] = Form.useForm();
  const formRealValues = Form.useWatch([], form);
  const isMobile = useCheckMobile();
  const { initialOffer } = useSelector((state) => state.offer);
  const { data: states } = useStatesQuery();
  const { data: conditions } = useConditionsQuery();
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
  console.log(formRealValues);
  return !isMobile ? (
    <Form
      name="confirm"
      initialValues={{
        info: {
          type: "vin",
          number: null,
          state: null,
        },
      }}
      form={form}
      onFinish={(data) => {
        console.log(data);
      }}
      onFinishFailed={(error) => {
        console.log(error);
      }}
      autoComplete="off"
      size="large"
      layout="vertical"
      scrollToFirstError={{
        behavior: "smooth",
        block: "center",
        inline: "center",
      }}
      requiredMark={false}
    >
      <div className="offer_right">
        <div className="or_head">
          <h1>Awesome Initial Offer: {getAmount(initialOffer)}!</h1>
          <p>
            We just need a few more bits of information to make your offer as
            accurate as possible!
          </p>
        </div>
        <div className="offer_block">
          <div className="ob_hd">
            <h2>Vehicle Information</h2>
          </div>
          <Form.Item label={false} name={["info", "type"]} hidden>
            <Input />
          </Form.Item>
          <div className="offer_block-body">
            <div className="form-group row ob_frm_row">
              <div className="col-lg-12 p-0">
                <div className="chooseBlock selector row selectorRow">
                  <div className="selecotr-item col-lg-6 p-0">
                    <div
                      className={
                        formRealValues?.info?.type === "vin"
                          ? "si-wrap active"
                          : "si-wrap"
                      }
                    >
                      <input
                        type="radio"
                        id="radio1"
                        name="selector"
                        className={
                          formRealValues?.info?.type === "vin"
                            ? "selector-item_radio active"
                            : "selector-item_radio"
                        }
                        checked={formRealValues?.info?.type === "vin"}
                        onClick={(e) =>
                          form.setFieldValue(["info", "type"], "vin")
                        }
                      />
                      <label
                        htmlFor="radio1"
                        className="selector-item_label justify-content-center"
                      >
                        VIN #
                      </label>
                    </div>
                  </div>
                  <div className="selecotr-item col-lg-6 pr-0">
                    <div
                      className={
                        formRealValues?.info?.type === "plate"
                          ? "si-wrap active"
                          : "si-wrap"
                      }
                    >
                      <input
                        type="radio"
                        id="radio2"
                        name="selector"
                        className={
                          formRealValues?.info?.type === "plate"
                            ? "selector-item_radio active "
                            : "selector-item_radio"
                        }
                        checked={formRealValues?.info?.type === "plate"}
                        onClick={(e) =>
                          form.setFieldValue(["info", "type"], "plate")
                        }
                      />
                      <label
                        htmlFor="radio2"
                        className="selector-item_label justify-content-center"
                      >
                        License Plate
                      </label>
                    </div>
                  </div>
                </div>
                <div className="viewDetail">
                  {formRealValues?.info?.type === "vin" && (
                    <div className="selectView vin">
                      <Form.Item
                        label={false}
                        name={["info", "vinNumber"]}
                        className="m-0"
                        rules={[
                          {
                            required: formRealValues?.info?.type === "vin",
                            message: "Please input your vin number!",
                          },
                        ]}
                        help={!isValid && "nkjsdds"}
                        validateStatus={!isValid && "error"}
                      >
                        <InputNumber
                          className="w-100"
                          placeholder="Enter Here"
                        />
                      </Form.Item>
                      <span
                        className="helpin"
                        onClick={() =>
                          Modal.success({
                            icon: null,
                            width: 500,
                            closable: true,
                            title: "Finding Your VIN #",
                            className: "center-child",
                            content: (
                              <div className="d-flex flex-column justify-content-center align-items-center">
                                <Image
                                  width={265}
                                  height={123}
                                  src="/images/fyi.svg"
                                  className="mt-3"
                                />
                                <p className="mt-3">
                                  You can find your 17-digit VIN # on the
                                  windshield beneath the drivers side or in the
                                  driver's side door jamb.
                                </p>
                              </div>
                            ),
                            okButtonProps: {
                              style: {
                                display: "none",
                              },
                            },
                          })
                        }
                      >
                        <InfoIcon />
                        <span>How do I find my VIN?</span>
                      </span>
                    </div>
                  )}
                  {formRealValues?.info?.type === "plate" && (
                    <div className="selectView license_plate">
                      <Form.Item
                        label={"Plate Number"}
                        name={["info", "plateNumber"]}
                        className="mb-3"
                        rules={[
                          {
                            required: formRealValues?.info?.type === "plate",
                            message: "Please input your plate number!",
                          },
                        ]}
                      >
                        <InputNumber
                          className="w-100"
                          placeholder="Enter Here"
                        />
                      </Form.Item>
                      <Form.Item
                        label={"State"}
                        name={["info", "state"]}
                        className="m-0"
                        rules={[
                          {
                            required: formRealValues?.info?.type === "plate",
                            message: "Please input your plate number!",
                          },
                        ]}
                      >
                        <Select
                          className="w-100"
                          options={states?.map?.((i) => ({
                            value: i.uid,
                            label: i.state,
                          }))}
                          allowClear
                          placeholder="State"
                        />
                      </Form.Item>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <VehicleCD
          form={form}
          formRealValues={formRealValues}
          conditions={conditions?.vehicle}
        />
        <div className="offer_block">
          <div className="ob_hd">
            <h2>Tire Condition</h2>
          </div>
          <div className="offer_block-body">
            <div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="">Tire condition?</label>
                  <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                    <Form.Item label={false} name={"tire"} hidden>
                      <Input />
                    </Form.Item>
                    {conditions?.tire?.map((item, i) => (
                      <div
                        className={`sellItemChoose tirecondition ${
                          formRealValues.tire == item.uid && "selected"
                        }`}
                        key={i}
                        onClick={(e) => form.setFieldValue("tire", item.uid)}
                      >
                        <label className="selector-item_label labelflexCenter tclabel ">
                          {item?.image && (
                            <span>
                              <Image
                                src={item?.image}
                                alt={item?.name}
                                title={item?.name}
                                width={50}
                                height={50}
                              />
                            </span>
                          )}
                          <span className="bodyTc">
                            <h3>{item?.name}</h3>
                            <span>{item?.description}</span>
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offer_block">
          <div className="ob_hd">
            <h2>Cosmetic Condition</h2>
          </div>
          <div className="offer_block-body">
            <div autoComplete="off" className="form" role="form">
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label className="d-block">
                    How would you honestly rate your vehicle's{" "}
                    <span className="underline">
                      {"  "}
                      <b>EXTERIOR</b>
                    </span>{" "}
                    condition?
                  </label>
                  <Form.Item
                    label={false}
                    name={["cosmetic", "exterior"]}
                    hidden
                  >
                    <Input />
                  </Form.Item>
                  <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                    {conditions?.cosmetic?.exterior?.map((item, i) => (
                      <div
                        className={`sellItemChoose tirecondition ${
                          formRealValues?.cosmetic?.exterior == item.uid &&
                          "selected"
                        }`}
                        onClick={(e) =>
                          form.setFieldValue(["cosmetic", "exterior"], item.uid)
                        }
                      >
                        <label className="selector-item_label labelflexCenter tclabel">
                          {item?.image && (
                            <span>
                              <Image
                                src={item?.image}
                                alt={item?.name}
                                title={item?.name}
                                width={50}
                                height={50}
                              />
                            </span>
                          )}
                          <span className="bodyTc">
                            <h3>{item?.name}</h3>
                            <span>{item?.description}</span>
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="" className="d-block">
                    How would you honestly rate your vehicle's{" "}
                    <span className="underline">
                      {" "}
                      <b>INTERIOR</b>{" "}
                    </span>{" "}
                    condition?
                  </label>
                  <Form.Item
                    label={false}
                    name={["cosmetic", "interior"]}
                    hidden
                  >
                    <Input />
                  </Form.Item>
                  <div className="chooseBlock selector row selectorRow rowSell tireconditions cosmicconditions">
                    {conditions?.cosmetic?.interior?.map((item, i) => (
                      <div
                        className={`sellItemChoose tirecondition ${
                          formRealValues?.cosmetic?.interior == item.uid &&
                          "selected"
                        }`}
                        onClick={(e) =>
                          form.setFieldValue(["cosmetic", "interior"], item.uid)
                        }
                      >
                        <label className="selector-item_label labelflexCenter tclabel">
                          {item?.image && (
                            <span>
                              <Image
                                src={item?.image}
                                alt={item?.name}
                                title={item?.name}
                                width={50}
                                height={50}
                              />
                            </span>
                          )}
                          <span className="bodyTc">
                            <h3>{item?.name}</h3>
                            <span>{item?.description}</span>
                          </span>
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
          <div
            className="btn border"
            onClick={() => {
              window.scrollTo(0, 0);

              setValid(true);
            }}
          >
            setValid true
          </div>
          <div
            className="btn border"
            onClick={() => {
              window.scrollTo(0, 0);

              setValid(false);
            }}
          >
            setValid false
          </div>
          <Button
            htmlType="submit"
            className="getOfferBtn"
            style={{
              height: "unset",
            }}
            type="text"

            // disabled
          >
            <span> Confirm My Offer</span>
          </Button>
        </div>
      </div>
    </Form>
  ) : (
    <ConfirmMob initialOffer={initialOffer} />
  );
}

export default Confirm;
