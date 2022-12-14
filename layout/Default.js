import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Default({ children, user }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Default;
