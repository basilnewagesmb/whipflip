import React, { useEffect } from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Faq from "components/home/faq";
import HappyCustomersSlider from "components/home/slider";
import MetaHead from "components/common/metaHead";
import HomeBanner from "components/home/banner/index";
import { useDispatch, useSelector } from "react-redux";
import ReadyToSell from "components/common/readytoSell";
import { useRouter } from "node_modules/next/router";
import { initialize } from "features/site/siteSlice";
function Index(props) {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  useEffect(() => {
    ga(function () {
      dispatch(initialize(query));
    });
  }, [query]);
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
      <HomeBanner reviews={reviews} />
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
                    {`Enter your vehicle’s basic details and get an idea of what
                    your vehicle is worth in seconds!`}
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
                    {`Accept our awesome offer and set a time & place to sell.
                    We’re on our way to buy. That’s it!`}
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
                        {`No 3rd parties, we are with you all the way. Full
                        breakdown of how your final offer was made and ways to
                        maximize it. No more "fuzzy" trade-in math!`}
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
            <Link href={"/reviews"}>
              <span className="link-primary link_blue">
                customers reviews page
              </span>
            </Link>
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
      <ReadyToSell />
      <div className="sell-car-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 colsciLeft">
              <div className="sciLeft sellCarTxt">
                <h2>
                  <span>{`"There has to be a better`}</span>
                  <span>{`way to sell my car!"`}</span>
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

export default Index;
