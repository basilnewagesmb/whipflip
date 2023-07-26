import React, { useState } from "react";
import Image from "next/image";
import {
  Form,
  Button,
  Input,
  Checkbox,
  DatePicker,
  InputNumber,
  Select,
  AutoComplete,
} from "antd";
import { LoadingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import Link from "next/link";
import RulesModal from "./rulesModal";
import useCheckMobile from "utils/checkMobile";

function SellFrom({
  formData,
  autoComplete,
  states,
  zipStatus,
  zipValidating,
  showNotValidZip,
  slots,
  closeRuleModal,
  isRulesOpen,
  data,
  submitAppointment,
  triggerFetch,
}) {
  const isMobile = useCheckMobile();
  return (
    <Form {...formData}>
      <div className="offer_right">
        <div className="or_head">
          <h1>When & Where Can We Drop Off Your Check?</h1>
        </div>
        <div className="offer_block">
          <div className="ob_hd">
            <h2>Set Appointment to Sell</h2>
          </div>
          <div className="offer_block-body">
            <div autoComplete="off" className="form" role="form">
              <div className="form-group row ob_frm_row">
                <label>Enter pickup address</label>
                <div className="col-lg-12 p-0 sacol">
                  <Form.Item
                    label={false}
                    name="street_address"
                    className="m-0 w-100"
                    rules={[
                      {
                        required: true,
                        message: "Please input Address!",
                      },
                    ]}
                  >
                    <AutoComplete
                      className="w-100"
                      {...autoComplete}
                      placeholder="Address"
                      value={formData?.formRealData?.street_address || ""}
                    />{" "}
                  </Form.Item>
                  <Form.Item name={"latLng"} hidden={true}>
                    <Input hidden />
                  </Form.Item>
                </div>
                {/* <div className="col-lg-12 p-0 sacol">
                  <Form.Item
                    label={false}
                    name={"appartment"}
                    className="m-0 w-100"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Apt/Ste/Other!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      className="w-100"
                      placeholder="Apt/Ste/Other"
                    />
                  </Form.Item>
                </div> */}
                <div className="col-lg-12 p-0 sacol">
                  <Form.Item
                    label={false}
                    name={"city"}
                    className="m-0 w-100"
                    rules={[
                      {
                        required: true,
                        message: "Please input your City!",
                      },
                    ]}
                  >
                    <Input size="large" className="w-100" placeholder="City" />
                  </Form.Item>
                </div>
                <div className="d-flex w-100 flex-column flex-md-row">
                  <Form.Item
                    label={false}
                    name={"state"}
                    className="m-0 w-100 mr-0 mr-md-1 mb-1 mb-md-0"
                    rules={[
                      {
                        required: true,
                        message: "Please select your State!",
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
                  <Form.Item
                    label={false}
                    name={"zip"}
                    className="m-0 w-100 ml-0 ml-md-1 mt-2 mt-md-0"
                    {...(zipStatus == false
                      ? {
                          help: (
                            <>
                              Out of Area
                              <InfoCircleOutlined
                                className="ml-2"
                                onClick={showNotValidZip}
                              />
                            </>
                          ),
                          validateStatus: "error",
                        }
                      : {})}
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
                  >
                    <Input
                      size="large"
                      className="w-100"
                      placeholder="Zip Code"
                      maxLength={5}
                      suffix={zipValidating && <LoadingOutlined />}
                      onBlur={() => {
                        triggerFetch(true);
                      }}
                      onFocus={() => {
                        triggerFetch(false);
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="form-row frmRow">
                  <div className="frmfldItem">
                    <label htmlFor="">When would you like to sell?</label>
                    <div className="d-flex w-100 flex-column flex-md-row">
                      <Form.Item
                        label={false}
                        name={"appointment_date"}
                        className="m-0 w-100 mr-0 mr-md-1 mb-1 mb-md-0"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Date!",
                          },
                        ]}
                      >
                        <DatePicker
                          inputReadOnly={true}
                          className="w-100"
                          disabledDate={(current) =>
                            current.isBefore(moment().subtract(1, "day")) ||
                            !current.isBefore(moment().add(7, "day"))
                          }
                          format={"MM-DD-YYYY"}
                        />
                      </Form.Item>

                      <Form.Item
                        label={false}
                        name={"appointment_time"}
                        className="m-0 w-100 ml-0 ml-md-1 mt-2 mt-md-0"
                        rules={[
                          {
                            required: true,
                            message: "Please select your time!",
                          },
                        ]}
                      >
                        {console.log(slots)}
                        <Select
                          className="w-100"
                          options={slots?.map?.((i) => ({
                            value: i.hour,
                            label:
                              i.hour +
                              (i[i.day_key] - i.current_appointments <= 0
                                ? " (BOOKED!)"
                                : ""),
                            disabled:
                              i[i.day_key] - i.current_appointments <= 0,
                          }))}
                          allowClear
                          placeholder="Select Time"
                          disabled={!slots}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offer_block no-border">
          <div className="ob_hd">
            <h2>Ownership Verification</h2>
          </div>
          <div className="offer_block-body">
            <div autoComplete="off" className="form" role="form">
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  {/* <label htmlFor="">Sole owner/only name on title?</label>{" "}
                  <Form.Item
                    name={"is_sole_owner"}
                    rules={[
                      {
                        required: true,
                        message: "Please select your Choice!",
                      },
                    ]}
                    className="m-0"
                  >
                    {" "}
                    <div className="chooseBlock selector row selectorRow">
                      <div className="selecotr-item col-lg-6 col-6 p-0">
                        <div
                          className={
                            formData?.formRealData?.is_sole_owner == "single"
                              ? "si-wrap active"
                              : "si-wrap"
                          }
                        >
                          <input
                            type="radio"
                            id="radio11"
                            name="selector"
                            className={
                              formData?.formRealData?.is_sole_owner == "single"
                                ? "selector-item_radio active"
                                : "selector-item_radio"
                            }
                            checked={
                              formData?.formRealData?.is_sole_owner == "single"
                            }
                            onClick={(e) =>
                              formData?.form.setFieldsValue({
                                is_sole_owner: "single",
                              })
                            }
                          />
                          <label
                            htmlFor="radio11"
                            className="selector-item_label justify-content-center"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                      <div className="selecotr-item col-lg-6 col-6 pr-0 ">
                        <div
                          className={
                            formData?.formRealData?.is_sole_owner == "double"
                              ? "si-wrap active"
                              : "si-wrap"
                          }
                        >
                          <input
                            type="radio"
                            id="radio12"
                            name="selector"
                            className={
                              formData?.formRealData?.is_sole_owner == "double"
                                ? "selector-item_radio active"
                                : "selector-item_radio"
                            }
                            checked={
                              formData?.formRealData?.is_sole_owner == "double"
                            }
                            onClick={(e) =>
                              formData?.form.setFieldsValue({
                                is_sole_owner: "double",
                              })
                            }
                          />
                          <label
                            htmlFor="radio12"
                            className="selector-item_label justify-content-center"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </Form.Item>
                  <div className="viewDetails">
                    {formData?.formRealData?.is_sole_owner && ( */}
                  <div className="viewDetail">
                    <div className="selectView vin">
                      <div className="checkIssues">
                        <div className="chooseIssues">
                          <div className="form-fld-grp">
                            <div className="form-row frmRow align-items-start">
                              <div className="frmfldItem">
                                <Form.Item
                                  label={"First Name"}
                                  name={"first_name"}
                                  className="m-0 "
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input your First Name!",
                                    },
                                  ]}
                                >
                                  <Input
                                    size="large"
                                    className="w-100"
                                    placeholder="Owner First Name"
                                  />
                                </Form.Item>
                              </div>
                              <div className="frmfldItem">
                                <Form.Item
                                  label={"Last Name"}
                                  name={"last_name"}
                                  className="m-0 "
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input your Last Name!",
                                    },
                                  ]}
                                >
                                  <Input
                                    size="large"
                                    className="w-100"
                                    placeholder="Owner Last Name"
                                  />
                                </Form.Item>
                              </div>
                              {/* <div className="frmfldItem suffFld">
                                    <Form.Item
                                      label={false}
                                      name={"suffix"}
                                      className="m-0"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Please select your suffix!",
                                        },
                                      ]}
                                    >
                                      <Select
                                        className="w-100"
                                        options={[
                                          {
                                            value: "Jr.",
                                            label: "Jr.",
                                          },
                                          {
                                            value: "Sr.",
                                            label: "Sr.",
                                          },
                                          {
                                            value: "I",
                                            label: "I",
                                          },
                                          {
                                            value: "II",
                                            label: "II",
                                          },
                                          {
                                            value: "III",
                                            label: "III",
                                          },
                                          {
                                            value: "IV",
                                            label: "IV",
                                          },
                                          {
                                            value: "V",
                                            label: "V",
                                          },
                                        ]}
                                        allowClear
                                        placeholder="Suffix"
                                      />
                                    </Form.Item>
                                  </div> */}
                            </div>
                            {formData?.formRealData?.is_sole_owner ==
                              "double" && (
                              <div className="form-row frmRow mt-2 align-items-start">
                                <div className="frmfldItem">
                                  <Form.Item
                                    label={false}
                                    name={"second_owner_first_name"}
                                    className="m-0 "
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your First Name!",
                                      },
                                    ]}
                                  >
                                    <Input
                                      size="large"
                                      className="w-100"
                                      placeholder="Second Owner First Name"
                                    />
                                  </Form.Item>
                                </div>
                                <div className="frmfldItem">
                                  <Form.Item
                                    label={false}
                                    name={"second_owner_last_name"}
                                    className="m-0 "
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your Second Owner Last Name!",
                                      },
                                    ]}
                                  >
                                    <Input
                                      size="large"
                                      className="w-100"
                                      placeholder="Second Owner Last Name"
                                    />
                                  </Form.Item>
                                </div>
                                <div className="frmfldItem suffFld">
                                  <Form.Item
                                    label={false}
                                    name={"second_owner_suffix"}
                                    className="m-0"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please select your suffix!",
                                      },
                                    ]}
                                  >
                                    <Select
                                      className="w-100"
                                      options={[
                                        {
                                          value: "Jr.",
                                          label: "Jr.",
                                        },
                                        {
                                          value: "Sr.",
                                          label: "Sr.",
                                        },
                                        {
                                          value: "I",
                                          label: "I",
                                        },
                                        {
                                          value: "II",
                                          label: "II",
                                        },
                                        {
                                          value: "III",
                                          label: "III",
                                        },
                                        {
                                          value: "IV",
                                          label: "IV",
                                        },
                                        {
                                          value: "V",
                                          label: "V",
                                        },
                                      ]}
                                      allowClear
                                      placeholder="Suffix"
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                            )}
                          </div>
                          {/* <div className="row">
                                <div className="col-lg-12 col-12">
                                  <Form.Item
                                    label={false}
                                    name={"email"}
                                    className="m-0 "
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
                                            return Promise.reject(
                                              "Invalid email"
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
                                      placeholder="Confirm Email"
                                    />
                                  </Form.Item>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-lg-12 col-12">
                                  <Form.Item
                                    label={false}
                                    name={"phone"}
                                    className="m-0 w-100"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your phone number!",
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
                                      placeholder="Confirm Phone Number"
                                    />
                                  </Form.Item>
                                </div>
                              </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* )}
                  </div> */}
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="">
                    Do you have the title to this vehicle?
                  </label>
                  <Form.Item
                    name={"hasTitle"}
                    rules={[
                      {
                        required: true,
                        message: "Please select your Choice!",
                      },
                    ]}
                    className="m-0"
                  >
                    <div className="chooseBlock selector row selectorRow">
                      <div
                        className="selecotr-item col-lg-6 col-6 p-0"
                        onClick={() =>
                          formData?.form.setFieldsValue({
                            hasTitle: true,
                          })
                        }
                      >
                        <label
                          className={`selector-item_label justify-content-center ${
                            formData?.formRealData?.hasTitle == true &&
                            "active_"
                          }`}
                        >
                          Yes
                        </label>
                      </div>
                      <div
                        className="selecotr-item col-lg-6 col-6 pr-0  "
                        onClick={() =>
                          formData?.form.setFieldsValue({
                            hasTitle: false,
                          })
                        }
                      >
                        <label
                          className={`selector-item_label justify-content-center ${
                            formData?.formRealData?.hasTitle == false &&
                            "active_"
                          }`}
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                {formData?.formRealData?.hasTitle == false && (
                  <div className="col-lg-12 p-0">
                    <label htmlFor=""> Is this vehicle financed?</label>
                    <Form.Item
                      name={"has_active_loan"}
                      rules={[
                        {
                          required: true,
                          message: "Please select your Choice!",
                        },
                      ]}
                      className="m-0"
                    >
                      <div className="chooseBlock selector row selectorRow">
                        <div
                          className="selecotr-item col-lg-6 col-6 p-0"
                          onClick={() =>
                            formData?.form.setFieldsValue({
                              has_active_loan: true,
                            })
                          }
                        >
                          <label
                            className={`selector-item_label justify-content-center ${
                              formData?.formRealData?.has_active_loan == true &&
                              "active_"
                            }`}
                          >
                            Yes
                          </label>
                        </div>
                        <div
                          className="selecotr-item col-lg-6 col-6 pr-0  "
                          onClick={() =>
                            formData?.form.setFieldsValue({
                              has_active_loan: false,
                            })
                          }
                        >
                          <label
                            className={`selector-item_label justify-content-center ${
                              formData?.formRealData?.has_active_loan ==
                                false && "active_"
                            }`}
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </Form.Item>
                    {/* {formData?.formRealData?.has_active_loan == true && (
                    <>
                      <div className="viewDetail"> 
                        <div className="selectView vin">
                          <div className="checkIssues">
                            <div className="chooseIssues">
                              <div className="form-fld-grp">
                                <label className="frmfl_label">
                                  Which bank is it with?
                                </label>
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <Form.Item
                                      name={"loanCompany"}
                                      className="m-0"
                                      rules={[
                                        {
                                          required: true,
                                          message:
                                            "Please input your financed bank!",
                                        },
                                      ]}
                                    >
                                      <Input
                                        size="large"
                                        placeholder="Choose Bank"
                                      />
                                    </Form.Item>
                                  </div>
                                </div>
                              </div>
                              <div className="form-fld-grp">
                                <label className="frmfl_label">
                                  How much is financed?
                                </label>
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <Form.Item
                                      name={"loanBalance"}
                                      className="m-0"
                                      rules={[
                                        {
                                          required:
                                            formData?.formRealData?.idk != true,
                                          message:
                                            "Please input your financed amount!",
                                        },
                                      ]}
                                    >
                                      <InputNumber
                                        size="large"
                                        placeholder="Enter Amount"
                                        disabled={
                                          formData?.formRealData?.idk == true
                                        }
                                        className="w-100"
                                      />
                                    </Form.Item>
                                  </div>
                                  <div className="frmfldItem">
                                    <div className=" frm_fld_chk">
                                      <Form.Item name={"idk"} className="m-0">
                                        <Checkbox
                                          onChange={(e) => {
                                            formData?.form.setFieldsValue({
                                              idk: e.target.checked,
                                            });
                                          }}
                                        >
                                          I don`t know
                                        </Checkbox>
                                      </Form.Item>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )} */}
                    {formData?.formRealData?.has_active_loan == false &&
                      formData?.formRealData?.hasTitle == false && (
                        <div className="selectView license_plate finance_no">
                          <div className="unable_to_reach unable_to_reach_desk">
                            <div className="ur_head text-center">
                              <Image
                                src="/images/unable-to-reach.svg"
                                alt="Unable to reach"
                                title="Unable to reach"
                                className="img-fluid"
                                width={128}
                                height={164}
                              />
                            </div>
                            <div className="ur_body text-center">
                              <h2>Sorry, but we`re unable to buy your car.</h2>
                              <p>
                                If you do not have a physical title and your
                                vehicle is not currently financed (Yes, we can
                                buy financed cars!), you will need to get a
                                clear title in your name before we can proceed.
                                If you feel your situation is different (e.g.
                                Estate sale or POA authorization), feel free to
                                call us at (888) 349-3189.
                              </p>
                            </div>
                          </div>
                          <div className="returnBtn returnBtnDesk">
                            <Link href={"/"}>
                              <button className="retBtn">
                                Return to the WhipFlip Website
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                  </div>
                )}
              </div>
              {formData?.formRealData?.has_active_loan == false &&
              formData?.formRealData?.hasTitle == false ? null : (
                <div className="doneProcess mt-3">
                  <Form.Item
                    name={"agreed"}
                    className="m-0"
                    rules={[
                      {
                        required: true,
                        message: "Please select your Choice!",
                      },
                    ]}
                  >
                    <Checkbox
                      onChange={(e) => {
                        formData?.form.setFieldsValue({
                          agreed: e.target.checked,
                        });
                      }}
                    >
                      I agree to the{" "}
                      <Link href={"/terms-and-conditions"} legacyBehavior>
                        <a target="_blank">terms of use.</a>
                      </Link>
                    </Checkbox>
                  </Form.Item>
                  <div className="initial_order_btn mt-2">
                    {zipStatus ? (
                      <Button
                        htmlType="submit"
                        className="initofferBtn h-auto"
                        //disabled={formData?.formRealData?.agreed != true}
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        htmlType="button"
                        className="initofferBtn h-auto"
                        onClick={() => {
                          formData?.form.validateFields();
                          window.scrollTo(0, 0);
                        }}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <RulesModal
        data={data}
        handleClose={closeRuleModal}
        show={isRulesOpen}
        clickFromWeb
        {...formData}
        submitAppointment={submitAppointment}
      />
    </Form>
  );
}

export default SellFrom;
