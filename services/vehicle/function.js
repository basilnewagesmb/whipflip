import { Form } from "antd";
import React, { useEffect, useState } from "react";
import {
  useGetMakesQuery,
  useGetModelsQuery,
  useGetTrimsQuery,
  useGetYearsQuery,
} from "services/vehicle/api";
function useVehicleForm(form) {
  const year = Form.useWatch("year", form);
  const make = Form.useWatch("make", form);
  const model = Form.useWatch("model", form);
  const trim = Form.useWatch("trim", form);
  //   const { data: years } = useGetYearsQuery();
  //   const { data: makes } = useGetMakesQuery(year, {
  //     skip: !year,
  //   });
  //   const { data: models } = useGetModelsQuery(
  //     { make, year },
  //     {
  //       skip: !make || !year,
  //     }
  //   );
  const { data: trims } = useGetTrimsQuery(
    { make, year, model },
    {
      skip: !make || !year || !model,
    }
  );
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const formDate = {
    year: {
      values: useGetYearsQuery(),
      value: year,
    },
    make: {
      values: useGetMakesQuery(year, {
        skip: !year,
      }),
      value: year,
    },
    model: {
      values: useGetModelsQuery(
        { make, year },
        {
          skip: !make || !year,
        }
      ),
      value: model,
    },
    trim: {
      values: useGetTrimsQuery(
        { make, year, model },
        {
          skip: !make || !year || !model,
        }
      ),
      value: trim,
    },
    onFinish,
  };
  //   useEffect(() => {
  //     setFormData({ year });
  //   }, [year]);

  return formDate;
}

export default useVehicleForm;
