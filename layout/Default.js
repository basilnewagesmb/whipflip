import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Fade from "react-reveal/Fade";

function Default({ children, user }) {
  return (
    <div>
      <Header />
      <Fade spy={children}>{children}</Fade>
      <Footer />
    </div>
  );
}

export default Default;
