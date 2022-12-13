import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ConfirmOffer from "./confirmeOffer";
import InstantOffer from "./InstantOffer";
import Reviews from "./review";
function HomeBanner({attributes}) {
  const [showConfirmOffer, setShowConfirmOffer] = useState(false);

  return (
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
                        The <span className="text-highlight">Best</span> Way To
                      </span>
                      <span>Sell Your Car - </span>
                      <span>Period!</span>
                    </h1>
                    <span>We come to you. Paid on the sport!</span>
                  </div>
                  <div className="bnr_left_info desk-show">
                    <div className="row">
                      <Reviews attributes={attributes} />
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
                    <InstantOffer />
                    <ConfirmOffer />
                  </div>
                </div>
                <div className="bnr_left_info mob-show">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6 col-12 review_col bnr_left_points bnr_mob_btm_pts">
                      <Reviews mob={true} attributes={attributes}/>
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
  );
}

export default HomeBanner;
