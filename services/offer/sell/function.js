import { Form } from "antd";
import { useEffect, useState } from "react";
import {
  usePlaceSearchQuery,
  useStatesQuery,
  useValidateZipQuery,
} from "services/util";
import debounce from "utils/debounce";
import services from "utils/services";
function useSellFuc(data) {
  const [state, setState] = useState({ isAccept: false });
  const [form] = Form.useForm();
  const setAccept = () => {
    setState((prev) => ({
      ...prev,
      isAccept: true,
    }));
  };
  const formData = {
    form,
    autoComplete: "off",
    requiredMark: false,
    scrollToFirstError: true,
    layout: "vertical",
    name: "Sell",
    size: "large",
    onFinish: (data) => {
      console.log(data);
    },
    onFinishFailed: (errorInfo) => {
      console.log("Failed:", errorInfo);
    },
    scrollToFirstError: {
      behavior: "smooth",
      block: "center",
      inline: "center",
    },
  };
  const formRealData = Form.useWatch([], form);

  const { data: placeResult, isFetching: placeFetching } = usePlaceSearchQuery(
    formRealData?.street_address,
    {
      skip: !formRealData?.street_address,
    }
  );
  const { data: validateStatus } = useValidateZipQuery(formRealData?.zip, {
    skip: !formRealData?.zip,
  });
  console.log(validateStatus);
  const { data: states } = useStatesQuery();
  console.log(formRealData);
  useEffect(() => {
    services.loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      () => {}
    );
  }, []);
  const autoComplete = {
    onSelect: (location, d) => {
      const geocoder = new google.maps.Geocoder();
      geocoder
        .geocode({ placeId: d.place_id, country: "us" })
        .then(({ results }) => {
          console.log(results);
          for (var i = 0; i < results.length; i++) {
            const { street_address, postal_code, city, state } = results[
              i
            ].address_components
              .reverse()
              .map((c) => {
                return { [getTypeName(c.types[0])]: c };
              })
              .reduce((o, c) => {
                return { ...o, ...c };
              }, {});
            form.setFieldsValue({
              street_address: street_address?.long_name || "",
              zip: postal_code?.long_name || "",
              city: city?.long_name || "",
              state: state?.short_name || "",
            });
          }
        })
        .catch((e) => console.log(e));
    },
    onSearch: (query) => {
      debounce(() => {
        form.setFieldsValue({
          street_address: query,
        });
      }, 200);
    },
    loading: placeFetching,
    options:
      placeResult?.predictions?.map((item) => ({
        value: item.description,
        ...item,
      })) || [],
  };

  const getTypeName = (type) => {
    switch (type) {
      case "administrative_area_level_1":
        return "state";
      case "administrative_area_level_2":
        return "city";
      case "country":
        return "country";
      case "administrative_area_level_3":
        return "city";
      case "locality":
        return "city";
      case "sublocality_level_1":
        return "street_address";
      case "route":
        return "street_address";
      default:
        return type;
    }
  };
  return { ...state, data, setAccept, formData, autoComplete, states };
}

export default useSellFuc;
