import React from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Faq from "components/home/faq";
import HappyCustomersSlider from "components/home/slider";
import MetaHead from "components/common/metaHead";
import { DatePicker } from "antd";
function index() {
  const [showConfirmOffer, setShowConfirmOffer] = useState(false);
  const [showRetriveOffer, setShowRetriveOffer] = useState(false);
  const handleShowConfirmOffer = (e) => {
    e.preventDefault();
    setShowConfirmOffer(true);
  };
  const handleCloseConfirmOffer = (e) => {
    e.preventDefault();
    setShowConfirmOffer(false);
  };
  const handleRetriveOffer = (e) => {
    e.preventDefault();
    setShowRetriveOffer(true);
  };
  const handleCloseRetriveOffer = () => {
    setShowRetriveOffer(false);
  };
  return (
    <>
      <MetaHead title="Home" />
      <div className="home-banner">
        <div className="container h100">
          <div className="hb_wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="bnr_left">
                  <div className="bnr_lin_top">
                    <div className="bnr_left_head">
                      <h1>
                        <span>
                          The <span className="text-highlight">Best</span> Way
                          To
                        </span>
                        <span>Sell Your Car - </span>
                        <span>Period!</span>
                      </h1>
                      <span>We come to you. Paid on the sport!</span>
                    </div>
                    <div className="bnr_left_info desk-show">
                      <div className="row">
                        <div className="col-lg-6 review_col bnr_left_points">
                          <article
                            data-toggle="modal"
                            data-target="#activeUsers"
                            className="reviewLt_icons"
                          >
                            <div className="c-profile__list">
                              <span className="c-profile">
                                <Image
                                  src="/images/rv1.png"
                                  alt="profile"
                                  title="profile"
                                  width={40}
                                  height={40}
                                />
                              </span>
                              <span className="c-profile">
                                <Image
                                  src="/images/rv2.png"
                                  alt="profile"
                                  title="profile"
                                  width={40}
                                  height={40}
                                />
                              </span>
                              <span className="c-profile">
                                <Image
                                  src="/images/rv1.png"
                                  alt="profile"
                                  title="profile"
                                  width={40}
                                  height={40}
                                />
                              </span>
                            </div>
                          </article>
                          <div className="reviewRt_info">
                            <ul>
                              <li>
                                <svg
                                  width="16"
                                  height="15"
                                  viewBox="0 0 16 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                    fill="#FFC000"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="15"
                                  viewBox="0 0 16 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                    fill="#FFC000"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="15"
                                  viewBox="0 0 16 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                    fill="#FFC000"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="15"
                                  viewBox="0 0 16 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                    fill="#FFC000"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="16"
                                  height="15"
                                  viewBox="0 0 16 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                    fill="#FFC000"
                                  />
                                </svg>
                              </li>
                            </ul>
                            <div className="revDetail">
                              <span>
                                4.9/5 in <b>Google</b> reviews
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 accredit_col p-0 bnr_left_points">
                          <div className="acc_left">
                            <Image
                              src="/images/acc-text.png"
                              alt="profile"
                              title="profile"
                              width={200}
                              height={50}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 video_col bnr_left_points">
                          <div className="video_left">
                            <Image
                              src="/images/video.png"
                              alt="video"
                              title="video"
                              width={64}
                              height={36}
                            />
                          </div>
                          <div className="acc_right">
                            <span>Watch How It Works (1:23)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bnr_lin_bottom">
                    <div className="bnr_left_bottom desk-show">
                      {/* <img
                        src="/images/customer.webp"
                        alt="customer"
                        title="customer"
                      /> */}
                      {/* <Image 
                        src="/images/customer.webp" 
                        alt="customer" 
                        title='customer'
                            width={245}
                        height={350}
                    /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bnr_right">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="card card-outline-secondary home-form">
                        {!showConfirmOffer && (
                          <div className="get_offer_banner">
                            <div className="form_top">
                              <div className="poweredBy">
                                <Image
                                  src="/images/jd.svg"
                                  alt="poweredBy"
                                  title="poweredBy"
                                  width={180}
                                  height={20}
                                />
                              </div>
                              <div className="form_head">
                                <h2>Get a REAL offer in seconds!</h2>
                                <p>Enter your vehicles details:</p>
                              </div>
                            </div>
                            <div className="card-body">
                              <form
                                autoComplete="off"
                                className="form"
                                role="form"
                              >
                                <div className="form-group row">
                                  <div className="col-lg-12">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Year</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <div className="col-lg-12">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Make</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <div className="col-lg-12">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">Model</option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <div className="col-lg-12">
                                    <select
                                      className="form-control"
                                      id="user_time_zone"
                                      size="0"
                                    >
                                      <option value="Hawaii">
                                        Trim/Series
                                      </option>
                                      <option value="Alaska">
                                        (GMT-09:00) Alaska
                                      </option>
                                    </select>
                                    <div className="toKnow">
                                      <span>
                                        <svg
                                          width="16"
                                          height="18"
                                          viewBox="0 0 16 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M7.3335 12.3335H8.66683V8.3335H7.3335V12.3335ZM8.00016 7.00016C8.18905 7.00016 8.3475 6.93616 8.4755 6.80816C8.60305 6.68061 8.66683 6.52239 8.66683 6.3335C8.66683 6.14461 8.60305 5.98616 8.4755 5.85816C8.3475 5.73061 8.18905 5.66683 8.00016 5.66683C7.81127 5.66683 7.65305 5.73061 7.5255 5.85816C7.3975 5.98616 7.3335 6.14461 7.3335 6.3335C7.3335 6.52239 7.3975 6.68061 7.5255 6.80816C7.65305 6.93616 7.81127 7.00016 8.00016 7.00016ZM8.00016 15.6668C7.07794 15.6668 6.21127 15.4917 5.40016 15.1415C4.58905 14.7917 3.8835 14.3168 3.2835 13.7168C2.6835 13.1168 2.20861 12.4113 1.85883 11.6002C1.50861 10.7891 1.3335 9.92239 1.3335 9.00016C1.3335 8.07794 1.50861 7.21127 1.85883 6.40016C2.20861 5.58905 2.6835 4.8835 3.2835 4.2835C3.8835 3.6835 4.58905 3.20838 5.40016 2.85816C6.21127 2.50838 7.07794 2.3335 8.00016 2.3335C8.92239 2.3335 9.78905 2.50838 10.6002 2.85816C11.4113 3.20838 12.1168 3.6835 12.7168 4.2835C13.3168 4.8835 13.7917 5.58905 14.1415 6.40016C14.4917 7.21127 14.6668 8.07794 14.6668 9.00016C14.6668 9.92239 14.4917 10.7891 14.1415 11.6002C13.7917 12.4113 13.3168 13.1168 12.7168 13.7168C12.1168 14.3168 11.4113 14.7917 10.6002 15.1415C9.78905 15.4917 8.92239 15.6668 8.00016 15.6668ZM8.00016 14.3335C9.47794 14.3335 10.7364 13.8142 11.7755 12.7755C12.8142 11.7364 13.3335 10.4779 13.3335 9.00016C13.3335 7.52239 12.8142 6.26394 11.7755 5.22483C10.7364 4.18616 9.47794 3.66683 8.00016 3.66683C6.52239 3.66683 5.26416 4.18616 4.2255 5.22483C3.18638 6.26394 2.66683 7.52239 2.66683 9.00016C2.66683 10.4779 3.18638 11.7364 4.2255 12.7755C5.26416 13.8142 6.52239 14.3335 8.00016 14.3335Z"
                                            fill="#8D8C9D"
                                          />
                                        </svg>
                                      </span>
                                      <span>What is a Trim?</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row mb-0">
                                  <div className="col-lg-12">
                                    <button
                                      className="getOfferBtn"
                                      onClick={handleShowConfirmOffer}
                                    >
                                      <span>Get Instant Offer</span>
                                    </button>
                                  </div>
                                  <div className="col-lg-12 already_offer text-center">
                                    <p>
                                      Already have an offer?{" "}
                                      <span onClick={handleRetriveOffer}>
                                        Retrieve it here
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        )}
                        {showConfirmOffer && (
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
                                <div className="cob_offer_product">
                                  <Image
                                    src="/images/car1.png"
                                    alt="car"
                                    title="car"
                                    width={285}
                                    height={155}
                                  />
                                </div>
                                <div className="cob_offer_name">
                                  <h2>2022 Ford Ranger</h2>
                                  <p>
                                    <span>2.3L EcoBoost® I4 engine</span>
                                    <span>.</span>
                                    <span>May, 12, 2022</span>
                                  </p>
                                </div>
                                <div className="cob_offer_price">
                                  <h1>$7,000</h1>
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
                                        <span>04</span>
                                      </div>
                                      <span>DAYS</span>
                                    </div>
                                    <div className="oet_col">
                                      <div className="oet_col_in">
                                        <span>00</span>
                                      </div>
                                      <span>hrs</span>
                                    </div>
                                    <div className="oet_col">
                                      <div className="oet_col_in">
                                        <span>00</span>
                                      </div>
                                      <span>mins</span>
                                    </div>
                                    <div className="oet_col">
                                      <div className="oet_col_in">
                                        <span>00</span>
                                      </div>
                                      <span>secs</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cob_foo">
                              {/* <Link href="/offer" className='confirm_offer_btn'>
                            <span>Confirm My Offer</span> 
                            <span>
                              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.5 16L7.075 14.6L12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16Z" fill="#353442"/></svg>
                            </span>
                          </Link> */}
                              <Link href="/offer">
                                <span className="confirm_offer_btn">
                                  <span>Confirm My Offer</span>
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
                                onClick={handleCloseConfirmOffer}
                              >
                                <span>Start Over</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bnr_left_info mob-show">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-sm-6 col-12 review_col bnr_left_points bnr_mob_btm_pts">
                        <div className="reviewRt_info">
                          <ul>
                            <li>
                              <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                  fill="#FFC000"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                  fill="#FFC000"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                  fill="#FFC000"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                  fill="#FFC000"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                  fill="#FFC000"
                                />
                              </svg>
                            </li>
                          </ul>
                          <div className="revDetail">
                            <span>
                              4.9/5 in <b>Google</b> reviews
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12 accredit_col bnr_left_points bnr_mob_btm_pts">
                        <div className="acc_left">
                          <Image
                            src="/images/accredit.png"
                            alt="accredit"
                            title="accredit"
                            width={95}
                            height={36}
                          />
                        </div>
                        <div className="acc_right">
                          <span>BBB Rating: A</span>
                          <span>as of 5/11/2022</span>
                          <span>click for profile</span>
                        </div>
                      </div>
                      <div className="col-lg-12 video_col bnr_left_points bnr_mob_btm_pts">
                        <div className="video_left">
                          <Image
                            src="/images/video.png"
                            alt="video"
                            title="video"
                            width={64}
                            height={36}
                          />
                        </div>
                        <div className="acc_right">
                          <span>Watch How It Works (1:23)</span>
                        </div>
                      </div>
                    </div>
                    <div className="bnr_left_bottom mob-show bnr_left_bottom_mobile">
                      {/* <img
                          src="/images/customer.webp"
                          alt="customer"
                          title="customer"
                      /> */}
                      {/* <Image 
                          src="/images/customer.webp" 
                          alt="customer" 
                          title='customer'
                          width={260}
                          height={320}
                        /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100">
        <div className="container">
          <div className="secHd text-center">
            <span>How It Works</span>
            <h2 className="desk-show">
              <span>Hooray! Selling Your Car Is Now </span>
              <span className="text-highlight long_line">
                100% HASSLE-FREE!
              </span>
            </h2>
            <h2 className="mob-show hooray_hd">
              <span className="hooray_hd_span">
                <span>Hooray! </span> <span>Selling Your Car</span>{" "}
                <span>Is Now 100%</span>
              </span>
              <span className="text-highlight long_line"> HASSLE-FREE!</span>
            </h2>
          </div>
          <div className="secRow row pt50">
            <div className="col-lg-4">
              <div className="hiw_item">
                <div className="hiw_head">
                  <Image
                    src="/images/hiw1.png"
                    alt="Get Instant Offer"
                    title="Get Instant Offer"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="hiw_body">
                  <h2>Get Instant Offer</h2>
                  <p>
                    Enter your vehicle’s basic details and get an idea of what
                    your vehicle is worth in seconds!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hiw_item">
                <div className="hiw_head">
                  <Image
                    src="/images/hiw2.png"
                    alt="Confirm Offer"
                    title="Confirm Offer"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="hiw_body">
                  <h2>Confirm Offer</h2>
                  <p>
                    Snap a couple pics using our super-simple photo tool or
                    enter basic condition details to verify your offer!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hiw_item">
                <div className="hiw_head">
                  <Image
                    src="/images/hiw3.png"
                    alt="SOLD"
                    title="SOLD"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="hiw_body">
                  <h2>SOLD!</h2>
                  <p>
                    Accept our awesome offer and set a time & place to sell.
                    We’re on our way to buy. That’s it!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hiw">
                <div className="hiw_part1">
                  <Image
                    src="/images/left_man_money.svg"
                    alt="money"
                    title="money"
                    width={133}
                    height={277}
                  />
                </div>
                <div className="hiw_part2">
                  <Image
                    src="/images/vehicle.svg"
                    alt="vehicle"
                    title="vehicle"
                    width={860}
                    height={200}
                    className="truckIdx"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-sell-to-whipflip pt100">
        <div className="easy-sell desk-show">
          <Image
            src="/images/easy-sell.svg"
            alt="easy-sell"
            title="easy-sell"
            width={612}
            height={600}
          />
        </div>
        <div className="container">
          <div className="secHd text-left">
            <h2>
              <span>Why Sell to WhipFlip?</span>
            </h2>
            <span>
              WhipFlip is here to put an end to the inconvenience, time-waste,
              and risk you face when selling one of the most expensive and
              difficult assets you own….A CAR!
            </span>
          </div>
          <div className="row wstwRow">
            <div className="col-lg-7">
              <div className="row servicesRow">
                <div className="col-lg-6 siCol">
                  <div className="service-item">
                    <div className="si-head">
                      <Image
                        src="/images/uc.svg"
                        alt="easy-sell"
                        title="easy-sell"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="si-body">
                      <h2>Ultimate Convenience</h2>
                      <p>
                        No more traveling to dealers and months spent wasting
                        time with tire-kickers. We come to you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 siCol">
                  <div className="service-item">
                    <div className="si-head">
                      <Image
                        src="/images/bp.svg"
                        alt="The Best Price"
                        title="The Best Price"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="si-body">
                      <h2>The Best Price</h2>
                      <p>
                        We are digital and pass our savings onto you. Our
                        real-time pricing engine ensures you get a great market
                        price.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 siCol">
                  <div className="service-item">
                    <div className="si-head">
                      <Image
                        src="/images/fgp.svg"
                        alt="Fast Guaranteed Payment"
                        title="Fast Guaranteed Payment"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="si-body">
                      <h2>Fast & Guaranteed Payment</h2>
                      <p>
                        Sell and get paid as soon as today in 3 quick and easy
                        steps! Guaranteed payment on the spot before we take the
                        keys!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 siCol">
                  <div className="service-item">
                    <div className="si-head">
                      <Image
                        src="/images/ts.svg"
                        alt="Trusted Saf"
                        title="Trusted  Saf"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="si-body">
                      <h2>Trusted & Safe</h2>
                      <p>
                        No 3rd parties, we are with you all the way. Full
                        breakdown of how your final offer was made and ways to
                        maximize it. No more "fuzzy" trade-in math!
                      </p>
                      <p>
                        <span className="meet_txt">
                          Meet some of our Concierges!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mob-easy-sell">
          <div className="easy-sell-mob mob-show">
            <Image
              src="/images/easy-sell.svg"
              alt="easy sell"
              title="easy sell"
              width={612}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="happy-customers pt100 pb100">
        <div className="secHd text-center">
          <div className="stars">
            <Image
              src="/images/stars.svg"
              alt="stars"
              title="stars"
              width={325}
              height={145}
            />
          </div>
          <span className="gtagLine">
            WhipFlip has earned 4.9 stars in
            <span>
              <Image
                src="/images/google.svg"
                alt="Goole"
                title="Goole"
                width={70}
                height={30}
              />
              <span> certified reviews</span>
            </span>
          </span>

          <h2 className="desk-show">
            <span>Thousands of </span>
            <span className="text-highlight long_line happy_customer">
              {" "}
              HAPPY CUSTOMERS!
            </span>
          </h2>
          <h2 className="mob-show happy_cus_mob">
            <span>Thousands of </span>
            <span className="text-highlight long_line happy_customer">
              {" "}
              HAPPY CUSTOMERS!{" "}
            </span>
          </h2>
        </div>
        <HappyCustomersSlider />
        <div className="moreReviews text-center">
          <span>
            Want to see more raving reviews? Visit our{" "}
            <a href="#">customers reviews page</a>
          </span>
        </div>
      </div>
      <div className="faq">
        <div className="faqLogo text-center">
          <Image
            src="/images/faq.svg"
            alt="FAQ"
            title="FAQ"
            width={250}
            height={250}
          />
        </div>
        <div className="secHd text-center mt25">
          <h2>
            <span>
              Frequently{" "}
              <span className="asked-questions">Asked Questions</span>
            </span>
          </h2>
        </div>
        <div className="faqWrapper">
          <div className="container">
            <Faq />
            <div className="moreReviews text-center moreLoad">
              <span>
                Looking for more? Visit our <a href="#">FAQs page</a> or{" "}
                <a href="#">Contact us</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ready-to-sell">
        <div className="container h100">
          <div className="row h100">
            <div className="col-lg-7 align-self-center">
              <div className="relHd text-center">
                <h2>Ready to Sell?</h2>
                <p>We are ready to buy now, at your door, and on your time!</p>
                <button className="sell_car_btn">GET INSTANT OFFER</button>
              </div>
            </div>
            <div className="col-lg-5 align-self-end">
              <div className="rts-rtImg">
                <Image
                  src="/images/sell_to_customer.png"
                  alt="Ready to Sell"
                  title="Ready to Sell"
                  width={450}
                  height={395}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sell-car-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 colsciLeft">
              <div className="sciLeft sellCarTxt">
                <h2>
                  <span>"There has to be a better</span>
                  <span> way to sell my car!"</span>
                </h2>
                <p>
                  The process of selling a car still remains very difficult and
                  I never understood why with all of the great technology we
                  have in the modern world. We are consumers too that have sold
                  a few cars ourselves and went through the same struggles you
                  may have faced with wasting precious time with tire-kickers,
                  scammers, and endless travel to receive lowball trade-in
                  offers.
                </p>
                <p>
                  So our thought was simple and our mission was clear – What if
                  there was a way anyone, anywhere could sell their vehicle as
                  fast and as easy as ordering a pizza from a mobile device?{" "}
                </p>{" "}
                <p>
                  No stress, no travel, no risk, no inconvenience. Well, I
                  believe we have created it and it’s here at your fingertips.
                  Go ahead and give us a try!{" "}
                </p>
                <p>
                  We welcome you to join the thousands of other customers who
                  deserved a much better way to sell by using WhipFlip.
                </p>
              </div>
              <div className="arrowPoint desk-show">
                <svg
                  width="65"
                  height="57"
                  viewBox="0 0 65 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M63.5 55C63.5 55 31.0635 23 2.5 23V2C36.3889 2 63.5 55 63.5 55Z"
                    fill="white"
                    stroke="#8AB0D7"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <rect y="3.5" width="4" height="18" fill="white" />
                </svg>
              </div>
              <div className="arrowPointMob mob-show">
                <svg
                  width="56"
                  height="65"
                  viewBox="0 0 56 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.5 63.5C54.5 63.5 22.5 31.0635 22.5 2.5L1.5 2.5C1.5 36.3889 54.5 63.5 54.5 63.5Z"
                    fill="white"
                    stroke="#8AB0D7"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="4.5"
                    width="4"
                    height="18"
                    transform="rotate(-90 3 4.5)"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="col-lg-2 colsciRight">
              <div className="sciRight">
                <div className="scir_hd">
                  <Image
                    src="/images/prof.png"
                    alt="profile"
                    title="profile"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="profDetail">
                  <h3>Roger Clappe</h3>
                  <p>Founder and CEO at WhipFlip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
