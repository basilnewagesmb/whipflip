import MetaHead from "components/common/metaHead";
import React, { useEffect } from "react";
import { useContactMutation } from "services/util";
import { Form, Input, Button, message } from "antd";
import { useState } from "react";

function Index() {
  const [form] = Form.useForm();
  const realVal = Form.useWatch([], form);
  const [isValid, setIsValid] = useState(false);
  const [contact, { isLoading, isSuccess }] = useContactMutation();
  const onFinish = async (values) => {
    const res = await contact(values);
  };
  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      message.success("Submitted");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (realVal) {
      setIsValid(Object?.values(realVal).filter((item) => item).length == 5);
    }
  }, [realVal]);
  return (
    <>
      <MetaHead title="Contact us" />
      <div className="page-header min-height-none d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <h1>
                Questions? <br /> {`We'd Love to Hear from You!`}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="primary-bg pb-5">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 my-3">
              <div className="card border-0">
                <div className="card-body p-4">
                  <Form
                    form={form}
                    layout={"vertical"}
                    name="Contact"
                    onFinish={onFinish}
                    autoComplete="off"
                    requiredMark={false}
                  >
                    {" "}
                    <div className="form-row">
                      <div className="form-group WFinput-text col-sm-6">
                        <Form.Item
                          label="First Name"
                          name={"fastName"}
                          className="m-0 w-100"
                          rules={[
                            {
                              required: true,
                              message: "Please select your first name!",
                            },
                            {
                              whitespace: true,
                              message: "Please select your first name!",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            className="w-100 rounded"
                            placeholder="Your First name"
                          />
                        </Form.Item>
                      </div>
                      <div className="form-group WFinput-text col-sm-6">
                        <Form.Item
                          label="Last Name"
                          name={"lastName"}
                          className="m-0 w-100"
                          rules={[
                            {
                              required: true,
                              message: "Please select your Last name!",
                            },
                            {
                              whitespace: true,
                              message: "Please select your Last name!",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            className="w-100 rounded"
                            placeholder="Your Last name"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group WFinput-text col-sm-6">
                        <Form.Item
                          label="Email"
                          name={"email"}
                          className="m-0 w-100"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Email!",
                            },
                            {
                              whitespace: true,
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
                        >
                          <Input
                            size="large"
                            className="w-100 rounded"
                            placeholder="Your Email"
                          />
                        </Form.Item>
                      </div>
                      <div className="form-group WFinput-text col-sm-6">
                        <Form.Item
                          label="Phone Number"
                          name={"phone"}
                          className="m-0 w-100 border-none"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                            {
                              whitespace: true,
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
                            className="w-100  rounded"
                            placeholder="(000) 000-000"
                          />
                        </Form.Item>{" "}
                      </div>
                    </div>
                    <div className="form-group WFinput-text">
                      <Form.Item
                        label="Message"
                        name={"message"}
                        className="m-0 w-100"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Message!",
                          },
                          {
                            whitespace: true,
                            message: "Description is required!",
                          },
                        ]}
                      >
                        <Input.TextArea allowClear rows={"3"} maxLength={200} />
                      </Form.Item>
                    </div>
                    <Button
                      htmlType="submit"
                      className={`h-auto py-3  mb-2 w-100 ${
                        isValid && "confirm_offer_btn"
                      }`}
                      loading={isLoading}
                      disabled={!isValid}
                    >
                      Submit
                    </Button>
                  </Form>

                  <p className="text-xs text-muted">
                    {`By clicking "Next," you acknowledge that your data will be
                    handled in accordance with Airtable's Privacy Policy, and
                    you authorize Airtable to send you updates about Airtable
                    products, services, and events.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6  my-3">
              <div
                className="gray-bg mb-5 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#ccc",
                  borderRadius: "4px",
                  minHeight: "200px",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.73157469470343!2d-75.54905115808539!3d39.74627254936837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd407160f4ef%3A0x8548ae47d587e42d!2s1007%20N%20Orange%20St%204th%20floor%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sin!4v1672918572006!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div className="text-white">
                <p className="ic_location pl-5">
                  <a
                    href="https://goo.gl/maps/855tTpmtpuC9wJiT6"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    1007 N. Orange Street <br />
                    4th Floor <br />
                    Wilmington, DE 19801{" "}
                  </a>
                </p>
                <p className="ic_phone pl-5">
                  <a
                    href="tel:+18883493189"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    (888) 349-3189
                  </a>
                </p>
                <p className="ic_email pl-5">
                  <a
                    href="mailto:support@whipflip.com"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    support@whipflip.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
