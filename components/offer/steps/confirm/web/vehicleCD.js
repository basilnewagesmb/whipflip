import { Form, Input, InputNumber } from "antd";
import React, { useEffect } from "react";
import { useConditionsQuery } from "services/util";
import Jump from "react-reveal/Jump";
function VehicleCD({ form, formRealValues }) {
  const { data: conditions } = useConditionsQuery();
  console.log(formRealValues?.conditions?.[0]?.data?.[0]);
  useEffect(() => {
    if (form) form.setFieldValue("conditions", conditions);
  }, [conditions]);

  return (
    <div className="offer_block">
      <div className="ob_hd">
        <h2>Vehicle Condition Details</h2>
      </div>
      <Form.Item label={false} name={"conditions"} hidden>
        <Input />
      </Form.Item>
      <div className="offer_block-body">
        <div>
          {formRealValues?.conditions?.map((item, i) => (
            <div className="form-group row ob_frm_row" key={i}>
              <div className="col-lg-12 p-0">
                <label>{item.title}</label>
                <div className="chooseBlock selector row selectorRow">
                  <div className="selecotr-item col-lg-6 p-0">
                    <div
                      className={`si-wrap ${!item.yes && "active-btn-only"}`}
                      onClick={() => {
                        form.setFieldValue(["conditions", i, "yes"], false);
                      }}
                    >
                      <label className="selector-item_label justify-content-center">
                        Nope!
                      </label>
                    </div>
                  </div>
                  <div className="selecotr-item col-lg-6 pr-0">
                    <div
                      className={`si-wrap ${item.yes && "active"}`}
                      onClick={() => {
                        form.setFieldValue(["conditions", i, "yes"], true);
                      }}
                    >
                      <label className="selector-item_label justify-content-center">
                        Yes
                      </label>
                    </div>
                  </div>
                </div>
                <Jump spy={item.yes}>
                  {item.yes && (
                    <div className="viewDetails">
                      <div className="viewDetail">
                        <div className="selectView vin">
                          <div className="checkIssues">
                            <h3>Check all that apply.</h3>
                            <div className="chooseIssues">
                              <div className="row">
                                <Form.Item
                                  label={false}
                                  name={["conditions", i, "active"]}
                                  className="m-0"
                                  rules={[
                                    {
                                      min: 2,
                                      message:
                                        "Please input your plate number!",
                                    },
                                  ]}
                                >
                                  <InputNumber />
                                </Form.Item>
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
                                            onClick={() => {
                                              form.setFieldValue(
                                                ["conditions", i, "data", j],
                                                {
                                                  uid: radio.uid,
                                                  name: radio.name,
                                                  active:
                                                    !formRealValues
                                                      ?.conditions?.[i].data?.[
                                                      j
                                                    ].active,
                                                }
                                              );
                                            }}
                                          />
                                          <label htmlFor={radio?.uid}>
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
    </div>
  );
}

export default VehicleCD;
