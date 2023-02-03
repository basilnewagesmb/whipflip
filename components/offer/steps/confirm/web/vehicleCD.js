import { Form, Input, InputNumber } from "antd";
import React, { useEffect } from "react";
import Jump from "react-reveal/Jump";
import Image from "next/image";
import VehicleCDSkeleton from "./vehicleCDSkeliton";
function VehicleCD({ form, formRealValues, conditions, isConditionsLoading }) {
  useEffect(() => {
    if (form) form.setFieldValue("conditions", conditions);
  }, [conditions]);
  useEffect(() => {
    formRealValues?.conditions?.map((item, i) => {
      form.setFieldValue(
        ["conditions", i, "active"],
        item.data.filter((one) => one.active).length == 0
          ? ""
          : item.data.filter((one) => one.active).length
      );
    });
  }, [formRealValues?.conditions]);
  return (
    <div className="offer_block">
      <div className="ob_hd">
        <h2>Vehicle Condition Details</h2>
      </div>
      <Form.Item label={false} name={"conditions"} hidden>
        <Input />
      </Form.Item>
      {isConditionsLoading ? (
        <VehicleCDSkeleton />
      ) : (
        <div className="offer_block-body">
          <div>
            {formRealValues?.conditions?.map((item, i) => (
              <div className="form-group row ob_frm_row" key={i}>
                <div className="col-lg-12 p-0">
                  <label>{item.title}</label>
                  <Form.Item
                    label={false}
                    className="m-0"
                    name={["conditions", i, "yes"]}
                    rules={[
                      {
                        required: true,
                        message: "Please select your Choice!",
                      },
                    ]}
                  >
                    <div className="chooseBlock selector row selectorRow">
                      <div className="selecotr-item col-lg-6 p-0">
                        <div
                          className={`si-wrap ${
                            item.yes === false && "active-btn-only"
                          }`}
                          onClick={() => {
                            form.setFieldValue(["conditions", i, "yes"], false);
                            form.setFieldValue(
                              ["conditions", i, "data"],
                              conditions[i].data
                            );
                            form.validateFields();
                          }}
                        >
                          <label className="selector-item_label justify-content-center">
                            Nope!
                          </label>
                        </div>
                      </div>
                      <div className="selecotr-item col-lg-6 pr-0">
                        <div
                          className={`si-wrap ${item.yes === true && "active"}`}
                          onClick={() => {
                            form.setFieldValue(["conditions", i, "yes"], true);
                            form.validateFields();
                          }}
                        >
                          <label className="selector-item_label justify-content-center">
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                  </Form.Item>
                  <Jump spy={item.yes}>
                    {item.yes && (
                      <div className="viewDetails">
                        <div className={`viewDetail`}>
                          <div className="selectView vin">
                            <div className="checkIssues">
                              <h3 className="m-0">Check all that apply.</h3>
                              <Form.Item
                                label={false}
                                name={["conditions", i, "active"]}
                                className="m-0 border-0 p-0 height-hide"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please select at least one!",
                                  },
                                ]}
                              >
                                <InputNumber
                                  className="w-100"
                                  min={1}
                                  style={{
                                    height: 0,
                                    opacity: 0,
                                    overFlow: "hidden",
                                  }}
                                />
                              </Form.Item>
                              <div className="chooseIssues">
                                <div className="row">
                                  {item?.data?.map((radio, j) => (
                                    <div className="col-lg-6" key={j}>
                                      <div className="form-group check-group mb-0">
                                        <Form.Item
                                          label={false}
                                          name={["conditions", i, "data", j]}
                                          className="m-0"
                                          id={radio?.uid}
                                        >
                                          <>
                                            <input
                                              type="checkbox"
                                              id={radio?.uid}
                                              onClick={async () => {
                                                await form.setFieldValue(
                                                  ["conditions", i, "data", j],
                                                  {
                                                    uid: radio.uid,
                                                    name: radio.name,
                                                    active:
                                                      !formRealValues
                                                        ?.conditions?.[i]
                                                        .data?.[j].active,
                                                    image: radio?.image
                                                      ? radio.image
                                                      : null,
                                                  }
                                                );
                                                form.validateFields();
                                              }}
                                            />
                                            <label htmlFor={radio?.uid}>
                                              {radio.image && (
                                                <span className="opicon">
                                                  <img
                                                    src={radio.image}
                                                    alt={radio?.name}
                                                    title={radio?.name}
                                                    width={20}
                                                    height={20}
                                                  />
                                                </span>
                                              )}
                                              {radio?.name}
                                            </label>
                                          </>
                                        </Form.Item>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Jump>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default VehicleCD;
