import { Form, Input, InputNumber ,Modal} from "antd";
import React, { useEffect } from "react";
import Jump from "react-reveal/Jump";
import Image from "next/image";
import VehicleCDSkeleton from "./vehicleCDSkeliton";
import BreakDown from "components/anim/breakdown";
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
                          onClick={async () => {
                            form.setFieldValue(["conditions", i, "yes"], false);
                            form.setFieldValue(
                              ["conditions", i, "data"],
                              conditions[i].data
                            );
                            await form.validateFields([
                              ["conditions", i, "yes"],
                            ]);
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
                          onClick={async () => {
                            form.setFieldValue(["conditions", i, "yes"], true);
                            await form.validateFields([
                              ["conditions", i, "yes"],
                            ]);
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
                                        {[
                                          "Doesn't Start/Drive",
                                          "Engine Noise (Knocking)",
                                        ].includes(radio?.name) ? (
                                          <div
                                            onClick={async () => {
                                              Modal.success({
                                                className: "confirm-model",
                                                icon: (
                                                  <BreakDown isLoading={true} />
                                                ),
                                                footer: null,
                                                closable: true,
                                                title: (
                                                  <h6 className="text-center">
                                                    Uh oh!
                                                  </h6>
                                                ),
                                                okText: "OK",
                                                content: (
                                                  <div className="text-center">
                                                    <p>
                                                      Currently WhipFlip is not
                                                      purchasing vehicles that
                                                      are running poorly or
                                                      fully inoperable. This
                                                      includes vehicles that do
                                                      not start due to dead/bad
                                                      batteries, engine seized,
                                                      transmission inoperable or
                                                      severely malfunctioning,
                                                      flat tires, etc.
                                                      <br />
                                                      You will need to fully
                                                      repair any of the issues
                                                      mentioned above before
                                                      proceeding forward. We may
                                                      require proof of repair or
                                                      proper running condition
                                                      before extending an final
                                                      offer.
                                                    </p>
                                                  </div>
                                                ),
                                                okButtonProps: {
                                                  className: "getOfferBtn",
                                                },
                                              });
                                            }}
                                          >
                                            <input type="checkbox" />
                                            <label>
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
                                          </div>
                                        ) : (
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
                                                    [
                                                      "conditions",
                                                      i,
                                                      "data",
                                                      j,
                                                    ],
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
                                                  await form.validateFields([
                                                    [
                                                      "conditions",
                                                      i,
                                                      "data",
                                                      j,
                                                    ],
                                                  ]);
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
                                        )}
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
