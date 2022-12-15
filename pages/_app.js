import "scss/style.scss";
import "styles/animate.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Default from "layout/Default";
import { persister, store } from "app/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";
import Aos from "aos";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NextNProgress color="#FFD147" height={2} />
        <Default>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#4381c0",
              },
            }}
          >
            <Component {...pageProps} />
          </ConfigProvider>
        </Default>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
