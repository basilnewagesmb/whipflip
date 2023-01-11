import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import getAmount from "utils/getAmount";
import useCheckMobile from "utils/checkMobile";
import ConfirmMob from "./mob/index";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Modal,
  Checkbox,
} from "antd";
import InfoIcon from "components/common/infoIcon";
import { useConditionsQuery, useStatesQuery } from "services/util";
import VehicleCD from "./web/vehicleCD";
function Confirm() {
  const [form] = Form.useForm();
  const formRealValues = Form.useWatch([], form);
  const isMobile = useCheckMobile();
  const { initialOffer } = useSelector((state) => state.offer);
  const { data: states } = useStatesQuery();
  const [status2, setStatus2] = useState(1);
  const [condition, setCondition] = useState(2);
  const [warning, setWarning] = useState(1);
  const [show, setShow] = useState(false);
  const [showfinal, setShowfinal] = useState(false);
  const [issues, setIssues] = useState(1);
  const [modify, setModify] = useState(1);
  const modifyHandler = (modify) => {
    setModify(modify);
    console.log("issue", modify);
  };
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const radioHandler2 = (status) => {
    setStatus2(status);
  };
  const conditionHandler = (condition) => {
    setCondition(condition);
  };
  const issueHandler = (issue) => {
    setIssues(issue);
    console.log("issue", issue);
  };
  const warningHandler = (warning) => {
    setWarning(warning);
  };
  const handlefinalOpen = (e) => {
    e.preventDefault();
    setShowfinal(true);
  };
  const handleOpen = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handlefinalClose = () => setShowfinal(false);
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
        <VehicleCD form={form} formRealValues={formRealValues} />
        <div className="offer_block">
          <div className="ob_hd">
            <h2>Tire Condition</h2>
          </div>
          <div className="offer_block-body">
            <div autoComplete="off" className="form" role="form">
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="">Tire condition?</label>
                  <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="tc1"
                        name="tc"
                        className="selector-item_radio"
                        defaultChecked
                      />
                      <label
                        htmlFor="tc1"
                        className="selector-item_label labelflexCenter tclabel"
                      >
                        <span>
                          <Image
                            src="/images/plenty-thread.svg"
                            alt="plenty-thread"
                            title="plenty-thread"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>Plenty of Tread</h3>
                          <span>Recently replaced tires</span>
                        </span>
                      </label>
                    </div>
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="tc2"
                        name="tc"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="tc2"
                        className="selector-item_label labelflexCenter tclabel"
                      >
                        <span>
                          <Image
                            src="/images/some-thread.svg"
                            alt="some-thread"
                            title="some thread"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>Some Tread</h3>
                          <span>Average wear, but passes inspection</span>
                        </span>
                      </label>
                    </div>
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="tc3"
                        name="tc"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="tc3"
                        className="selector-item_label labelflexCenter tclabel"
                      >
                        <span>
                          <Image
                            src="/images/bald.svg"
                            alt="bald"
                            title="bald"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>Bald</h3>
                          <span>Little tread left, steel belts showing</span>
                        </span>
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
            <h2>Cosmetic Condition</h2>
          </div>
          <div className="offer_block-body">
            <form autoComplete="off" className="form" role="form">
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label className="d-block">
                    How would you honestly rate your vehicle’s{" "}
                    <span className="underline">
                      {"  "}
                      <b>EXTERIOR</b>
                    </span>{" "}
                    condition?
                  </label>
                  <div className="chooseBlock selector row selectorRow rowSell tireconditions">
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="cc1"
                        name="cc"
                        className="selector-item_radio"
                        defaultChecked
                      />
                      <label
                        htmlFor="cc1"
                        className="selector-item_label labelflexCenter tclabel"
                      >
                        <span>
                          <Image
                            src="/images/great.svg"
                            alt="great"
                            title="great"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>FLIPPIN’ GREAT!</h3>
                          <span>
                            Truly in showroom condition. May only have a few
                            barely visible imperfections.
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="cc2"
                        name="cc"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="cc2"
                        className="selector-item_label labelflexCenter tclabel"
                      >
                        <span>
                          <Image
                            src="/images/average.svg"
                            alt="average"
                            title="average"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>Just Average</h3>
                          <span>
                            A few SMALL dings, dents, or scratches on the body,
                            but nothing needing significant repair.
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="cc3"
                        name="cc"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="cc3"
                        className="selector-item_label labelflexCenter tclabel"
                      >
                        <span>
                          <Image
                            src="/images/rough.svg"
                            alt="rough"
                            title="rough"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>It’s Rough...</h3>
                          <span>
                            Medium to large dents, several scratches, cracked
                            bumper, and/or heavy rust.
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="" className="d-block">
                    How would you honestly rate your vehicle’s{" "}
                    <span className="underline">
                      {" "}
                      <b>INTERIOR</b>{" "}
                    </span>{" "}
                    condition?
                  </label>
                  <div className="chooseBlock selector row selectorRow rowSell tireconditions cosmicconditions">
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="cc11"
                        name="cc11"
                        className="selector-item_radio"
                        defaultChecked
                      />
                      <label
                        htmlFor="cc11"
                        className="selector-item_label labelflexCenter tclabel cclabel"
                      >
                        <span>
                          <Image
                            src="/images/great.svg"
                            alt="great"
                            title="great"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>FLIPPIN’ GREAT!</h3>
                          <span>
                            It might not have the new car smell, but the
                            interior is super clean and there are no signs of
                            wear.
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="cc22"
                        name="cc11"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="cc22"
                        className="selector-item_label labelflexCenter tclabel"
                      >
                        <span>
                          <Image
                            src="/images/average.svg"
                            alt="average"
                            title="average"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>Just Average</h3>
                          <span>
                            A little dirty but nothing a good detail can’t fix.
                            Some wear and tear, but no need for significant
                            repairs.
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="sellItemChoose tirecondition">
                      <input
                        type="radio"
                        id="cc33"
                        name="cc11"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="cc33"
                        className="selector-item_label labelflexCenter tclabel"
                      >
                        <span>
                          <Image
                            src="/images/rough.svg"
                            alt="rough"
                            title="rough"
                            width={50}
                            height={50}
                          />
                        </span>
                        <span className="bodyTc">
                          <h3>It’s Rough...</h3>
                          <span>
                            Tears, excessive wear, heavily stained seats and
                            carpet, damaged interior parts, and/or significant
                            odor.
                          </span>
                        </span>
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
