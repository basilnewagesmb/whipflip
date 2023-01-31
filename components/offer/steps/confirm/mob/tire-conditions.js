import Image from "next/image";
import React from "react";
import { Input, Form, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Images } from "services/offer/confirm/function";

function TireConditionsTemp({
  formRealValues,
  next,
  prev,
  form,
  data,
  isReview,
}) {
  console.log(formRealValues);
  return (
    <div className="offer_block noBordBtm offer_block_mobi">
      <div className="ob_hd d-flex justify-content-between">
        <h2
          style={{
            fontSize: "20px",
          }}
        >
          Tire Condition{" "}
        </h2>
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
              <label htmlFor="">How are your tires?</label>
              <Form.Item label={false} name={"tire"} hidden>
                <Input />
              </Form.Item>
              <div className="chooseBlock selectorRow rowSell tireconditions">
                {data?.map((item, i) => (
                  <div
                    className={`sellItemChoose tirecondition tireconditionMobi ${
                      formRealValues?.tire == item.uid && "selected"
                    }`}
                    onClick={async (e) => {
                      await form.setFieldValue("tire", item.uid);
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
                        <Image
                          src={Images()?.tire[item.match_name].src}
                          alt={item?.name}
                          title={item?.name}
                          width={50}
                          height={50}
                        />
                      </span>
                      <span className="bodyTc">
                        <h3>{item?.name}</h3>
                        <span>
                          {Images()?.tire[item.match_name]?.description}
                        </span>
                      </span>
                    </label>
                  </div>
                ))}
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
                onClick={async () => {
                  next();
                  window.scrollTo(0, 0);
                }}
                disabled={!formRealValues?.tire}
              >
                Continue
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TireConditionsTemp;
