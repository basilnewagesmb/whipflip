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
function Default({ children, user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <ResetActions setIsModalOpen={setIsModalOpen} uid={data?.uid} closeModal={closeModal} />
        }
        width={400}
      >
        It looks like your offer has expired. Please tap the Reset button below
        to recalculate.
      </Modal>
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
        <Fade spy={pathname}>{children}</Fade>
      </ConditionalWrap>
    </div>
  );
}

const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;
export default Default;
