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
import {
  disablePageScroll,
  enablePageScroll,
  getScrollState,
  clearQueueScrollLocks,
} from "scroll-lock";

function Default({ children, user }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const IsScrollable = getScrollState();
  const isMobile = useMobileDetect();
  const handleScroll = () => {
    if (isMobile) {
      const modals = document.querySelectorAll(".ant-modal-wrap");
      const antSelectOpenElements =
        document.querySelectorAll(".ant-select-open");
      if (antSelectOpenElements?.length > 0 || openSideBar) {
        disablePageScroll();
        modals?.forEach((element) => {
          element.style.overflow = "hidden";
        });
      } else {
        enablePageScroll();
        clearQueueScrollLocks();
        modals?.forEach((element) => {
          element.style.overflow = "auto";
        });
      }
    }
  };
  useEffect(() => {
    console.log("IsScrollable", IsScrollable);
  }, [IsScrollable]);

  useEffect(() => {
    window.addEventListener("mousewheel", handleScroll);
    window.addEventListener("DOMMouseScroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleScroll);
    document.addEventListener("touchmove", handleScroll);
    document.addEventListener("touchstart", handleScroll);
    return () => {
      window.removeEventListener("mousewheel", handleScroll);
      window.removeEventListener("DOMMouseScroll", handleScroll);
      window.removeEventListener("click", handleScroll);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("touchmove", handleScroll);
      document.removeEventListener("touchstart", handleScroll);
    };
  }, [openSideBar]);

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
    if (pathname.includes("prospect")) {
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
    }
  }, [data, pathname]);
  const { push } = useRouter();
  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(reset());
    push("/");
  };

  return (
    <div>
      <Modal
        maskClosable={false}
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
            <Header openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
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
