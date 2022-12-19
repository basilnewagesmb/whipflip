import { Form, Modal } from "antd";
import BreakDown from "components/anim/breakdown";
import SpeedoMeter from "components/anim/speed";
import { useRouter } from "node_modules/next/router";
import { useSelector } from "react-redux";
import { useCreateInitialOfferMutation } from "./api";
function useInitialForm(form, data) {
  const [createInitialOffer, { isLoading }] = useCreateInitialOfferMutation();
  const site = useSelector((state) => state.site);
  const mileage = Form.useWatch("mileage", form);
  const onFinish = async (values) => {
    console.log("Success:", values);
    const { stills, ...rest } = data;
    let postData = { ...rest };
    await createInitialOffer({
      from: "dropdown",
      vehicle_id: 6653644,
      modelyear: "2007",
      make: "Infiniti",
      model: "FX",
      trim: "Utility 4D AWD 3.5L V6",
      bodytype: "Utility",
      body_style: "FX35 AWD",
      msrp: 39300,
      alf: -0.785305387,
      beta: -0.0000108,
      mile_lb: 90463.64,
      mile_ub: 222861.88,
      manual_review: null,
      um_factor: 0.5,
      om_factor: 1.5,
      market_del: -0.095676787,
      body: "Utility 4D AWD 3.5L V6",
      MANREV: 0,
      multitrim: false,
      old_vehicle: false,
      blocked_vehicle: false,
      trimlevel: [
        {
          body: "Utility 4D 3.5L V6",
          vehicle_id: 6653643,
          MANREV: 0,
        },
        {
          body: "Utility 4D AWD 3.5L V6",
          vehicle_id: 6653644,
          MANREV: 0,
        },
        {
          body: "Utility 4D AWD 4.5L V8",
          vehicle_id: 6670326,
          MANREV: 0,
        },
        {
          body: "Utility 4D Touring 3.5L V6",
          vehicle_id: 6598635,
          MANREV: 0,
        },
        {
          body: "Utility 4D Touring AWD 3.5L V6",
          vehicle_id: 6598636,
          MANREV: 0,
        },
      ],
      enableMultiTrim: true,
      readiness: [
        {
          uid: "readines_hBQaZoFsrjTltqwsTPE2",
          name: "ASAP!",
          is_send_mail: 1,
        },
        {
          uid: "readines_7TVgiqvufcb3AaIAKzWZ",
          name: "A FEW WEEKS",
          is_send_mail: 0,
        },
        {
          uid: "readines_zhYtuRZUIRhpNEvB2ClE",
          name: "I'M NOT",
          is_send_mail: 0,
        },
      ],
      userMileage: "555555",
      does_vehicle_start: true,
      transmission: "automatic",
      image:
        "https://d2ivfcfbdvj3sm.cloudfront.net/6fd260a869c389e6f8668ba55dfb3b34b35d405a0917348988/color_0640_032/MY2007/4071/4071_cc0640_032_A50.jpg",
      color_name: "Gold",
      color_code: "d4af37",
      user: {
        email: "kapuvico@mailinator.com",
        zip: "12345",
        phone: "8547579466",
      },
      issues: {
        mechanical: {
          engine: [],
          warning: [],
          modification: [],
          tires: "",
        },
        cosmetic: {
          interior: "",
          exterior: "",
        },
        history: [],
      },
      plate: "",
      state: "",
      documentData: site.documentUrl,
      gc_id: site.documentUrl,
      gclick_id: site.documentUrl,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const router = useRouter();

  const formDate = {
    initialValues: {
      transmission: "automatic",
      does_vehicle_start: true,
      readiness_uid: data?.readiness[0].uid,
    },
    onFinish,
    onFinishFailed,
    isDisable: true,
    mileageOnblur: () => {
      if (mileage >= 0 && mileage <= 9999) {
        Modal.success({
          className: "confirm-model",
          icon: <SpeedoMeter isLoading={true} />,
          footer: null,
          closable: true,
          title: <h6 className="text-center">Confirm Mileage</h6>,
          okText: "Confirm",
          content: (
            <div className="text-center">
              <p>
                Are you sure your vehicle only has {mileage + " "}
                miles?
              </p>
            </div>
          ),
          okButtonProps: {
            className: "getOfferBtn",
          },
        });
      }
    },
    breakDownPop: () => {
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
              Currently WhipFlip is not purchasing vehicles that are running
              poorly or fully inoperable. This includes vehicles that do not
              start due to dead/bad batteries, engine seized, transmission
              inoperable or severely malfunctioning, flat tires, etc.
              <br />
              You will need to fully repair any of the issues mentioned above
              before proceeding forward. We may require proof of repair or
              proper running condition before extending an final offer.
            </p>
          </div>
        ),
        okButtonProps: {
          className: "getOfferBtn",
        },
      });
    },
  };

  return formDate;
}

export default useInitialForm;
