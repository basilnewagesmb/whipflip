import Image from "next/image";
import { Select, Button, Form } from "antd";
import React, { useState } from "react";
import InfoIcon from "components/common/infoIcon";
import TrimModal from "./trimModal";
import useVehicleForm from "services/vehicle/function";
import PoweredBy from "components/common/poweredBy";
function InstantOffer({ header, handleShowSideBar, handleCancel }) {
  const [isTrimOpen, setIsTrimOpen] = useState(false);
  const [form] = Form.useForm();
  const { onFinish, year, model, make, trim, setThisOpen, isDisable } =
    useVehicleForm(form);
  if (header) {
    return (
      <div className="vehicleDetailNav ">
        <div className="vdnHd">
          <div className="vdnHdIn">
            <span>Enter vehicle details</span>
            <span>for an instant offer.</span>
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
                      allowClear
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
                      allowClear
                      placeholder="Make"
                      disabled={make?.isDisable()}
                      loading={make?.values?.isFetching}
                      onChange={make?.onChange}
                      open={make?.isOpen()}
                      onClick={() => {
                        !make?.isOpen() && setThisOpen("make");
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
                      allowClear
                      placeholder="Model"
                      disabled={model?.isDisable()}
                      loading={model?.values?.isFetching}
                      onChange={model?.onChange}
                      open={model?.isOpen()}
                      onClick={() => {
                        !model?.isOpen() && setThisOpen("model");
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
                      allowClear
                      placeholder="Trim/Series"
                      disabled={trim?.isDisable()}
                      loading={trim?.values?.isFetching}
                      onChange={trim?.onChange}
                      open={trim?.isOpen()}
                      onClick={() => {
                        !trim?.isOpen() && setThisOpen("trim");
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
      <div className="card card-outline-secondary home-form  ">
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
                      allowClear
                      placeholder="Year"
                      disabled={year?.isDisable()}
                      loading={year?.isDisable()}
                      onChange={year?.onChange}
                      open={year?.isOpen()}
                      onClick={() => {
                        !year?.isOpen() && setThisOpen("year");
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
                      allowClear
                      placeholder="Make"
                      disabled={make?.isDisable()}
                      loading={make?.values?.isFetching}
                      onChange={make?.onChange}
                      open={make?.isOpen()}
                      onClick={() => {
                        !make?.isOpen() && setThisOpen("make");
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
                      allowClear
                      placeholder="Model"
                      disabled={model?.isDisable()}
                      loading={model?.values?.isFetching}
                      onChange={model?.onChange}
                      open={model?.isOpen()}
                      onClick={() => {
                        !model?.isOpen() && setThisOpen("model");
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <Form.Item label={null} className="m-0" name="trim">
                    <Select
                      className="w-100"
                      size="large"
                      options={trim?.values?.data?.map?.((i) => ({
                        value: i.vehicle_id,
                        label: i.body,
                      }))}
                      allowClear
                      placeholder="Trim/Series"
                      disabled={trim?.isDisable()}
                      loading={trim?.values?.isFetching}
                      onChange={trim?.onChange}
                      open={trim?.isOpen()}
                      onClick={() => {
                        !trim?.isOpen() && setThisOpen("trim");
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
                    Already have an offer? <span>Retrieve it here</span>
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
