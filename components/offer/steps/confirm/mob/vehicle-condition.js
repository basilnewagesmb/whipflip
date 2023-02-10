import { InputNumber, Form, Button, Modal } from "antd";
import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import BreakDown from "components/anim/breakdown";

function VehicleConditionMob({
  form,
  item,
  i,
  conditions,
  currentSlide,
  prev,
  next,
  formRealValues,
  isReview,
}) {
  return (
    <div className="offer_block noBordBtm offer_block_mobi" key={i}>
      <div className="ob_hd d-flex justify-content-between">
        <h2
          style={{
            fontSize: "20px",
          }}
        >
          Vehicle Condition Details
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
          </div>
        )}
      </div>
      <div className="form-group row ob_frm_row">
        <div className="col-lg-12 p-0">
          <label>{item.title}</label>
          <div className="chooseBlock selector row selectorRow">
            <div className="selecotr-item col-6 p-0">
              <div
                className={`si-wrap ${item.yes === false && "active-btn-only"}`}
                onClick={() => {
                  form.setFieldValue(["conditions", i, "yes"], false);
                  form.setFieldValue(
                    ["conditions", i, "data"],
                    conditions?.vehicle[i].data
                  );
                }}
              >
                <label className="selector-item_label justify-content-center">
                  Nope!
                </label>
              </div>
            </div>
            <div className="selecotr-item col-6 pr-0">
              <div
                className={`si-wrap ${item.yes === true && "active"}`}
                onClick={() => {
                  form.setFieldValue(["conditions", i, "yes"], true);
                  window.scrollTo(0, 0);
                }}
              >
                <label className="selector-item_label justify-content-center">
                  Yes
                </label>
              </div>
            </div>
          </div>
          {item.yes && (
            <div className="viewDetails">
              <div className="viewDetail">
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
                    </Form.Item>{" "}
                    <div className="chooseIssues">
                      <ul className="ks-cboxtags  row">
                        {item?.data?.map((radio, j) => (
                          <li className="col-6 ci_col" key={j}>
                            {[
                              "Doesn't Start/Drive",
                              "Engine Noise (Knocking)",
                            ].includes(radio?.name) ? (
                              <>
                                <input
                                  type="checkbox"
                                  id={radio?.uid}
                                  className="d-none"
                                />
                                <label
                                  className="labeltick"
                                  onClick={() => {
                                    Modal.success({
                                      className: "confirm-model",
                                      icon: <BreakDown isLoading={true} />,
                                      footer: null,
                                      closable: true,
                                      title: (
                                        <h6 className="text-center">Uh oh!</h6>
                                      ),
                                      okText: "OK",
                                      content: (
                                        <div className="text-center">
                                          <p>
                                            Currently WhipFlip is not purchasing
                                            vehicles that are running poorly or
                                            fully inoperable. This includes
                                            vehicles that do not start due to
                                            dead/bad batteries, engine seized,
                                            transmission inoperable or severely
                                            malfunctioning, flat tires, etc.
                                            <br />
                                            You will need to fully repair any of
                                            the issues mentioned above before
                                            proceeding forward. We may require
                                            proof of repair or proper running
                                            condition before extending an final
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
                                  <span
                                    className="labeltickspan"
                                    style={{ wordBreak: "break-all" }}
                                  >
                                    {radio?.name}
                                  </span>
                                  {radio.image ? (
                                    <span className="opicon">
                                      <img
                                        src={radio.image}
                                        alt={radio?.name}
                                        title={radio?.name}
                                        width={20}
                                        height={20}
                                      />
                                    </span>
                                  ) : (
                                    <span className="spanicon">
                                      <span className="plus">
                                        <i className="fa-solid fa-plus"></i>
                                      </span>
                                      <span className="checked">
                                        <i className="fa-solid fa-check"></i>
                                      </span>
                                    </span>
                                  )}
                                </label>
                              </>
                            ) : (
                              <Form.Item
                                label={false}
                                name={["conditions", i, "data", j]}
                                className="m-0 "
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
                                            !formRealValues?.conditions?.[i]
                                              .data?.[j].active,
                                          image: radio?.image
                                            ? radio.image
                                            : null,
                                        }
                                      );
                                      await form.validateFields([
                                        ["conditions", i, "data", j],
                                      ]);
                                    }}
                                    checked={
                                      formRealValues?.conditions?.[i].data?.[j]
                                        .active
                                    }
                                    className="d-none"
                                  />
                                  <label
                                    htmlFor={radio?.uid}
                                    className="labeltick"
                                  >
                                    <span
                                      className="labeltickspan"
                                      style={{ wordBreak: "break-all" }}
                                    >
                                      {radio?.name}
                                    </span>
                                    {radio.image ? (
                                      <span className="opicon">
                                        <img
                                          src={radio.image}
                                          alt={radio?.name}
                                          title={radio?.name}
                                          width={20}
                                          height={20}
                                        />
                                      </span>
                                    ) : (
                                      <span className="spanicon">
                                        <span className="plus">
                                          <i className="fa-solid fa-plus"></i>
                                        </span>
                                        <span className="checked">
                                          <i className="fa-solid fa-check"></i>
                                        </span>
                                      </span>
                                    )}
                                  </label>
                                </>
                              </Form.Item>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {!isReview && (
        <div className="offer_block-body">
          <div className="form-group text-center">
            {formRealValues?.conditions[i].yes === true ? (
              <Button
                className="continueBtn"
                style={{
                  borderRadius: "30px",
                }}
                size="large"
                onClick={async () => {
                  next();
                  window.scrollTo(0, 0);
                }}
                disabled={formRealValues?.conditions[i].active === ""}
              >
                Continue
              </Button>
            ) : (
              <Button
                className="continueBtn"
                style={{
                  borderRadius: "30px",
                }}
                size="large"
                onClick={async () => {
                  next();
                  window.scrollTo(0, 0);
                }}
                disabled={formRealValues?.conditions[i].yes === ""}
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default VehicleConditionMob;
