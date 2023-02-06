import { Form, Button, Image, Divider } from "antd";
import BreakDown from "components/anim/breakdown";
import { reset } from "features/offer/offerSlice";
import { Modal } from "antd";
import { useRouter } from "node_modules/next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useGetMakesQuery,
  useGetModelsQuery,
  useGetTrimsQuery,
  useGetVehicleByIdQuery,
  useGetYearsQuery,
  vehicle,
} from "services/vehicle/api";
import Link from "next/link";
function useVehicleForm(form) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(null);
  const year = Form.useWatch("year", form);
  const make = Form.useWatch("make", form);
  const model = Form.useWatch("model", form);
  const trim = Form.useWatch("trim", form);
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    setIsLoading(true);
    const { data } = await dispatch(
      vehicle?.endpoints.getVehicleById.initiate(trim)
    );
    setIsLoading(false);
    if (!data.vehicle_id || data.old_vehicle || data.blocked_vehicle) {
      Modal.success({
        className: "confirm-model",
        icon: null,
        footer: null,
        closable: true,
        title: <h6>Vehicle Not Found</h6>,
        okText: "OK",
        content: (
          <div className="text-center">
            <Image
              className="text-center"
              src="/images/not-found.svg"
              preview={false}
            />
            <p className="text-left">
              {`Oh no! It looks like we are having trouble calculating an offer on
              this awesome car. Call (888)349-3189 or click Contact Us below and
              submit some basic vehicle information for us to take a further
              look!`}
            </p>
            <Divider />
            <Link href="/contact-us">
              <Button className="getOfferBtn text-center">Contact Us</Button>
            </Link>
            <Button
              className="tex-center w-100 text-center mt-3"
              onClick={() => {
                form.resetFields();
                Modal.destroyAll();
              }}
            >
              Try another car
            </Button>
          </div>
        ),
        okButtonProps: {
          className: "getOfferBtn",
        },
      });
    } else {
      await dispatch(reset());
      router.push({
        pathname: "/vehicle",
        query: { vehicle_id: trim },
      });
    }
  };
  const formDate = {
    year: {
      values: useGetYearsQuery(),
      isOpen: () => {
        return open == "year";
      },
      isDisable: () => {
        return formDate?.year.values.isFetching;
      },
      onChange: (e) => {
        form.setFieldsValue({
          make: null,
          model: null,
          trim: null,
        });
        setOpen("make");
      },
    },
    make: {
      values: useGetMakesQuery(year, {
        skip: !year,
      }),
      isOpen: () => {
        return open == "make";
      },
      isDisable: () => {
        return formDate?.make.values.isFetching || !year;
      },
      onChange: (e) => {
        form.setFieldsValue({
          model: null,
          trim: null,
        });
        setOpen("model");
      },
    },
    model: {
      values: useGetModelsQuery(
        { make, year },
        {
          skip: !make || !year,
        }
      ),
      isOpen: () => {
        return open == "model";
      },
      isDisable: () => {
        return formDate?.model.values.isFetching || !make;
      },
      onChange: (e) => {
        form.setFieldsValue({
          trim: null,
        });
        setOpen("trim");
      },
    },
    trim: {
      values: useGetTrimsQuery(
        { make, year, model },
        {
          skip: !make || !year || !model,
        }
      ),
      isOpen: () => {
        return open == "trim";
      },
      isDisable: () => {
        return formDate?.trim.values.isFetching || !model;
      },
      onChange: (e) => {
        setOpen(false);
      },
    },
    onFinish,
    setThisOpen: (type) => {
      setOpen(type);
    },
    isDisable: !year || !make || !model || !trim,
    isLoading,
  };

  return formDate;
}

export default useVehicleForm;
