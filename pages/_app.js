import "scss/style.scss";
import "styles/animate.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Default from "layout/Default";
function MyApp({ Component, pageProps }) {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  );
}

export default MyApp;
