import { Form, InputNumber } from "antd";
import React from "react";
import useInitialForm from "services/offer/initial/function";

function Milage({ carouselRef, form, data, next, goTo }) {
  const { mileageOnblur, mileage } = useInitialForm({ form, data, goTo });
  return (
    <div className="offer_block-body ">
      <div className="form">
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0">
            <Form.Item
              label="Mileage"
              name="mileage"
              className="m-0 w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your mileage!",
                },
              ]}
            >
              <InputNumber
                size="large"
                className="w-100"
                placeholder="Enter Mileage"
                min={0}
                maxLength={6}
                onBlur={mileageOnblur}
                inputMode="numeric"
              />
            </Form.Item>
          </div>
        </div>
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0 text-center">
            <button
              className="continueBtn"
              onClick={() => {
                next();
              }}
              type="button"
              disabled={!mileage}
            >
              Continue
              <span>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 6.8151L0 1.8151L1.16667 0.648438L5 4.48177L8.83333 0.648438L10 1.8151L5 6.8151Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Milage;
