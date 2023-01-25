import React, { useState } from "react";
import Image from "next/image";
import {
  Form,
  Button,
  Input,
  InputNumber,
  DatePicker,
  Select,
  AutoComplete,
} from "antd";
function SellFrom({ formData, autoComplete, states }) {
  const [show, setShow] = React.useState(false);
  const [startDate, setStartDate] = useState(null);
  const [status2, setStatus2] = useState(true);
  const [condition, setCondition] = useState(2);
  const [warning, setWarning] = useState(1);
  const handleOnBlur = ({ target: { value } }) => {
    const date = new Date(value);
    if (isValid(date)) {
      console.log("date: %s", format(date, "dd/MM/yyyy"));
    } else {
      console.log("value: %s", date);
    }
  };
  const conditionHandler = (condition) => {
    setCondition(condition);
  };
  const warningHandler = (warning) => {
    setWarning(warning);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <Form {...formData}>
      <div className="offer_right">
        <div className="or_head">
          <h1>When Can We Drop Off Your Check?</h1>
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
                        message: "Please input your Address!",
                      },
                    ]}
                  >
                    <AutoComplete
                      className="w-100"
                      {...autoComplete}
                      placeholder="Address"
                    />{" "}
                  </Form.Item>
                </div>
                <div className="col-lg-12 p-0 sacol">
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
                </div>
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
                <div className="form-row frmRow">
                  <div className="frmfldItem">
                    <Form.Item
                      label={false}
                      name={"state"}
                      className="m-0"
                      rules={[
                        {
                          required: true,
                          message: "Please input your state!",
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
                  <div className="frmfldItem">
                    <Form.Item
                      label={false}
                      name={"zip"}
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
                    >
                      <Input
                        size="large"
                        className="w-100"
                        placeholder="Zip Code"
                        maxLength={5}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="form-row frmRow">
                  <div className="frmfldItem">
                    <label htmlFor="">When would you like to sell?</label>
                    <div className="sellfld">
                      <div className="sellfld_itm">
                        <DatePicker className="w-100" />
                      </div>
                      <div className="sellfld_itm">
                        <div className="selTime">
                          <select
                            className="form-control"
                            id="user_time_zone"
                            size="0"
                          >
                            <option value="Hawaii">Select Time</option>
                            <option value="Alaska">(GMT-09:00) Alaska</option>
                          </select>
                        </div>
                      </div>
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
                  <label htmlFor="">Sole owner/only name on title?</label>
                  <div className="chooseBlock selector row selectorRow">
                    <div className="selecotr-item col-lg-6 p-0">
                      <div
                        className={
                          condition === 1 ? "si-wrap active" : "si-wrap"
                        }
                      >
                        <input
                          type="radio"
                          id="radio11"
                          name="selector"
                          className={
                            condition === 1
                              ? "selector-item_radio active"
                              : "selector-item_radio"
                          }
                          checked={condition === 1}
                          onClick={(e) => conditionHandler(1)}
                        />
                        <label
                          htmlFor="radio11"
                          className="selector-item_label"
                        >
                          Yes
                        </label>
                      </div>
                    </div>
                    <div className="selecotr-item col-lg-6 pr-0">
                      <div
                        className={
                          condition === 2 ? "si-wrap active" : "si-wrap"
                        }
                      >
                        <input
                          type="radio"
                          id="radio12"
                          name="selector"
                          className={
                            condition === 2
                              ? "selector-item_radio active"
                              : "selector-item_radio"
                          }
                          checked={condition === 2}
                          onClick={(e) => conditionHandler(2)}
                        />
                        <label
                          htmlFor="radio12"
                          className="selector-item_label"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="viewDetails">
                    {condition === 1 && (
                      <div className="viewDetail">
                        <div className="selectView vin">
                          <div className="checkIssues">
                            <div className="chooseIssues">
                              <div className="form-fld-grp">
                                {/* <label className="frmfl_label">Owner</label>  */}
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Owner First Name"
                                    />
                                  </div>
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Owner Last Name"
                                    />
                                  </div>
                                  <div className="frmfldItem suffFld">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Suffix</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="form-fld-grp">
                                {/* <label className="frmfl_label">Email</label>   */}
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Confirm Email"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-fld-grp">
                                {/* <label className="frmfl_label">Phone Number</label>   */}
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Confirm Phone #"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {condition === 2 && (
                      <div className="viewDetail">
                        <div className="selectView vin">
                          <div className="checkIssues">
                            <div className="chooseIssues">
                              <div className="form-fld-grp">
                                {/* <label className="frmfl_label">Owner</label>  */}
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Owner First Name"
                                    />
                                  </div>
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Owner Last Name"
                                    />
                                  </div>
                                  <div className="frmfldItem suffFld">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Suffix</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="form-fld-grp">
                                {/* <label className="frmfl_label">Owner</label>  */}
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Second Owner First Name"
                                    />
                                  </div>
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Second Owner Last Name"
                                    />
                                  </div>
                                  <div className="frmfldItem suffFld">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Suffix</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="form-fld-grp">
                                {/* <label className="frmfl_label">Email</label>   */}
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Confirm Email"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-fld-grp">
                                {/* <label className="frmfl_label">Phone Number</label>   */}
                                <div className="form-row frmRow">
                                  <div className="frmfldItem">
                                    <input
                                      type="text"
                                      placeholder="Confirm Phone #"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="">
                    Do you have the title to this vehicle?
                  </label>
                  <div className="chooseBlock selector row selectorRow">
                    <div className="selecotr-item col-lg-6 p-0">
                      <input
                        type="radio"
                        id="radiono"
                        name="selector__sel"
                        className="selector-item_radio"
                        defaultChecked
                        onClick={() => setStatus2(true)}
                      />
                      <label htmlFor="radiono" className="selector-item_label">
                        Yes
                      </label>
                    </div>
                    <div className="selecotr-item col-lg-6 pr-0">
                      <input
                        type="radio"
                        id="radioyes"
                        name="selector__sel"
                        className="selector-item_radio"
                        onClick={() => setStatus2(false)}
                      />
                      <label htmlFor="radioyes" className="selector-item_label">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {status2 === false && (
                <div className="form-group row ob_frm_row">
                  <div className="col-lg-12 p-0">
                    <label htmlFor=""> Is this vehicle financed?</label>
                    <div className="chooseBlock selector row selectorRow">
                      <div className="selecotr-item col-lg-6 p-0">
                        <div
                          className={
                            warning === 1 ? "si-wrap active" : "si-wrap"
                          }
                        >
                          <input
                            type="radio"
                            id="war1"
                            name="selectorw"
                            className={
                              warning === 1
                                ? "selector-item_radio active"
                                : "selector-item_radio"
                            }
                            checked={warning === 1}
                            onClick={(e) => warningHandler(1)}
                          />
                          <label htmlFor="war1" className="selector-item_label">
                            Yes
                          </label>
                        </div>
                      </div>
                      <div className="selecotr-item col-lg-6 pr-0">
                        <div className={warning === 2 ? "si-wrap" : "si-wrap"}>
                          <input
                            type="radio"
                            id="war2"
                            name="selectorw"
                            className={
                              warning === 2
                                ? "selector-item_radio active"
                                : "selector-item_radio"
                            }
                            checked={warning === 2}
                            onClick={(e) => warningHandler(2)}
                          />
                          <label htmlFor="war2" className="selector-item_label">
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    {warning === 1 && (
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
                                      <input
                                        type="text"
                                        placeholder="Choose Bank"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-fld-grp">
                                  <label className="frmfl_label">
                                    How much is financed?
                                  </label>
                                  <div className="form-row frmRow">
                                    <div className="frmfldItem">
                                      <input
                                        type="text"
                                        placeholder="Enter Amount"
                                      />
                                    </div>
                                    <div className="frmfldItem">
                                      <div className="form-group check-group frm_fld_chk">
                                        <input type="checkbox" id="chk11" />
                                        <label htmlFor="chk11">
                                          I dont know
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {warning === 2 && (
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
                            <h2>Sorry, but we’re unable to buy your car.</h2>
                            <p>
                              If you do not have a physical title and your
                              vehicle is not currently financed (Yes, we can buy
                              financed cars!), you will need to get a clear
                              title in your name before we can proceed. If you
                              feel your situation is different (e.g. Estate sale
                              or POA authorization), feel free to call us at
                              (888) 349-3189.
                            </p>
                          </div>
                        </div>
                        <div className="returnBtn returnBtnDesk">
                          <button className="retBtn">
                            Return to the WhipFlip Website
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {status2 === true || warning === 1 ? (
                <>
                  <div className="doneProcess mt-3">
                    <div className="frmfldItem frmAgree">
                      <div className="form-group check-group frm_fld_chk">
                        <input type="checkbox" id="chk111" />
                        <label htmlFor="chk111">
                          I agree to the terms of use.
                        </label>
                      </div>
                    </div>
                    <div className="initial_order_btn">
                      <button
                        type="submit"
                        className="initofferBtn"
                        onClick={handleOpen}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              <Button htmlType="submit">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SellFrom;
