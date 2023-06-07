import "scss/style.scss";
import "styles/animate.css";
import "styles/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import dynamic from "next/dynamic";
import { persister, store } from "app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import Router from "next/router";
import withGA from "components/site/analytics";
import withPixel from "components/site/fbpixel";
import withHotjar from "components/site/hotjar";
import Head from "next/head";
import { isDev, isLocal } from "utils/helper";
import * as prodGTM from "utils/GTM/prod";
import * as devGTM from "utils/GTM/dev";
import { useNetwork } from "utils/useNetwork";
import { message, Modal } from "antd";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import Loader from "layout/Loader";
const Default = dynamic(() => import("layout/Default"), {
  loading: () => <Loader />,
});

function MyApp({ Component, pageProps, analytics, fbpixel, hotjar }) {
  useEffect(() => {
    const shouldNotTrack = isLocal("localhost") || isDev();
    const gtm = shouldNotTrack ? devGTM : prodGTM;
    gtm.init("GTM-KS44Q5Z");
  }, []);
  const isOnline = useNetwork();
  useEffect(() => {
    if (!isOnline) {
      message.error("You're currently offline");
    }
  }, [isOnline]);
  const router = useRouter();
  const currentPath = router.asPath;
  const handleBackButton = (e) => {
    e.preventDefault();
    const confirmed = window?.confirm(
      "Are you sure you want to leave this page? You may lose unsaved data."
    );
    if (confirmed) {
      router.push("/"); // Redirect to the home screen
    } else {
      window.history.pushState(null, "", currentPath);
    }
  };
  useEffect(() => {
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persister}>
        {/* {() => ( */}
        <Default>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#4381c0",
                borderRadiusLG: 4,
              },
            }}
          >
            <NextNProgress color="#FFD147" height={2} />
            <Head>
              <meta
                name="google-site-verification"
                content="jnAdFCwVEDCZykQl_XGONg9qtAu-07wxtA2-s6sTuKc"
              />
              <meta
                name="facebook-domain-verification"
                content="5qtg49f5uu0blll09ukjxvxpo4tz5g"
              />
            </Head>
            <Component
              {...pageProps}
              analytics={analytics}
              fbpixel={fbpixel}
              hotjar={hotjar}
            />
          </ConfigProvider>
        </Default>
        {/* )} */}
      </PersistGate>
    </Provider>
  );
}
export default withPixel(
  2810107665901141,
  Router
)(withHotjar(2096064, 6, Router)(withGA("UA-173303436-1", Router)(MyApp)));
