import OfferInfo from "components/offer/sideBar.js/offerInfo";
import Image from "next/image";
import React, { useState } from "react";
import useCheckMobile from "utils/checkMobile";
import getAmount from "utils/getAmount";
import AverageInfo from "../../../sideBar.js/averageInfo";
import Link from "node_modules/next/link";
import { Modal } from "antd";
import Reviews from "../reviews";
import { useReviewsQuery } from "services/util";
import CarInfo from "../../initial/mob/carInfo";
import InfoIcon from "components/common/infoIcon";
function Accept({ data, setAccept }) {
  const { confirm } = Modal;

  const isMobile = useCheckMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState({});
  const [limit, setLimit] = useState(5);
  const { data: reviewsData, isFetching } = useReviewsQuery({ limit });
  return (
    <div>
      <Modal
        title={""}
        open={isModalOpen}
        onOk={() => {}}
        width={1000}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={false}
      >
        <Reviews
          reviews={reviews}
          setReviews={setReviews}
          limit={limit}
          setLimit={setLimit}
          data={reviewsData}
          isFetching={isFetching}
        />
      </Modal>
      <div className="acceptOffer">
        <div className="acceptOffer_top">
          <div className="at_in">
            <div className="at_head">
              <span className="mt-3">
                Your{" "}
                <i style={{ color: "#ffd147", fontWeight: "bold" }}>FLIPPIN’</i>{" "}
                Awesome Offer!
              </span>
              <div className="at_img">
                <Image
                  src="/images/jd.webp"
                  alt="jd"
                  title="jd"
                  width={200}
                  height={25}
                />
              </div>
            </div>
            <div className="at_price">
              <h1>{getAmount(data)}</h1>
            </div>
            {isMobile && <CarInfo data={data} />}
            <div className="at_dec mt-2">
              <p>
                Your offer is good for 5 days.
                <br />
                Click below to set your time to sell and get paid!
              </p>
            </div>
            <div className="at_buttons">
              <button
                className="accept_off_btn"
                onClick={() => {
                  setAccept();
                }}
              >
                Accept Offer & Sell
              </button>
            </div>
          </div>
        </div>
        <div className="offset-1 col-10 mt-5">
          <p className="text-center font-italic">
            {`*A small transaction fee up to $99 will be applied to the offer
            amount upon completion of the purchase of your vehicle.`}
          </p>
        </div>{" "}
        <div
          className="offset-1 col-10 "
          onClick={() => {
            confirm({
              icon: null,
              content: (
                <div className="of_body mt-3">
                  <div className="of_list">
                    <div className="of_item">
                      <h6 className="text-center mb-3">
                        Unlike others, we do not hide our fee!
                        <span className="under_line"></span>
                      </h6>
                      <b>
                        A small fee up to $99 may apply to the final offer
                        amount which is used for:
                      </b>
                    </div>
                    <div className="of_item mt-2">
                      <ul>
                        <li>Required DMV title & transfer fees</li>
                        <li>
                          {" "}
                          Supports our awesome Car Concierge who travel to you
                          to pay & pick up, provide a 5-star vehicle selling
                          experience, and ensure everything is done accurately
                          for smooth transaction.
                        </li>
                      </ul>
                    </div>
                    <h6 className="text-center mb-4">
                      Compare to others that charge $499+
                    </h6>
                  </div>
                </div>
              ),
              title: null,
              closable: true,
              footer: null,
              className: "info_pop_up_main",
            });
          }}
        >
          <div
            className="text-center font-italic"
            style={{
              cursor: "pointer",
            }}
          >
            {" "}
            <InfoIcon fill="#FFC000" size={30} />
            <b>{`What's this?`}</b>
          </div>
        </div>
        {isMobile && (
          <div className="mt-4">
            <OfferInfo isShow={true} data={data} />
            <AverageInfo isShow={true} />
          </div>
        )}
        <div className="acceptOffer_center">
          <div className="ac_in">
            <h2>Why Sell to Us?</h2>
            <div className="why_sell_points">
              <div className="wsp_item">
                <div className="wsp_item_in">
                  <div className="wsp_img_wrp">
                    <div className="wsp_left">
                      <Image
                        src="/images/convenience.svg"
                        alt="convenience"
                        title="convenience"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className="wsp_right text-md-left text-center">
                    <h2>Ultimate Convenience!</h2>
                    <p>
                      We come to you to pay and pick up...on your time ! No more
                      wasted time or stress messing with scammers, tire-kickers,
                      or dealers!
                    </p>
                  </div>
                </div>
              </div>
              <div className="wsp_item">
                <div className="wsp_item_in">
                  <div className="wsp_img_wrp">
                    <div className="wsp_left">
                      <Image
                        src="/images/best-offer.svg"
                        alt="best offer"
                        title="best offer"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className="wsp_right text-md-left text-center">
                    <h2>Best Offer!</h2>
                    <p>
                      Our offers typically are <b>$762 higher</b> than trade-in
                      and beat most other car-buying companies. Plus we are
                      trusted by the biggest names in the industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="wsp_item">
                <div className="wsp_item_in">
                  <div className="wsp_img_wrp">
                    <div className="wsp_left">
                      <Image
                        src="/images/safe.svg"
                        alt="safe"
                        title="safe"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className="wsp_right text-md-left text-center">
                    <h2>Safe and Smooth!</h2>
                    <p>
                      Guaranteed payment on the spot with all proper paperwork
                      completed in only a few minutes!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="acceptOffer_foo mt-5 mt-md-3">
          <div className="acceptOffer_foo_left">
            <div
              className="acceptOffer_foo_left_in card p-3 hover_hand"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <span>
                5-Star
                <span className="googText">
                  <Image
                    src="/images/google.svg"
                    alt="google"
                    title="google"
                    width={70}
                    height={30}
                  />
                </span>
                Rated Service
              </span>
              <div className="stars">
                <svg
                  width="137"
                  height="24"
                  viewBox="0 0 137 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.25 17.27L18.43 21L16.79 13.97L22.25 9.24L15.06 8.63L12.25 2L9.44 8.63L2.25 9.24L7.71 13.97L6.07 21L12.25 17.27Z"
                    fill="#FFC000"
                  />
                  <path
                    d="M40.25 17.27L46.43 21L44.79 13.97L50.25 9.24L43.06 8.63L40.25 2L37.44 8.63L30.25 9.24L35.71 13.97L34.07 21L40.25 17.27Z"
                    fill="#FFC000"
                  />
                  <path
                    d="M68.25 17.27L74.43 21L72.79 13.97L78.25 9.24L71.06 8.63L68.25 2L65.44 8.63L58.25 9.24L63.71 13.97L62.07 21L68.25 17.27Z"
                    fill="#FFC000"
                  />
                  <path
                    d="M96.25 17.27L102.43 21L100.79 13.97L106.25 9.24L99.06 8.63L96.25 2L93.44 8.63L86.25 9.24L91.71 13.97L90.07 21L96.25 17.27Z"
                    fill="#FFC000"
                  />
                  <path
                    d="M124.25 17.27L130.43 21L128.79 13.97L134.25 9.24L127.06 8.63L124.25 2L121.44 8.63L114.25 9.24L119.71 13.97L118.07 21L124.25 17.27Z"
                    fill="#FFC000"
                  />
                </svg>
              </div>
              <div className="af_foo_dec">
                <p>
                  Our customers RAVE about us! Check out our awesome reviews{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="acceptOffer_foo_right card p-3">
            <div className="acceptOffer_foo_right_in">
              <div className="acceptOffer_rating">
                <div className="acc_left">
                  <img
                    src="https://seal-delaware.bbb.org/seals/blue-seal-250-52-bbb-92026602.png"
                    alt="rating"
                    title="rating"
                    width={280}
                    height={50}
                  />
                </div>
              </div>
              <div className="poweredBy">
                <Image
                  src="/images/jd.webp"
                  alt="jd"
                  title="jd"
                  width={200}
                  height={25}
                />
              </div>
              <div className="af_foo_dec">
                <p>
                  We are trusted by the biggest and best names in the industry!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fyi_for_ao">
          <h2>Need to think about it?</h2>
          <p>
            No worries! Your offer is good for 5 days. Simply revisit{" "}
            <a href="#" title="whipflip">
              WhipFlip.com
            </a>{" "}
            to retrieve your offer or check your email to see our offer
            confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accept;
