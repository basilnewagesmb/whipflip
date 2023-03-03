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
              <title>
                Sell Car Online for FREE | Get Best Price for Used Car |
                whipflip.com
              </title>
              <meta
                name="Description"
                content="What's your car worth? Get a great offer in 3 minutes. We come to you. Paid on the spot."
              ></meta>
              <meta
                name="Keywords"
                content="Sell my car, Sell car from house, Sell car from home, By my truck, Sell your car, Buy my used car, Sell car quick, Sell old car, Trade in car for cash, Buy sell cars, Sell car on craigslist, Sell car on carmax, Sell car carvana, We buy cars, We buy any car, Sell any car, Sell my car for cash, Car offer, Buy my car, Buy my truck, Sell my car online, Sell a car, Sell a truck, Car cash, Instant cash offer for car, Who will buy my car, Who will buy my truck, Who buys cars, Best way to sell car, Easy way to sell car, Cash for my car, Cash for my truck, Sell my car near me, Sell car Delaware, Delaware car buyer, Sell car Pennsylvania, Pennsylvania car buyer, Sell car New Jersey, New Jersey car buyer, How to sell a car, Trade in my car, Trade in value, Sell car offer online, Sell car quote online, Buy cars for cash, Car buying websites, Car buying services, Sell used car to dealer, Cars and cash, Where to sell a car, Where to sell my car, Where to sell my truck, Sell car fast, Sell car now, Sell truck fast, Sell truck now, Where can I sell my car, Sell my Acura, Sell my Audi, Sell my BMW, Sell my Cadillac, Sell my Chrysler, Sell my Chevrolet, Sell my Dodge, Sell my GMC, Sell my Honda, Sell my Hyundai, Sell my Infiniti, Sell my Jeep, Sell my Kia, Sell my Lexus, Sell my Lincoln, Sell my Mercedes, Sell my Mazda, Sell my Mitsubishi, Sell my Nissan, Sell my Toyota, Sell my Volkswagen, Sell my Subaru, Sell my Scion, Buy my Acura, Buy my Audi, Buy my BMW, Buy my Cadillac, Buy my Chrysler, Buy my Chevrolet, Buy my Dodge, Buy my GMC, Buy my Honda, Buy my Hyundai, Buy my Infiniti, Buy my Jeep, Buy my Kia, Buy my Lexus, Buy my Lincoln, Buy my Mercedes, Buy my Mazda, Buy my Mitsubishi, Buy my Nissan, Buy my Toyota, Buy my Volkswagen, Buy my Subaru, Buy my Scion"
              ></meta>
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
)(withHotjar(2096064, 6, Router)(withGA("UA-173303436-1", Router)(MyApp)));
