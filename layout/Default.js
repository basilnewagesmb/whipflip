import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import { useGetOfferQuery } from "services/offer/api";
import { useRouter } from "next/router";
function Default({ children, user }) {
  const { initialOffer } = useSelector((state) => state.offer);
  const { data } = useGetOfferQuery(initialOffer?.uid, {
    skip: !initialOffer?.uid,
  });
  const { pathname } = useRouter();

  return (
    <div>
      <ConditionalWrap
        condition={!pathname?.includes("valuate")}
        wrap={(wrappedChildren) => (
          <>
            <Header />
            {wrappedChildren}
            <Footer />
          </>
        )}
      >
        {" "}
        <Fade spy={children}>{children}</Fade>
      </ConditionalWrap>{" "}
    </div>
  );
}

const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;
export default Default;
