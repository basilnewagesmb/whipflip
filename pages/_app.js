import "scss/style.scss";
import "styles/animate.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Default from "layout/Default";
import { persister, store } from "app/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import { PersistGate } from "redux-persist/integration/react";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NextNProgress color="#FFD147" height={2} />
        <Default>
          <Component {...pageProps} />
        </Default>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
