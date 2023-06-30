import { Select, Button, Form, Input, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import InfoIcon from "components/common/infoIcon";
import TrimModal from "./trimModal";
import useVehicleForm from "services/vehicle/function";
import PoweredBy from "components/common/poweredBy";
import { Modal } from "antd";
import { useRetrieveOfferMutation } from "services/util";
import { useDispatch } from "react-redux";
import { setInitialOffer } from "features/offer/offerSlice";
import { useGetOfferByIdMutation } from "services/offer/api";
import { useRef } from "react";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
function InstantOffer({ header, handleShowSideBar, handleCancel }) {
  const [showError, setShowError] = useState(false);
  const [retrieveOffer, { isLoading }] = useRetrieveOfferMutation();
  const [isTrimOpen, setIsTrimOpen] = useState(false);
  const [form] = Form.useForm();
  const {
    onFinish,
    year,
    model,
    make,
    trim,
    setThisOpen,
    isDisable,
    open,
    isLoading: isVehicleLoad,
  } = useVehicleForm(form);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleClose = async () => {
    await setShowError(false);
    retrieve[0].resetFields();
    setIsModalOpen(false);
  };
  const retrieve = Form.useForm();
  const realEmail = Form.useWatch("email", retrieve[0]);
  useEffect(() => {
    setShowError(false);
  }, [realEmail]);
  const dispatch = useDispatch();
  const [getOfferById, { isLoading: getting }] = useGetOfferByIdMutation();
  if (header) {
    return (
      <div className="vehicleDetailNav ">
        <div className="vdnHd">
          <div className="vdnHdIn">
            <span>Enter vehicle details</span>
            <span>for an initial offer.</span>
          </div>
        </div>
        <div className="vdnForm">
          <div className="vdnForm_fields ">
            <Form
              form={form}
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
            >
              {" "}
              <div className="vdn_frm_flds row px-3">
                <div className="col-md-3 p-0 m-0">
                  <Form.Item label={null} className="m-0 w-100  " name="year">
                    <Select
                      className="w-100"
                      size="large"
                      options={year?.values?.data?.map?.((i) => ({
                        value: i.modelyear,
                        label: i.modelyear,
                      }))}
                      suffixIcon={
                        year?.isOpen() && !year?.isDisable() ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      allowClear={false}
                      placeholder="Year"
                      disabled={year?.isDisable()}
                      loading={year?.isDisable()}
                      onChange={year?.onChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-3 p-0 m-0">
                  <Form.Item label={null} className="m-0  w-100" name="make">
                    <Select
                      className="w-100 "
                      size="large"
                      options={make?.values?.data?.map?.((i) => ({
                        value: i.make,
                        label: i.make,
                      }))}
                      suffixIcon={
                        make?.isOpen() && !make?.isDisable() ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      allowClear={false}
                      placeholder="Make"
                      disabled={make?.isDisable()}
                      loading={make?.values?.isFetching}
                      onChange={make?.onChange}
                      open={make?.isOpen()}
                      onClick={() => {
                        make?.isOpen()
                          ? setThisOpen(null)
                          : setThisOpen("make");
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-3 p-0 m-0">
                  <Form.Item label={null} className="m-0 w-100" name="model">
                    <Select
                      className="w-100"
                      size="large"
                      options={model?.values?.data?.map?.((i) => ({
                        value: i.model,
                        label: i.model,
                      }))}
                      suffixIcon={
                        model?.isOpen() && !model?.isDisable() ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      allowClear={false}
                      placeholder="Model"
                      disabled={model?.isDisable()}
                      loading={model?.values?.isFetching}
                      onChange={model?.onChange}
                      open={model?.isOpen()}
                      onClick={() => {
                        model?.isOpen()
                          ? setThisOpen(null)
                          : setThisOpen("model");
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-3 p-0 m-0">
                  <Form.Item label={null} className="m-0 w-100" name="trim">
                    <Select
                      className="w-100"
                      size="large"
                      options={trim?.values?.data?.map?.((i) => ({
                        value: i.vehicle_id,
                        label: i.body,
                      }))}
                      suffixIcon={
                        trim?.isOpen() && !trim?.isDisable() ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      allowClear={false}
                      placeholder="Trim/Series"
                      disabled={trim?.isDisable()}
                      loading={trim?.values?.isFetching}
                      onChange={trim?.onChange}
                      open={trim?.isOpen()}
                      onClick={() => {
                        trim?.isOpen()
                          ? setThisOpen(null)
                          : setThisOpen("trim");
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="form-group row vdn_grp_row">
                <div className="col-lg-12">
                  <Button
                    htmlType="submit"
                    className="btn btn-secondary getOfferBtn nav_getOfferBtn"
                    style={{
                      height: "unset",
                    }}
                    type="text"
                    disabled={isDisable}
                    loading={isVehicleLoad}
                  >
                    <span>Get Instant Offer</span>
                  </Button>
                </div>
              </div>
            </Form>{" "}
          </div>
        </div>{" "}
        <div
          className="hambergerMenu scrollHamberger"
          onClick={handleShowSideBar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="_banner_form"
        className="card card-outline-secondary home-form  "
      >
        <Modal
          title={
            <div className="border-bottom">
              <h6>Retrieve Offer</h6>
            </div>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleClose}
          footer={false}
        >
          <Form
            name="Retrieve"
            form={retrieve[0]}
            onFinish={async ({ email }) => {
              const res = await retrieveOffer(email);
              if (res?.data?.uid) {
                const { data } = await getOfferById(res?.data?.uid);
                await dispatch(setInitialOffer(data));
                handleClose();
              } else {
                setShowError(true);
              }
            }}
            autoComplete="off"
            layout={"vertical"}
            requiredMark={false}
          >
            {" "}
            <Tooltip
              title={
                <div>
                  {" "}
                  No user associated with this offer or offer expired
                  <a> read more</a>
                </div>
              }
              color={"red"}
              key={"red"}
              placement="bottomLeft"
              open={showError}
            >
              <Form.Item
                label="Enter your email address to retrieve the latest offer."
                name={"email"}
                className="m-0 w-100 mb-5"
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
                  className={`w-100 ${
                    showError && " ant-input-affix-wrapper-status-error"
                  }`}
                  placeholder="Enter Here"
                  closeable
                  allowClear
                />
              </Form.Item>
            </Tooltip>
            <div className="d-flex justify-content-end">
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                className="ml-2 w-auto btn-primary-color-only"
                htmlType="submit"
                type="primary"
                loading={isLoading || getting}
                disabled={
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(realEmail)
                }
              >
                Retrieve My Offer
              </Button>
            </div>
          </Form>
        </Modal>
        <TrimModal isTrimOpen={isTrimOpen} setIsTrimOpen={setIsTrimOpen} />
        <div className="get_offer_banner">
          <div className="form_top">
            <PoweredBy />
            <div className="form_head">
              <h2>Get a REAL offer in seconds!</h2>
              <p>Enter your vehicles details:</p>
            </div>
          </div>
          <div className="card-body">
            <Form
              form={form}
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="form-group row">
                <div className="col-lg-12">
                  <Form.Item label={null} className="m-0" name="year">
                    <Select
                      className="w-100"
                      size="large"
                      options={year?.values?.data?.map?.((i) => ({
                        value: i.modelyear,
                        label: i.modelyear,
                      }))}
                      suffixIcon={
                        year?.isOpen() && !year?.isDisable() ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      allowClear={false}
                      placeholder="Year"
                      disabled={year?.isDisable()}
                      loading={year?.isDisable()}
                      onChange={year?.onChange}
                      open={year?.isOpen()}
                      onClick={() => {
                        year?.isOpen()
                          ? setThisOpen(null)
                          : setThisOpen("year");
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <Form.Item label={null} className="m-0" name="make">
                    <Select
                      className="w-100"
                      size="large"
                      options={make?.values?.data?.map?.((i) => ({
                        value: i.make,
                        label: i.make,
                      }))}
                      suffixIcon={
                        make?.isOpen() && !make?.isDisable() ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      allowClear={false}
                      placeholder="Make"
                      disabled={make?.isDisable()}
                      loading={make?.values?.isFetching}
                      onChange={make?.onChange}
                      open={make?.isOpen()}
                      onClick={() => {
                        make?.isOpen()
                          ? setThisOpen(null)
                          : setThisOpen("make");
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <Form.Item label={null} className="m-0" name="model">
                    <Select
                      className="w-100"
                      size="large"
                      options={model?.values?.data?.map?.((i) => ({
                        value: i.model,
                        label: i.model,
                      }))}
                      suffixIcon={
                        model?.isOpen() && !model?.isDisable() ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      allowClear={false}
                      placeholder="Model"
                      disabled={model?.isDisable()}
                      loading={model?.values?.isFetching}
                      onChange={model?.onChange}
                      open={model?.isOpen()}
                      onClick={() => {
                        model?.isOpen()
                          ? setThisOpen(null)
                          : setThisOpen("model");
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <Form.Item
                    label={null}
                    className="m-0"
                    name="trim"
                    id="_form_trim"
                  >
                    <Select
                      className="w-100"
                      size="large"
                      options={trim?.values?.data?.map?.((i) => ({
                        value: i.vehicle_id,
                        label: i.body,
                      }))}
                      suffixIcon={
                        trim?.isOpen() && !trim?.isDisable() ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )
                      }
                      allowClear={false}
                      placeholder="Trim/Series"
                      disabled={trim?.isDisable()}
                      loading={trim?.values?.isFetching}
                      onChange={trim?.onChange}
                      open={trim?.isOpen()}
                      onClick={() => {
                        trim?.isOpen()
                          ? setThisOpen(null)
                          : setThisOpen("trim");
                      }}
                    />
                  </Form.Item>
                  <div className="toKnow">
                    <InfoIcon
                      onClick={() => {
                        setIsTrimOpen(true);
                      }}
                    />
                    <span
                      className="btn p-0 m-0"
                      onClick={() => {
                        setIsTrimOpen(true);
                      }}
                    >
                      What is a Trim?
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group row mb-0">
                <div className="col-lg-12">
                  <Button
                    htmlType="submit"
                    className={handleCancel ? "getOfferBtn p-1" : "getOfferBtn"}
                    style={{
                      height: "unset",
                    }}
                    type="text"
                    disabled={isDisable}
                    loading={isVehicleLoad}
                  >
                    <span>Get Instant Offer</span>
                  </Button>
                  {handleCancel && (
                    <Button
                      htmlType="button"
                      className="getOfferBtn border mt-2 p-1"
                      style={{
                        height: "unset",
                        backgroundColor: "#fff",
                      }}
                      onClick={handleCancel}
                      type="text"
                    >
                      <span>Cancel</span>
                    </Button>
                  )}
                </div>
                <div className="col-lg-12 already_offer text-center">
                  <p>
                    Already have an offer?{" "}
                    <span style={{ cursor: "pointer" }} onClick={showModal}>
                      Retrieve it here
                    </span>
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default InstantOffer;
