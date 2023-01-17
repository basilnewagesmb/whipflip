import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Select, Modal } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import InfoIcon from "components/common/infoIcon";
import Image from "next/image";
import {
  useVehicleWithPlateMutation,
  useVehicleWithVinMutation,
} from "services/util";

function ConfirmVehicle({
  initialOffer,
  formRealValues,
  form,
  isValid,
  setValid,
  states,
  currentSlide,
  prev,
  next,
  vehicleWithVin,
  vinHdl,
  vehicleWithPlate,
  platHdl,
  isReview,
}) {
  return (
    <div className="offer_block noBordBtm offer_block_mobi">
      <div className="ob_hd d-flex justify-content-between">
        <h2
          style={{
            fontSize: "20px",
          }}
        >
          Confirm Exact Vehicle
        </h2>
        {!isReview && (
          <div className="d-flex justify-content-center align-items-center">
            <Button
              className=" d-flex justify-content-center align-items-center"
              shape="circle"
              icon={<LeftOutlined />}
              disabled={currentSlide == 0}
              onClick={prev}
            />
            <Button
              className="ml-3 d-flex justify-content-center align-items-center"
              shape="circle"
              icon={<RightOutlined />}
              onClick={next}
              {...(formRealValues?.info?.type == "vin"
                ? { disabled: !formRealValues?.info?.vinNumber }
                : {
                    disabled:
                      !formRealValues?.info?.plateNumber ||
                      !formRealValues?.info?.state,
                  })}
            />{" "}
          </div>
        )}
      </div>
      <Form.Item label={false} name={["info", "type"]} hidden>
        <Input />
      </Form.Item>
      <div className="offer_block-body">
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0">
            <div className="chooseBlock selector row selectorRow">
              <div className="selecotr-item col-6 p-0">
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
                    onClick={(e) => {
                      setValid(true);
                      form.setFieldValue(["info", "type"], "vin");
                    }}
                  />
                  <label
                    htmlFor="radio1"
                    className="selector-item_label justify-content-center"
                  >
                    VIN #
                  </label>
                </div>
              </div>
              <div className="selecotr-item col-6 pr-0">
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
                    onClick={(e) => {
                      setValid(true);
                      form.setFieldValue(["info", "type"], "plate");
                    }}
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
                    {...(!isValid
                      ? {
                          help: vinHdl?.error?.data?.message,
                          validateStatus: "error",
                        }
                      : {})}
                  >
                    <Input
                      className="w-100"
                      placeholder="Enter Here"
                      onChange={() => {
                        setValid(true);
                      }}
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
                              You can find your 17-digit VIN # on the windshield
                              beneath the drivers side or in the driver's side
                              door jamb.
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
                    {...(!isValid
                      ? {
                          help: platHdl?.error?.data?.message,
                          validateStatus: "error",
                        }
                      : {})}
                  >
                    <InputNumber
                      className="w-100"
                      placeholder="Enter Here"
                      onChange={() => {
                        setValid(true);
                      }}
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
                        value: i.abbr,
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
      {!isReview && (
        <div className="offer_block-body">
          <div className="form-group text-center">
            <Button
              className="continueBtn"
              style={{
                borderRadius: "30px",
              }}
              size="large"
              loading={vinHdl?.isLoading || platHdl?.isLoading}
              {...(formRealValues?.info?.type == "vin"
                ? { disabled: !formRealValues?.info?.vinNumber }
                : {
                    disabled:
                      !formRealValues?.info?.plateNumber ||
                      !formRealValues?.info?.state,
                  })}
              onClick={async () => {
                const { info } = formRealValues;
                let res;
                switch (info.type) {
                  case "vin":
                    res = await vehicleWithVin(info.vinNumber);
                    if (res?.error?.data?.message) {
                      setValid(false);
                    } else {
                      next();
                      setValid(true);
                    }
                    break;
                  case "plate":
                    res = await vehicleWithPlate(info);
                    if (res?.error?.data?.message) {
                      setValid(false);
                    } else {
                      next();
                      setValid(true);
                    }
                    break;
                  default:
                    break;
                }
              }}
            >
              Continue
              <span>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 6.8151L0 1.8151L1.16667 0.648438L5 4.48177L8.83333 0.648438L10 1.8151L5 6.8151Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmVehicle;
