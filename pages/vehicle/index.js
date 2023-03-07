import MetaHead from "components/common/metaHead";
import OfferLayout from "components/offer/layout";
import Initial from "components/offer/steps/initial/index";
import React, { useEffect } from "react";

function Index(props) {
  const { data } = props;
  useEffect(() => {
    if (props.fbpixel) {
      const events = ["ViewContent"];
      for (let item of events) {
        props.fbpixel.event(item, {
          content_ids: [],
          content_category: "",
          content_name: "",
          content_type: "",
          contents: [],
          currency: "",
          num_items: 0,
          predicted_ltv: 0,
          search_string: "",
          status: "",
          value: "",
        });
      }
    }
  }, [props.fbpixel]);
  useEffect(() => {
    props.analytics &&
      props.analytics.event(
        "HomePageNext",
        "Home page next button clicked",
        "YEAR-MAKE-MODEL"
      );
    props.fbpixel &&
      props.fbpixel.customEvent("VehicleDecoded", {
        content_name: "Vehicle Decode",
        content_category: `Home page next button clicked: "YEAR-MAKE-MODEL"`,
        contents: [
          {
            ...data,
          },
        ],
      });
    if (data && data.old_vehicle) {
      props.analytics &&
        props.analytics.event(
          "OldModelYear",
          "OldModelYear",
          `${data.modelyear}`
        );
      props.fbpixel &&
        props.fbpixel.customEvent("OldVehicle", {
          content_name: "Vehicle Decode",
          content_category: `OldModelYear : ${data.modelyear}`,
          contents: [
            {
              ...data,
            },
          ],
        });
      //document.getElementById("OldVehicleModalShowBtn")?.click();
    } else if (data && data.blocked_vehicle) {
      props.analytics &&
        props.analytics.event(
          "BlockedModelYear",
          "BlockedModelYear",
          `${data.modelyear}`
        );
      props.fbpixel &&
        props.fbpixel.customEvent("BlockedModelYear", {
          content_name: "Vehicle Decode",
          content_category: `BlockedModelYear: ${data.modelyea}`,
          contents: [
            {
              ...data,
            },
          ],
        });
      //document.getElementById("OldVehicleModalShowBtn")?.click();
    }
  }, []);
  return (
    <>
      <MetaHead title="Get an offer and sell your car to us in 3 easy steps!" />
      <OfferLayout data={data} current={0}>
        <Initial {...props} />
      </OfferLayout>
    </>
  );
}
export async function getServerSideProps({ res, query }) {
  const { vehicle_id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles?vehicleID=${vehicle_id}`
  );
  const data = await resp.json();
  return { props: { data } };
}

export default Index;
