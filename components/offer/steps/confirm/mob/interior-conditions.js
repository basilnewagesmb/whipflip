import Image from "next/image";
import React from "react";
import { Input, Form, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Images } from "services/offer/confirm/function";
function InteriorConditions({
  formRealValues,
  next,
  prev,
  form,
  data,
  isReview,
}) {
  return (
    <div className="offer_block noBordBtm offer_block_mobi">
      <div className="ob_hd d-flex justify-content-between">
        {!isReview && (
          <div className="d-flex justify-content-center align-items-center">
            <Button
              className=" d-flex justify-content-center align-items-center"
              shape="circle"
              icon={<LeftOutlined />}
              onClick={prev}
            />
          </div>
        )}
      </div>
      <div className="offer_block-body">
        <div autoComplete="off" className="form" role="form">
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
                    message: "Please select one!",
                  },
                ]}
                className="m-0 border-0 p-0 height-hide"
              >
                <Input
                  style={{
                    height: 0,
                    opacity: 0,
                    overFlow: "hidden",
                    display: "none",
                  }}
                />
              </Form.Item>
              <div className="chooseBlock selectorRow rowSell tireconditions">
                {data?.map((item, i) => (
                  <div
                    className={`sellItemChoose tirecondition tireconditionMobi ${
                      formRealValues?.cosmetic?.interior == item.uid &&
                      "selected"
                    }`}
                    onClick={async (e) => {
                      await form.setFieldValue(
                        ["cosmetic", "interior"],
                        item.uid
                      );
                      await form.validateFields([["cosmetic", "interior"]]);
                      // next();
                    }}
                    key={i}
                  >
                    <input
                      type="radio"
                      id={item.uid}
                      name="tc"
                      className="selector-item_radio"
                    />
                    <label
                      htmlFor={item.uid}
                      className="selector-item_label labelflexCenter tclabel tclabelMobi"
                    >
                      <span>
                        {Images()?.cosmetic[item.match_name].src && (
                          <span>
                            <Image
                              src={Images()?.cosmetic[item.match_name].src}
                              alt={item?.name}
                              title={item?.name}
                              width={50}
                              height={50}
                            />
                          </span>
                        )}
                      </span>
                      <span className="bodyTc">
                        <h3>{item?.name}</h3>
                        <span>
                          {Images()?.cosmetic[item.match_name]?.description}
                        </span>
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
  );
}

export default InteriorConditions;
