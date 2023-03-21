import Initial from "components/offer/steps/confirm/mob/valuate/initial";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useValuateFun from "services/offer/confirm/valuateFun";
import { useGetOfferQuery } from "services/offer/api";
import ProgressBar from "components/offer/sideBar.js/ProgressBar";
import Header from "layout/Header";
import Footer from "layout/Footer";
import { Result, Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
const Camera = dynamic(
  () => import("components/offer/steps/confirm/mob/valuate/camera"),
  { ssr: false }
);
const Uploading = dynamic(
  () => import("components/offer/steps/confirm/mob/valuate/uploading"),
  { ssr: false }
);
function Valuate(props) {
  const { data, analytics, fbpixel, isForUpload } = props;
  const { push } = useRouter();
  useEffect(() => {
    analytics && analytics.event("SnapPics", "Snap pics", `Valuation`);
    fbpixel &&
      fbpixel.customEvent("SnapPics", {
        content_name: "Snap pics",
        content_category: `Valuation`,
        content_ids: [data?.uid],
      });
  }, []);
  const { data: offerData } = useGetOfferQuery(data?.uid, {
    skip: !data?.uid,
  });
  const valuateControl = useValuateFun({
    offerData,
    analytics,
    fbpixel,
    isForUpload,
  });
  const { state } = valuateControl;
  return (
    <>
      {valuateControl?.isMobile ? (
        <ConditionalWrap
          condition={state.current == "uploading"}
          wrap={(wrappedChildren) => (
            <>
              <Header />
              <div className="col-lg-4 pt-5">
                <div className="pt-5 b-0">
                  {" "}
                  <ProgressBar current={1} />
                </div>
              </div>
              {wrappedChildren}
              <Footer />
            </>
          )}
        >
          {state.current == "initial" && (
            <Initial {...valuateControl} isForUpload={isForUpload} />
          )}
          {state.current == "camera" && <Camera {...valuateControl} />}{" "}
          {state.current == "uploading" && <Uploading {...valuateControl} />}{" "}
        </ConditionalWrap>
      ) : (
        <Result
          status="error"
          className="vh-100 d-flex flex-column justify-content-center"
          icon={<WarningOutlined />}
          title={
            <p className="col-8 offset-2">
              {`Welcome! This feature is exclusively designed for mobile users. To
              access it, we recommend using your mobile phone. Enjoy the best
              experience on-the-go and make the most out of this feature! If you
              don't have a mobile device, please feel free to contact us for
              assistance.`}
            </p>
          }
          extra={
            <Button
              type="primary"
              onClick={() => {
                push("/contact-us");
              }}
            >
              Contact Us
            </Button>
          }
        />
      )}
    </>
  );
}
const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;
export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  if (data.status !== "quote") {
    return {
      redirect: {
        permanent: false,
        destination: `/prospect/${data.uid}/${data.status}`,
      },
      props: { data },
    };
  } else {
    return {
      props: { data },
    };
  }
}
export default Valuate;
