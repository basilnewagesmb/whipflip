import React from "react";
import Image from "next/image";
import MetaHead from "components/common/metaHead";
function careers() {
  return (
    <>
      {" "}
      <MetaHead title="Careers" />
      <div className="page-header career d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 page-title text-center">
              <p>Careers</p>
              <h1>Come join the revolution!</h1>
              <p>
                {`WhipFlip's team has over 100 years of combined expertise in all
                facets of the automotive industry, consumer services, and
                digital technology.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-sm-6 pb-3">
              <div className="sub-title">
                <h2 className="font-weight-800">Join our team</h2>
              </div>
              <div className="body-text pt-4">
                <p>
                  WhipFlip is completely changing how consumers sell their car
                  with real technology coupled with phenomenal service….all
                  driven (pun fully intended) by our awesome team.
                </p>
                <p>
                  To deliver the best solution for our customers we are always
                  looking for the best and brightest people to join the team.{" "}
                </p>
                <p>
                  If you love customers, love cars, and love to make a huge
                  impact in our fast growing business we need to speak to you!
                  See job postings below for some awesome opportunities we
                  currently have available.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 pb-3">
              <picture>
                <source type="image/webp" srcSet="images/joinourteam.webp" />
                <Image
                  src="/images/joinourteam.png"
                  alt="Join Our Team"
                  title="Join our team"
                  className="img-fluid mt-4 mt-lg-0"
                  width={540}
                  height={370}
                />
              </picture>
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
                <button className="sell_car_btn">Sell Your Car Now!</button>
              </div>
            </div>
            <div className="col-lg-5 align-self-end">
              <div className="rts-rtImg">
                <Image
                  src="/images/sell_to_customer.png"
                  alt="Ready to Sell"
                  title="Ready to Sell"
                  width={445}
                  height={392}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default careers;
