import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ConfirmOffer from "./confirmeOffer";
import InstantOffer from "./instantOffer";
import Reviews from "./review";
import VideoModal from "./videoModal";
function HomeBanner({ reviews }) {
  const { initialOffer } = useSelector((state) => state.offer);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="home-banner">
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />
      <div className="container h100">
        <div className="hb_wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="bnr_left">
                <div className="bnr_lin_top">
                  <div className="bnr_left_head">
                    <h1>
                      <span>
                        The <span className="text-highlight">Best</span> Way To
                      </span>
                      <span>Sell Your Car - </span>
                      <span>Period!</span>
                    </h1>
                    <span>We come to you. Paid on the sport!</span>
                  </div>
                  <div className="bnr_left_info desk-show">
                    <div className="row">
                      <Reviews reviews={reviews} />
                      <div className="col-lg-6 accredit_col p-0 bnr_left_points">
                        <div className="acc_left">
                          <a
                            href="https://www.bbb.org/us/de/wilmington/profile/used-car-dealers/whipflip-inc-0251-92026602/#sealclick"
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            <Image
                              src="/images/acc-text.png"
                              alt="profile"
                              title="profile"
                              width={200}
                              height={50}
                            />
                          </a>
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
                            onClick={() => {
                              setIsVideoOpen(true);
                            }}
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
                    {initialOffer ? <ConfirmOffer initialOffer={initialOffer} /> : <InstantOffer />}
                  </div>
                </div>
                <div className="bnr_left_info mob-show">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6 col-12 review_col bnr_left_points bnr_mob_btm_pts">
                      <Reviews mob={true} reviews={reviews} />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 accredit_col bnr_left_points bnr_mob_btm_pts">
                      <div className="acc_left">
                        <a
                          href="https://www.bbb.org/us/de/wilmington/profile/used-car-dealers/whipflip-inc-0251-92026602/#sealclick"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <Image
                            src="/images/accredit.png"
                            alt="accredit"
                            title="accredit"
                            width={95}
                            height={36}
                          />
                        </a>
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
                          onClick={() => {
                            setIsVideoOpen(true);
                          }}
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
  );
}

export default HomeBanner;
