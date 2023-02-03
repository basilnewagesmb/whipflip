import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";

function SeeInitOffer({ form, data, goTo }) {
  const readiness_uid = Form.useWatch("readiness_uid", form);
  const listClick = (e) => {
    form.setFieldsValue({
      readiness_uid: e,
    });
  };
  return (
    <div className="offer_block noBordBtm">
      <div className="offer_block-body">
        <div autoComplete="off" className="form" role="form">
          <div className="form-group row ob_frm_row">
            <div className="col-lg-6 p-0">
              <Form.Item
                label="Zip Code"
                name={["user", "zip"]}
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
                tooltip={{
                  title:
                    "Do we cover your area? Enter your zip code to find out.",
                  icon: <InfoCircleOutlined />,
                }}
              >
                <Input
                  size="large"
                  className="w-100"
                  placeholder="Enter Here"
                  maxLength={5}
                />
              </Form.Item>
            </div>
          </div>
          <div className="form-group row ob_frm_row">
            <div className="col-lg-6 p-0">
              <Form.Item
                label="Email"
                name={["user", "email"]}
                className="m-0 w-100"
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
                        return Promise.reject("Invalid email");
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
                tooltip={{
                  title:
                    "We send a copy of your quote to pick up right where you left off. We DO NOT distribute your info to 3rd parties",
                  icon: <InfoCircleOutlined />,
                }}
              >
                <Input
                  size="large"
                  className="w-100"
                  placeholder="Enter Here"
                />
              </Form.Item>
            </div>
          </div>
          <div className="form-group row ob_frm_row">
            <div className="col-lg-12 p-0">
              <Form.Item
                label="Phone Number (We won’t bug you!)"
                name={["user", "phone"]}
                className="m-0 w-100"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  {
                    validator: (rule, value = "") => {
                      if (value.trim().length != 0) {
                        if (/^[0-9]{10}$/.test(value)) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Invalid phone number");
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  size="large"
                  className="w-100"
                  placeholder="Enter Here"
                />
              </Form.Item>
              <div className="iptWrapperSio">
                <span className="helpin mobHlp">
                  <span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.3335 10.3359H7.66683V6.33594H6.3335V10.3359ZM7.00016 5.0026C7.18905 5.0026 7.3475 4.9386 7.4755 4.8106C7.60305 4.68305 7.66683 4.52483 7.66683 4.33594C7.66683 4.14705 7.60305 3.9886 7.4755 3.8606C7.3475 3.73305 7.18905 3.66927 7.00016 3.66927C6.81127 3.66927 6.65305 3.73305 6.5255 3.8606C6.3975 3.9886 6.3335 4.14705 6.3335 4.33594C6.3335 4.52483 6.3975 4.68305 6.5255 4.8106C6.65305 4.9386 6.81127 5.0026 7.00016 5.0026ZM7.00016 13.6693C6.07794 13.6693 5.21127 13.4942 4.40016 13.1439C3.58905 12.7942 2.8835 12.3193 2.2835 11.7193C1.6835 11.1193 1.20861 10.4137 0.858829 9.6026C0.508607 8.79149 0.333496 7.92483 0.333496 7.0026C0.333496 6.08038 0.508607 5.21372 0.858829 4.4026C1.20861 3.59149 1.6835 2.88594 2.2835 2.28594C2.8835 1.68594 3.58905 1.21083 4.40016 0.860604C5.21127 0.510826 6.07794 0.335938 7.00016 0.335938C7.92239 0.335938 8.78905 0.510826 9.60016 0.860604C10.4113 1.21083 11.1168 1.68594 11.7168 2.28594C12.3168 2.88594 12.7917 3.59149 13.1415 4.4026C13.4917 5.21372 13.6668 6.08038 13.6668 7.0026C13.6668 7.92483 13.4917 8.79149 13.1415 9.6026C12.7917 10.4137 12.3168 11.1193 11.7168 11.7193C11.1168 12.3193 10.4113 12.7942 9.60016 13.1439C8.78905 13.4942 7.92239 13.6693 7.00016 13.6693ZM7.00016 12.3359C8.47794 12.3359 9.73639 11.8166 10.7755 10.7779C11.8142 9.73883 12.3335 8.48038 12.3335 7.0026C12.3335 5.52483 11.8142 4.26638 10.7755 3.22727C9.73639 2.1886 8.47794 1.66927 7.00016 1.66927C5.52239 1.66927 4.26416 2.1886 3.2255 3.22727C2.18638 4.26638 1.66683 5.52483 1.66683 7.0026C1.66683 8.48038 2.18638 9.73883 3.2255 10.7779C4.26416 11.8166 5.52239 12.3359 7.00016 12.3359Z"
                        fill="#8D8C9D"
                      />
                    </svg>
                  </span>
                  <span>We might need more vehicle details from you.</span>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group row ob_frm_row">
            <Form.Item
              label={false}
              name="readiness_uid"
              className="m-0 w-100 "
              rules={[
                {
                  required: true,
                  message: "Please select your Choice!",
                },
              ]}
            >
              <div className="col-lg-12 p-0">
                <label htmlFor="" className="whencarsell">
                  When are you selling your car?
                </label>
                <div className="chooseBlock selector row selectorRow rowSell">
                  <div className="sellItemChoose">
                    <label
                      className={`selector-item_label labelflexCenter labelforSellCar ${
                        readiness_uid == data?.readiness[0].uid && " checked"
                      }`}
                      onClick={() => listClick(data?.readiness[0].uid)}
                    >
                      <span>
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6001 0.851562V3.35667C13.6001 3.71754 13.3166 4.00121 12.9556 4.00121H10.3774C10.0164 4.00121 9.73291 3.71754 9.73291 3.35667V0.851562H13.6001Z"
                            fill="#D1E0EF"
                          />
                          <path
                            d="M18.308 6.82904C18.1638 6.82904 18.0197 6.7812 17.9008 6.68436L15.8922 5.04718C15.7512 4.93187 15.6651 4.76201 15.6555 4.58006C15.6468 4.39828 15.7148 4.2207 15.8439 4.09163L16.8642 3.07129C17.5948 2.34065 18.8688 2.34116 19.5984 3.07079V3.07129H19.5989C19.964 3.43636 20.1649 3.92177 20.1649 4.4384C20.1649 4.95453 19.9635 5.44044 19.5984 5.80551L18.7637 6.64021C18.6385 6.76543 18.4735 6.82904 18.308 6.82904Z"
                            fill="#D1E0EF"
                          />
                          <path
                            d="M5.02486 6.82852C4.85936 6.82852 4.69437 6.7649 4.56915 6.63969L3.73445 5.80499C3.36938 5.43992 3.16797 4.954 3.16797 4.43804C3.16797 3.92124 3.36938 3.43533 3.73445 3.07026C4.46274 2.34197 5.73804 2.34013 6.46867 3.07093L7.48901 4.0911C7.61809 4.22018 7.68607 4.39776 7.67717 4.57954C7.66777 4.76148 7.5815 4.93135 7.44051 5.04666L5.43205 6.68383C5.31322 6.78068 5.16904 6.82852 5.02486 6.82852Z"
                            fill="#D1E0EF"
                          />
                          <path
                            d="M11.6665 2.625C6.32982 2.625 1.99854 6.95628 1.99854 12.293C1.99854 17.6297 6.32982 22.0039 11.6665 22.0039C17.0032 22.0039 21.3345 17.6297 21.3345 12.293C21.3345 6.95628 17.0032 2.625 11.6665 2.625Z"
                            fill="#4381C0"
                          />
                          <path
                            d="M18.1118 12.2891C18.1118 15.8469 15.2243 18.7344 11.6665 18.7344C8.10866 18.7344 5.22119 15.8469 5.22119 12.2891C5.22119 8.73122 8.10866 5.84375 11.6665 5.84375C15.2243 5.84375 18.1118 8.73122 18.1118 12.2891Z"
                            fill="#D1E0EF"
                          />
                          <path
                            d="M14.8892 0.644531C14.8892 1.0054 14.6057 1.28906 14.2446 1.28906H9.08838C8.72734 1.28906 8.44385 1.0054 8.44385 0.644531C8.44385 0.283493 8.72734 0 9.08838 0H14.2446C14.6057 0 14.8892 0.283493 14.8892 0.644531Z"
                            fill="#4381C0"
                          />
                          <path
                            d="M14.8892 12.2852C14.8892 12.646 14.6057 12.9297 14.2446 12.9297H11.6665C11.3055 12.9297 11.022 12.646 11.022 12.2852V9.70703C11.022 9.34599 11.3055 9.0625 11.6665 9.0625C12.0275 9.0625 12.311 9.34599 12.311 9.70703V11.6406H14.2446C14.6057 11.6406 14.8892 11.9241 14.8892 12.2852Z"
                            fill="#4381C0"
                          />
                        </svg>
                      </span>
                      <span>ASAP!</span>
                    </label>
                  </div>
                  <div className="sellItemChoose">
                    <label
                      className={`selector-item_label labelflexCenter labelforSellCar ${
                        readiness_uid == data?.readiness[1].uid && " checked"
                      }`}
                      onClick={() => listClick(data?.readiness[1].uid)}
                    >
                      <span>
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.8403 4.125H18.5625C18.942 4.125 19.25 3.817 19.25 3.4375V0.6875C19.25 0.307656 18.942 0 18.5625 0H3.4375C3.05766 0 2.75 0.308 2.75 0.6875V3.4375C2.75 3.817 3.05766 4.125 3.4375 4.125H4.15972C4.39484 6.41094 5.77569 7.84816 6.90491 9.02309C7.62644 9.77419 8.25 10.4225 8.25 11C8.25 11.5775 7.62644 12.2258 6.90491 12.9769C5.77569 14.1518 4.3945 15.5891 4.15972 17.875H3.4375C3.05766 17.875 2.75 18.183 2.75 18.5625V21.3125C2.75 21.692 3.05766 22 3.4375 22H18.5625C18.942 22 19.25 21.692 19.25 21.3125V18.5625C19.25 18.183 18.942 17.875 18.5625 17.875H17.8441C17.6124 15.3546 16.1305 13.8937 15.0243 12.803C14.3124 12.101 13.75 11.5466 13.75 11C13.75 10.4225 14.3732 9.77419 15.0951 9.02309C16.2243 7.84816 17.6055 6.41094 17.8403 4.125Z"
                            fill="#D1E0EF"
                          />
                          <path
                            d="M18.5625 0H3.4375C3.05766 0 2.75 0.308 2.75 0.6875V3.4375C2.75 3.817 3.05766 4.125 3.4375 4.125H18.5625C18.942 4.125 19.25 3.817 19.25 3.4375V0.6875C19.25 0.308 18.942 0 18.5625 0Z"
                            fill="#4381C0"
                          />
                          <path
                            d="M18.5625 17.875H3.4375C3.05766 17.875 2.75 18.183 2.75 18.5625V21.3125C2.75 21.692 3.05766 22 3.4375 22H18.5625C18.942 22 19.25 21.692 19.25 21.3125V18.5625C19.25 18.183 18.942 17.875 18.5625 17.875Z"
                            fill="#4381C0"
                          />
                        </svg>
                      </span>
                      <span>A FEW WEEKS</span>
                    </label>
                  </div>
                </div>
                <div className="chooseFuture">
                  <div
                    className={`selector-item_label labelflexCenter labelforSellCar ${
                      readiness_uid == data?.readiness[2].uid && " checked"
                    }`}
                    onClick={() => listClick(data?.readiness[2].uid)}
                  >
                    IN THE FUTURE
                  </div>
                </div>
              </div>{" "}
            </Form.Item>{" "}
            <div className="initial_order_btn mt-30">
              <Button
                htmlType="submit"
                className="initofferBtn"
                style={{
                  height: "unset",
                }}
                type="text"
                // disabled={isDisable}
              >
                <span>Get My Initial Offer</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeInitOffer;
