import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetOfferQuery } from "services/offer/api";
import { useRouter } from "next/router";
import { reset } from "features/offer/offerSlice";
import moment from "moment";
import { Modal } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Fade } from "react-reveal/index";
import ResetActions from "./resetActions";
import useMobileDetect from "utils/useMobileDetect";
function Default({ children, user }) {
  const isMobile = useMobileDetect();
  var scrollPosition = 0;
  var scrollable = true;
  const handleScroll = () => {
    if (isMobile) {
      const antSelectOpenElements =
        document.querySelectorAll(".ant-select-open");
      if (antSelectOpenElements.length > 0) {
        console.log("disable-scroll");
        disableScroll();
      } else {
        console.log("enable-scroll");
        enableScroll();
      }
    }
  };

  
  function enableScroll() {
    if (!scrollable) {
      scrollable = true;
      document.body.classList.remove("disable-scroll");
      document.body.style.top = "";
      window.scrollTo(0, scrollPosition);
      window.addEventListener("scroll", handleScroll); // Add scroll listener back after enabling scrolling
      
    }
  }
  function disableScroll() {
    if (scrollable) {
      scrollable = false;
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.classList.add("disable-scroll");
      document.body.style.top = `-${scrollPosition}px`;
      window.removeEventListener("scroll", handleScroll); // Remove scroll listener while scrolling is disabled
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleScroll);

    return () => {
      document.removeEventListener("click", handleScroll);

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { initialOffer } = useSelector((state) => state.offer);
  const { data } = useGetOfferQuery(
    { id: initialOffer?.uid },
    {
      skip: !initialOffer?.uid,
    }
  );
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (initialOffer?.status == "appointment") {
      dispatch(reset());
    }
  }, [initialOffer]);
  useEffect(() => {
    if (
      data?.last_offer_date &&
      data?.status == "offer" &&
      !data?.is_manrev_prospect
    ) {
      if (moment().diff(moment(data?.last_offer_date), "days") >= 5) {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    }
  }, [data]);
  const { push } = useRouter();
  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(reset());
    push("/");
  };

  return (
    <div>
      <Modal
        title={
          <div>
            <ClockCircleOutlined
              className="mr-2"
              style={{
                color: "#e9af03",
              }}
            />
            Offer Expired
          </div>
        }
        open={isModalOpen}
        onCancel={() => closeModal()}
        icon={<ClockCircleOutlined />}
        footer={
          <ResetActions
            setIsModalOpen={setIsModalOpen}
            uid={data?.uid}
            closeModal={closeModal}
          />
        }
        width={400}
      >
        It looks like your offer has expired. Please tap the Reset button below
        to recalculate.
      </Modal>
      <ConditionalWrap
        condition={
          ![
            "/prospect/[id]/valuate",
            "/prospect/[id]/add-vehicle-images",
          ]?.includes(pathname)
        }
        wrap={(wrappedChildren) => (
          <>
            <Header />
            {wrappedChildren}
            <Footer />
          </>
        )}
      >
        <Fade spy={pathname}>{children}</Fade>
      </ConditionalWrap>
    </div>
  );
}

const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;
export default Default;
