import { Form } from "antd";
import { useRouter } from "node_modules/next/router";
import React, { useEffect, useState } from "react";
import {
  useGetMakesQuery,
  useGetModelsQuery,
  useGetTrimsQuery,
  useGetYearsQuery,
} from "services/vehicle/api";
function useVehicleForm(form) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const year = Form.useWatch("year", form);
  const make = Form.useWatch("make", form);
  const model = Form.useWatch("model", form);
  const trim = Form.useWatch("trim", form);

  const onFinish = (values) => {
    router.push({
      pathname: "/offer/[id]",
      query: { id: trim },
    });
  };
  const formDate = {
    year: {
      values: useGetYearsQuery(),
      isOpen: null,
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
  };

  return formDate;
}

export default useVehicleForm;
