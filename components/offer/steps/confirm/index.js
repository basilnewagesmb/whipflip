import React from "react";
import Image from "next/image";
import getAmount from "utils/getAmount";
import ConfirmMob from "./mob/index";
import { Button, Form, Input, InputNumber, Select, Modal } from "antd";
import InfoIcon from "components/common/infoIcon";
import VehicleCD from "./web/vehicleCD";
import useConfirmForm, {
  Images,
  ShowEasyStep,
} from "services/offer/confirm/function";
import LoaderAnim from "components/common/loader";
import { setCurrent } from "features/offer/offerSlice";
import { useDispatch } from "react-redux";
import { useSkipToInstantOfferMutation } from "services/offer/api";
import { ShowEasyStepMob } from "services/offer/confirm/mobFunction";
import Link from "next/link";
function Confirm({ fbpixel, analytics }) {
  const [skipToInstantOffer, {}] = useSkipToInstantOfferMutation();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const {
    formRealValues,
    initialOffer,
    isMobile,
    states,
    conditions,
    isValid,
    initialValues,
    onFinishFailed,
    onFinish,
    isConditionsLoading,
    vinHdl,
    platHdl,
    setValid,
    confirming,
  } = useConfirmForm({ form, fbpixel, analytics });
  return (
    <>
      <LoaderAnim isLoading={confirming} />
      {getAmount(initialOffer) == "$ NEEDS REVIEW" ? (
        <div className="offer_right">
          <div className="or_head">
            <h1>Awesome Initial Offer: {getAmount(initialOffer)}</h1>
            <p>
              Your offer may be higher or lower. We just need a few important
              bits of information to finalize a GREAT offer!
            </p>
            <div className="cf_btn cf_btn_web text-center">
              <Link href="/">
                <button className="returnHomeBtn">
                  Return to the WhipFlip Website
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {initialOffer?.is_deduction_added == "Y" && (
            <div className="offer_right">
              <div className="or_head">
                <h1>Confirm Your Initial Offer</h1>
                <p>
                  Your offer may be higher or lower. We just need a few
                  important bits of information to finalize a GREAT offer!
                </p>
                <div className="initial_order_btn mb-5">
                  <Button
                    htmlType="button"
                    className="getOfferBtn"
                    style={{
                      height: "unset",
                    }}
                    type="text"
                    onClick={() => {
                      isMobile
                        ? ShowEasyStepMob(
                            dispatch,
                            setCurrent,
                            skipToInstantOffer,
                            initialOffer
                          )
                        : ShowEasyStep(
                            dispatch,
                            setCurrent,
                            skipToInstantOffer,
                            initialOffer
                          );
                    }}
                  >
                    <span>Confirm My Offer</span>
                  </Button>
                </div>{" "}
              </div>
            </div>
          )}
          {!isMobile ? (
            <Form
              name="confirm"
              initialValues={initialValues}
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              size="large"
              layout="vertical"
              scrollToFirstError={{
                behavior: "smooth",
                block: "center",
                inline: "center",
              }}
              requiredMark={false}
              disabled={initialOffer?.is_deduction_added == "Y"}
              className={initialOffer?.is_deduction_added == "Y" && "disabled"}
            >
              <div className="offer_right">
                {initialOffer?.is_deduction_added == "N" && (
                  <div className="or_head">
                    <h1>Confirm Your Initial Offer</h1>
                    <p>
                      Your offer may be higher or lower. We just need a few
                      important bits of information to finalize a GREAT offer!
                    </p>
                  </div>
                )}
                <div className="offer_block">
                  <div className="ob_hd ob_frm_row">
                    <h2>Vehicle Information</h2>

                    <label className="mt-2">
                      Enter your VIN OR License Plate Number
                    </label>
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
                                onClick={(e) => {
                                  setValid(true);
                                  form.setFieldValue(["info", "type"], "vin");
                                }}
                              />
                              <label
                                htmlFor="radio1"
                                className="selector-item_label justify-content-center uniform_item_label"
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
                                onClick={(e) => {
                                  setValid(true);
                                  form.setFieldValue(["info", "type"], "plate");
                                }}
                              />
                              <label
                                htmlFor="radio2"
                                className="selector-item_label justify-content-center uniform_item_label"
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
                                    required:
                                      formRealValues?.info?.type === "vin",
                                    message: "Please input your VIN number!",
                                  },
                                  {
                                    min: 17,
                                    message:
                                      "VIN must be at least 17 characters",
                                  },
                                  {
                                    max: 17,
                                    message: "VIN cannot exceed 17 characters",
                                  },
                                  {
                                    pattern: new RegExp(/^[a-np-zA-NP-Z0-9]*$/),
                                    message: "Invalid VIN",
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
                                          {`You can find your 17-digit VIN # on the
                                      windshield beneath the drivers side or in
                                      the driver's side door jamb.`}
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
                                label={"License Plate Number"}
                                name={["info", "plateNumber"]}
                                className="mb-3"
                                rules={[
                                  {
                                    required:
                                      formRealValues?.info?.type === "plate",
                                    message:
                                      "Please input your license plate number!",
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
                                    required:
                                      formRealValues?.info?.type === "plate",
                                    message: "Please select your state!",
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
                </div>
                <VehicleCD
                  form={form}
                  formRealValues={formRealValues}
                  conditions={conditions?.vehicle}
                  isConditionsLoading={isConditionsLoading}
                />
                <div className="offer_block">
                  <div className="ob_hd">
                    <h2>Tires Condition</h2>
                  </div>
                  <div className="offer_block-body">
                    <div>
                      <div className="form-group row ob_frm_row">
                        <div className="col-lg-12 p-0">
                          <label htmlFor="">How are your tires?</label>
                          <Form.Item
                            label={false}
                            name={"tire"}
                            rules={[
                              {
                                required: true,
                                message: "Please select your Choice!",
                              },
                            ]}
                          >
                            <div className="chooseBlock selector row selectorRow rowSell tireconditions ">
                              {conditions?.tire?.map((item, i) => (
                                <div
                                  className={`sellItemChoose tirecondition  ${
                                    formRealValues?.tire == item.uid &&
                                    "selected"
                                  }`}
                                  key={i}
                                  onClick={(e) =>
                                    form.setFieldsValue({ tire: item.uid })
                                  }
                                >
                                  <label className="selector-item_label labelflexCenter tclabel min-170 ">
                                    {Images()?.tire[item.match_name].src && (
                                      <span>
                                        <Image
                                          src={
                                            Images()?.tire[item.match_name].src
                                          }
                                          alt={item?.name}
                                          title={item?.name}
                                          width={50}
                                          height={50}
                                        />
                                      </span>
                                    )}
                                    <span className="bodyTc">
                                      <h3>{item?.name}</h3>
                                      <span>
                                        {
                                          Images()?.tire[item.match_name]
                                            ?.description
                                        }
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              ))}{" "}
                            </div>{" "}
                          </Form.Item>
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
                            {`How would you honestly rate your vehicle's`}{" "}
                            <span className="underline">
                              {"  "}
                              <b>EXTERIOR</b>
                            </span>{" "}
                            condition?
                          </label>
                          <Form.Item
                            label={false}
                            name={["cosmetic", "exterior"]}
                            rules={[
                              {
                                required: true,
                                message: "Please select your Choice!",
                              },
                            ]}
                            className="m-0"
                          >
                            <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                              {conditions?.cosmetic?.exterior?.map(
                                (item, i) => (
                                  <div
                                    className={`sellItemChoose tirecondition ${
                                      formRealValues?.cosmetic?.exterior ==
                                        item.uid && "selected"
                                    }`}
                                    key={i}
                                    onClick={async (e) => {
                                      form.setFieldValue(
                                        ["cosmetic", "exterior"],
                                        item.uid
                                      );
                                      await form.validateFields([
                                        ["cosmetic", "exterior"],
                                      ]);
                                    }}
                                  >
                                    <label className="selector-item_label labelflexCenter tclabel">
                                      {Images()?.cosmetic[item.match_name]
                                        .src && (
                                        <span>
                                          <Image
                                            src={
                                              Images()?.cosmetic[
                                                item.match_name
                                              ].src
                                            }
                                            alt={item?.name}
                                            title={item?.name}
                                            width={50}
                                            height={50}
                                          />
                                        </span>
                                      )}
                                      <span className="bodyTc">
                                        <h3>{item?.name}</h3>
                                        <span>
                                          {
                                            Images()?.cosmetic[item.match_name]
                                              ?.description
                                          }
                                        </span>
                                      </span>
                                    </label>
                                  </div>
                                )
                              )}
                            </div>
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group row ob_frm_row">
                        <div className="col-lg-12 p-0">
                          <label htmlFor="" className="d-block">
                            {`How would you honestly rate your vehicle's`}{" "}
                            <span className="underline">
                              {" "}
                              <b>INTERIOR</b>{" "}
                            </span>{" "}
                            condition?
                          </label>
                          <Form.Item
                            label={false}
                            name={["cosmetic", "interior"]}
                            rules={[
                              {
                                required: true,
                                message: "Please select your Choice!",
                              },
                            ]}
                            className="m-0"
                          >
                            <div className="chooseBlock selector row selectorRow rowSell tireconditions cosmicconditions">
                              {conditions?.cosmetic?.interior?.map(
                                (item, i) => (
                                  <div
                                    className={`sellItemChoose tirecondition ${
                                      formRealValues?.cosmetic?.interior ==
                                        item.uid && "selected"
                                    }`}
                                    onClick={async (e) => {
                                      form.setFieldValue(
                                        ["cosmetic", "interior"],
                                        item.uid
                                      );
                                      await form.validateFields([
                                        ["cosmetic", "interior"],
                                      ]);
                                    }}
                                    key={i}
                                  >
                                    <label className="selector-item_label labelflexCenter tclabel">
                                      {Images()?.cosmetic[item.match_name]
                                        .src && (
                                        <span>
                                          <Image
                                            src={
                                              Images()?.cosmetic[
                                                item.match_name
                                              ].src
                                            }
                                            alt={item?.name}
                                            title={item?.name}
                                            width={50}
                                            height={50}
                                          />
                                        </span>
                                      )}
                                      <span className="bodyTc">
                                        <h3>{item?.name}</h3>
                                        <span>
                                          {
                                            Images()?.cosmetic[item.match_name]
                                              ?.description
                                          }
                                        </span>
                                      </span>
                                    </label>
                                  </div>
                                )
                              )}
                            </div>
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
                    }}
                    type="text"
                    loading={vinHdl.isLoading || platHdl.isLoading}
                    disabled={vinHdl.isLoading || platHdl.isLoading}
                  >
                    <span>
                      {vinHdl.isLoading || platHdl.isLoading
                        ? "Getting Details..."
                        : " Confirm My Offer"}
                    </span>
                  </Button>
                </div>
              </div>
            </Form>
          ) : (
            initialOffer?.is_deduction_added != "Y" && (
              <ConfirmMob
                initialOffer={initialOffer}
                fbpixel={fbpixel}
                analytics={analytics}
              />
            )
          )}
        </>
      )}
    </>
  );
}

export default Confirm;
