import React from "react";
import Image from "next/image";
import { Form } from "antd";
function Transmission({ form, next }) {
  const transmission = Form.useWatch("transmission", form);
  const listClick = async (e) => {
    await form.setFieldsValue({
      transmission: e,
    });
    //next();
  };
  return (
    <Form.Item label={false} name="transmission" className="m-0 w-100">
      <div className="offer_block-body">
        <div autoComplete="off" className="form" role="form">
          <div className="form-group row ob_frm_row">
            <div className="col-lg-12 p-0">
              <label htmlFor="">Transmission</label>
              <div className="chooseBlock selector row selectorRow">
                <div className="selecotr-item chooseItem col-6 p-0">
                  <label
                    htmlFor="radio1"
                    className={`min-140 selector-item_label flex-selector d-flex justify-content-center align-items-center ${
                      transmission == "automatic" && " checked"
                    }`}
                    onClick={() => listClick("automatic")}
                  >
                    <span>
                      <Image
                        src="/images/auto.svg"
                        alt="Automatic"
                        title="Automatic"
                        width={50}
                        height={50}
                      />
                    </span>
                    <span>Automatic</span>
                  </label>
                </div>
                <div className="selecotr-item chooseItem col-6 pr-0">
                  <label
                    htmlFor="radio2"
                    className={`min-140 selector-item_label flex-selector d-flex justify-content-center align-items-center ${
                      transmission == "manual" && " checked"
                    }`}
                    onClick={() => listClick("manual")}
                  >
                    <span>
                      <Image
                        src="/images/manual.svg"
                        alt="manual"
                        title="manual"
                        width={50}
                        height={50}
                      />
                    </span>
                    <span className="transname">
                      Manual <span>(i.e. Stick Shift)</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form.Item>
  );
}

export default Transmission;
