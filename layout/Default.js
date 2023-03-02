import React, { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useGetOfferQuery } from "services/offer/api";
import { useRouter } from "next/router";
import { reset } from "features/offer/offerSlice";
import moment from "moment";
import { Modal } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
function Default({ children, user }) {
  const Footer = dynamic(() => import("./Footer"), {
    suspense: true,
  });
  const Header = dynamic(() => import("./Header"), {
    suspense: true,
  });
  const Fade = dynamic(() => import("react-reveal/Fade"), {
    suspense: true,
  });
  const ResetActions = dynamic(() => import("./resetActions"), {
    suspense: true,
  });
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
        onCancel={() => setIsModalOpen(false)}
        icon={<ClockCircleOutlined />}
        footer={
          <Suspense>
            <ResetActions setIsModalOpen={setIsModalOpen} uid={data?.uid} />
          </Suspense>
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
            <Suspense>
              <Header />
            </Suspense>
            {wrappedChildren}
            <Suspense>
              <Footer />
            </Suspense>
          </>
        )}
      >
        <Suspense>
          <Fade spy={pathname}>{children}</Fade>
        </Suspense>
      </ConditionalWrap>
    </div>
  );
}

const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;
export default Default;
