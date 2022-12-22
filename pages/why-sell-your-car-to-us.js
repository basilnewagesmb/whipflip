import React from "react";
import Image from "next/image";
import MetaHead from "components/common/metaHead";
function Index() {
  return (
    <>
      <MetaHead title="Why Sell Your Car to Us?" />
      <div className="page-header about-company d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <p>Why Sell Your Car to Us?</p>
              <h1>WhipFlip now makes selling your car 100% hassle free</h1>
              <p>No, you are not dreaming. This is REAL!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-6">
              <div className="sub-title">
                <h2 className="font-weight-800">Ultimate Convenience</h2>
              </div>
              <div className="body-text py-2">
                <p>
                  No more traveling to dealers and months spent wasting time
                  with tire-kickers. We come to you.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <picture>
                <Image
                  src="/images/ultimate_convenience.png"
                  alt="Ultimate Convenience"
                  title="Ultimate Convenience"
                  className="img-fluid"
                  width={350}
                  height={350}
                />
              </picture>
            </div>
          </div>
          <div className="row justify-content-between align-items-center flex-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="sub-title">
                <h2 className="font-weight-800">The Best Price</h2>
              </div>
              <div className="body-text py-2">
                <p>
                  We love cars and want to buy them all! We are not picky, never
                  get full, and value every vehicle to its true market value.
                  Our tech and partnerships with the best in the industry always
                  ensure we are pushing our awesome offers to the max for our
                  beloved customers.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <picture>
                <Image
                  src="/images/thebestprice.png"
                  alt="The Best Price"
                  title="The Best Price"
                  className="img-fluid"
                  width={300}
                  height={300}
                />
              </picture>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-6">
              <div className="sub-title">
                <h2 className="font-weight-800">Fast & Guaranteed Payment</h2>
              </div>
              <div className="body-text py-2">
                <p>
                  Paid on the spot before we take title and keys. Better yet,
                  our checks are live and always clear. If your vehicle is
                  financed, we have the fastest payment time to the loan company
                  to ensure your car loan goes bye-bye ASAP!
                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <picture>
                <Image
                  src="/images/fastpayment.png"
                  alt="Fast & Guaranteed Payment"
                  title="Fast & Guaranteed Payment"
                  className="img-fluid"
                  width={300}
                  height={300}
                />
              </picture>
            </div>
          </div>
          <div className="row justify-content-between align-items-center flex-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="sub-title">
                <h2 className="font-weight-800">Trusted & Safe</h2>
              </div>
              <div className="body-text py-2">
                <p>
                  We do not utilize 3rd parties. We are with you every step of
                  the way! Full transparency, no fuzzy trade-in math, and we do
                  it the right way when it comes to transferring ownership so
                  your car NEVER comes back to haunt you.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <picture>
                <Image
                  src="/images/trust_save.webp"
                  alt="Trusted & Safe"
                  title="Trusted & Safe"
                  className="img-fluid"
                  width={300}
                  height={300}
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

export default Index;
