import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "features/offer/offerSlice";
import ShimmerImage from "components/common/shimmerImage";
import { useCountdown } from "utils/useCountdown";
import moment from "moment";
import { useGetOfferMinimalByIdQuery } from "services/offer/api";
import getAmount from "utils/getAmount";
import { Modal } from "antd";

function ConfirmOffer({ initialOffer }) {
  const dispatch = useDispatch();
  const [data, setData] = useState(initialOffer);

  const offerData = useGetOfferMinimalByIdQuery(
    { id: initialOffer?.uid },
    {
      skip: !initialOffer?.uid,
    }
  );
  useEffect(() => {
    if (offerData.data) {
      setData(offerData.data);
    }
  }, [initialOffer, offerData]);
  const date =
    data?.status == "quote"
      ? moment(data?.last_quote_date).add(5, "days")
      : moment(data?.last_offer_date).add(5, "days");

  const [days, hours, minutes, seconds, countDown] = useCountdown(
    date || moment().format("YYYY-MM-DD HH:mm:ss")
  );
  return (
    <div className="card card-outline-secondary home-form">
      <div className="confirm_offer_banner">
        <div className="cob_head">
          <span>Welcome back!</span>
          <h2>
            <span>You’re only a click away from </span>{" "}
            <span>confirming your offer!</span>
          </h2>
        </div>
        <div className="cob_body">
          <div className="cob_in">
            <div className="cob_offer_product d-flex justify-content-center">
              <ShimmerImage
                width={285}
                src={data?.image}
                alt={`${data?.year} ${data?.make} ${data?.model} ${
                  data?.enableMultiTrim ? data?.body : data?.trim
                }`}
                title={`${data?.year} ${data?.make} ${data?.model} ${
                  data?.enableMultiTrim ? data?.body : data?.trim
                }`}
                preview={false}
                fallback={"/images/no-car-image.png"}
              />
            </div>
            <div className="cob_offer_name">
              <h2>
                {data?.year} {data?.make}
              </h2>
              <p>
                <span> {data?.trim}</span>
                <span>.</span>
                <span>
                  {moment(data?.last_quote_date).format("MMM, DD ,YYYY")}
                </span>
              </p>
            </div>
            <div className="cob_offer_price">
              <h1>{getAmount(data)}</h1>
            </div>
            <div className="poweredBy">
              <Image
                src="/images/jd.svg"
                alt="poweredBy"
                title="poweredBy"
                width={200}
                height={24}
              />
            </div>
            <div className="offer_expire">
              <h2>Offer expires in:</h2>
              <div className="oe_time_left">
                <div className="oet_col">
                  <div className="oet_col_in">
                    <span> {countDown > 0 ? days : 0}</span>
                  </div>
                  <span>DAYS</span>
                </div>
                <b className="mt-md-1 text-muted">:</b>
                <div className="oet_col">
                  <div className="oet_col_in">
                    <span> {countDown > 0 ? hours : 0}</span>
                  </div>
                  <span>hrs</span>
                </div>
                <b className="mt-md-1 text-muted">:</b>
                <div className="oet_col">
                  <div className="oet_col_in">
                    <span> {countDown > 0 ? minutes : 0}</span>
                  </div>
                  <span>mins</span>
                </div>
                <b className="mt-md-1 text-muted">:</b>
                <div className="oet_col">
                  <div className="oet_col_in">
                    <span> {countDown > 0 ? seconds : 0}</span>
                  </div>
                  <span>secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cob_foo">
          <Link href={"/prospect/" + data?.uid + "/" + data?.status}>
            <span className="confirm_offer_btn">
              <span>
                {data?.status == "offer"
                  ? "Accept Offer & Sell"
                  : data?.status == "appointment"
                  ? "Confirm My Appointment"
                  : "Confirm My Offer"}
              </span>
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 16L7.075 14.6L12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16Z"
                    fill="#353442"
                  />
                </svg>
              </span>
            </span>
          </Link>
          <button
            className="start_btn"
            onClick={() => {
              Modal.confirm({
                title: "Confirm",
                content: "Are you sure to stat over new car?",
                onOk: () => {
                  dispatch(reset());
                },
              });
            }}
          >
            <span>Start Over</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOffer;
