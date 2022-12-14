import Image from "next/image";
import { Select, Button, Form } from "antd";
import React, { useState } from "react";
import InfoIcon from "components/common/infoIcon";
import TrimModal from "./trimModal";
import {
  useGetMakesQuery,
  useGetModelsQuery,
  useGetTrimsQuery,
  useGetYearsQuery,
} from "services/vehicle/api";
import useVehicleForm from "services/vehicle/function";

function InstantOffer() {
  const [isTrimOpen, setIsTrimOpen] = useState(false);
  const [form] = Form.useForm();
  const { onFinish, year, model, make, trim } = useVehicleForm(form);
  console.log(year, model, make, trim);
  return (
    <div className="card card-outline-secondary home-form">
      <TrimModal isTrimOpen={isTrimOpen} setIsTrimOpen={setIsTrimOpen} />
      <div className="get_offer_banner">
        <div className="form_top">
          <div className="poweredBy">
            <Image
              src="/images/jd.svg"
              alt="poweredBy"
              title="poweredBy"
              width={180}
              height={20}
            />
          </div>
          <div className="form_head">
            <h2>Get a REAL offer in seconds!</h2>
            <p>Enter your vehicles details:</p>
          </div>
        </div>
        <div className="card-body">
          <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
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
                    placeholder="Model"
                  />
                </Form.Item>
                <div
                  className="toKnow"
                  onClick={() => {
                    setIsTrimOpen(true);
                  }}
                >
                  <InfoIcon />
                  <span className="btn p-0 m-0">What is a Trim?</span>
                </div>
              </div>
            </div>
            <div className="form-group row mb-0">
              <div className="col-lg-12">
                <Button
                  htmlType="submit"
                  className="getOfferBtn"
                  style={{
                    height: "unset",
                  }}
                  type="text"
                  disabled={false}
                >
                  <span>Get Instant Offer</span>
                </Button>
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

export default InstantOffer;
