import React from "react";
import Link from "next/link";
import { Button, Form, Input, message } from "antd";
import { useSubscribeMutation } from "services/util";

function Subscribe() {
  const [subscribe, { isLoading }] = useSubscribeMutation();
  const [form] = Form.useForm();
  return (
    <div className="page-header blog d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12 page-title">
            <p className="pt-4">Blog</p>
            <h1>WhipFlip News</h1>
            <p>
              Subscribe and get free tips and advice on selling or buying a car.
            </p>
            <div className="pt-4">
              <Form
                name="subscribe"
                form={form}
                className="form-row justify-content-start"
                size="large"
                onFinish={async (data) => {
                  const res = await subscribe(data);
                  console.log(res);
                  if (res?.data) {
                    form.resetFields();
                    message.success("Subscribed Successfully");
                  } else {
                    message.error("Something went wrong. Please try again.");
                  }
                }}
              >
                <div className=" col-9 col-sm-6 col-md-5 col-lg-4">
                  <Form.Item
                    label={false}
                    name={"email"}
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
                  >
                    <Input
                      size="large"
                      className="w-100"
                      placeholder="Enter Here"
                    />
                  </Form.Item>
                </div>
                <div className="col-3 col-lg-2">
                  <Form.Item className="m-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn btn-primary btn-lg w-100 btn-yellow"
                      loading={isLoading}
                    >
                      <span className="d-none d-sm-inline">Subscribe</span>
                      <i className="bi bi-search d-sm-none"></i>
                    </Button>
                  </Form.Item>
                </div>
                <div className="col-12 text-xs mt-2 text-light">
                  We care about your <Link href="/privacy-policy">privacy</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
