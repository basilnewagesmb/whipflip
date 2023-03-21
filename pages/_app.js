import "scss/style.scss";
import "styles/animate.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import dynamic from "next/dynamic";
import { persister, store } from "app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";
import { useEffect } from "react";
import Router from "next/router";
import withGA from "components/site/analytics";
import withPixel from "components/site/fbpixel";
import withHotjar from "components/site/hotjar";
import Head from "next/head";
import { isDev, isLocal } from "utils/helper";
import * as prodGTM from "utils/GTM/prod";
import * as devGTM from "utils/GTM/dev";
import { useNetwork } from "utils/useNetwork";
import { message } from "antd";
import { Suspense } from "react";
import Default from "layout/Default";
import NextNProgress from "nextjs-progressbar";
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
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NextNProgress color="#FFD147" height={2} />
        <Default>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#4381c0",
                borderRadiusLG: 4,
              },
            }}
          >
            <Head>
              <link rel="preload" href="/images/car-anim.gif" as="image" />
              <meta name="robots" content="index,follow" />
              <meta
                name="google-site-verification"
                content="jnAdFCwVEDCZykQl_XGONg9qtAu-07wxtA2-s6sTuKc"
              />
              <meta
                name="facebook-domain-verification"
                content="5qtg49f5uu0blll09ukjxvxpo4tz5g"
              />
              <meta
                name="viewport"
                content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
              />
              <meta name="color-scheme" content="only light" />
            </Head>
            <Component
              {...pageProps}
              analytics={analytics}
              fbpixel={fbpixel}
              hotjar={hotjar}
            />
          </ConfigProvider>
        </Default>
      </PersistGate>
    </Provider>
  );
}
export default withPixel(
  2810107665901141,
  Router
)(
  withHotjar(
    2096064,
    6,
    Router
  )(
    withGA("UA-173303436-1", Router)(MyApp, {
      ssr: true, // Should be true
    })
  )
);
