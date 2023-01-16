import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import { useGetOfferQuery } from "services/offer/api";

function Default({ children, user }) {
  const { initialOffer } = useSelector((state) => state.offer);
  const { data } = useGetOfferQuery(initialOffer?.uid, {
    skip: !initialOffer?.uid,
  });
  return (
    <div>
      <Header />
      <Fade spy={children}>{children}</Fade>
      <Footer />
    </div>
  );
}

export default Default;
