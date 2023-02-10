import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { useGetOfferQuery } from "services/offer/api";
import { useRouter } from "next/router";
import { reset } from "features/offer/offerSlice";
function Default({ children, user }) {
  const { initialOffer } = useSelector((state) => state.offer);
  const { data } = useGetOfferQuery(initialOffer?.uid, {
    skip: !initialOffer?.uid,
  });
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (initialOffer?.status == "appointment") {
      dispatch(reset());
    }
  }, [initialOffer]);

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
        <Fade spy={children}>{children}</Fade>
      </ConditionalWrap>
    </div>
  );
}

const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;
export default Default;
