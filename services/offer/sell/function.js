import { Form, Modal, message } from "antd";
import BreakDown from "components/anim/breakdown";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  usePlaceSearchQuery,
  useSlotsQuery,
  useStatesQuery,
  useValidateZipQuery,
  useZipSearchQuery,
} from "services/util";
import debounce from "utils/debounce";
import services from "utils/services";
import moment from "moment";
import { useAppointmentOfferMutation } from "../api";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { reset } from "features/offer/offerSlice";

function useSellFuc(data) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [state, setState] = useState({
    isAccept: false,
    isRulesOpen: false,
    isZibFetch: false,
  });
  const [form] = Form.useForm();
  const setAccept = () => {
    setState((prev) => ({
      ...prev,
      isAccept: true,
    }));
  };
  const closeRuleModal = () => {
    setState((prev) => ({
      ...prev,
      isRulesOpen: false,
    }));
  };
  const triggerFetch = (s) => {
    setState((prev) => ({
      ...prev,
      isZibFetch: s,
    }));
  };
  const formRealData = Form.useWatch([], form);

  const { data: placeResult, isFetching: placeFetching } = usePlaceSearchQuery(
    formRealData?.street_address,
    {
      skip: !formRealData?.street_address,
    }
  );
  const { data: zipResult, isFetching: zipFetching } = useZipSearchQuery(
    formRealData?.latLng,
    {
      skip: !formRealData?.latLng,
    }
  );
  useEffect(() => {
    form.setFieldsValue({
      zip:
        zipResult?.results[0]?.address_components.find(
          (item) => item.types[0] == "postal_code"
        )?.short_name || "",
    });
  }, [zipResult]);
  const { data: zipStatus, isFetching: zipValidating } = useValidateZipQuery(
    { zip: formRealData?.zip, isZibFetch: state?.isZibFetch },
    {
      skip: !state?.isZibFetch,
    }
  );
  useEffect(() => {
    if (zipStatus == false) {
      showNotValidZip();
    }
  }, [zipStatus]);
  useEffect(() => {
    form.setFieldsValue({
      appointment_time: null,
    });
  }, [formRealData?.zip, formRealData?.appointment_date]);

  const { data: states } = useStatesQuery();
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
          for (var i = 0; i < results.length; i++) {
            const converted = results[i].address_components
              .reverse()
              .map((c) => {
                return { [getTypeName(c.types[0])]: c };
              })
              .reduce((o, c) => {
                return { ...o, ...c };
              }, {});
            const { street_address, street_number, postal_code, city, state } =
              converted;
            postal_code?.long_name && triggerFetch(true);
            console.log(converted);
            form.setFieldsValue({
              street_address:
                (street_number?.long_name || "") +
                " " +
                (street_address?.long_name || city?.long_name || ""),
              zip: postal_code?.long_name || "",
              city: city?.long_name || "",
              state: state?.short_name || "",
              latLng: `${results?.[0].geometry.location.lat()},${results?.[0].geometry.location.lng()}`,
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
      case "street_number":
        return "street_number";
      default:
        return type;
    }
  };
  console.log(formRealData);
  useEffect(() => {
    triggerFetch(true)
  }, [formRealData?.zip]);

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
      setState((prev) => ({
        ...prev,
        isRulesOpen: true,
      }));
    },
    onFinishFailed: (errorInfo) => {
      console.log("Failed:", errorInfo);
    },
    scrollToFirstError: {
      behavior: "smooth",
      block: "center",
      inline: "center",
    },
    disabled: zipValidating,
    formRealData,
  };
  const showNotValidZip = () => {
    Modal.success({
      className: "confirm-model",
      icon: <BreakDown isLoading={true} />,
      footer: null,
      closable: true,
      title: <h6 className="text-center">Uh oh!</h6>,
      okText: "OK",
      content: (
        <div className="text-center">
          <p>
            Out of Service Area - But we'll be there soon!
            <br />
            For further queries, <Link href={"/contact-us"}>
              contact us.
            </Link>{" "}
            We apologize for any inconvenience.
          </p>
        </div>
      ),
      okButtonProps: {
        className: "getOfferBtn",
      },
    });
  };
  const { data: slots } = useSlotsQuery(
    {
      zip: formRealData?.zip,
      date: moment(formRealData?.appointment_date?.toString()).format(
        "YYYY-MM-DD"
      ),
    },
    {
      skip: !formRealData?.zip || !formRealData?.appointment_date,
    }
  );
  const [appointmentOffer, { data: successData }] =
    useAppointmentOfferMutation();
  const submitAppointment = async () => {
    setIsLoading(true);
    closeRuleModal();
    let postData = {
      ...formRealData,
      uid: data.uid,
      is_sole_owner: formRealData.isSoleOwner == "double" ? true : false,
      appt_created_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      charity: "",
    };
    const res = await appointmentOffer(postData);
    if (res?.data?.uid) {
      dispatch(reset());
      push(`/prospect/${res?.data?.uid}/appointment`);
    } else {
      setIsLoading(false);
      message.error("Something went wrong");
    }
  };
  return {
    ...state,
    data,
    setAccept,
    formData,
    autoComplete,
    states,
    zipStatus,
    zipValidating,
    showNotValidZip,
    slots,
    closeRuleModal,
    submitAppointment,
    isLoading,
    successData,
    triggerFetch,
  };
}

export default useSellFuc;
