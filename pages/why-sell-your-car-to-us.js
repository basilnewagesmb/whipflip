import React from "react";
import Image from "next/image";
import MetaHead from "components/common/metaHead";
import Faq from "components/home/faq";
import ReadyToSell from "components/common/readytoSell";
function Index() {
  return (
    <>
      <MetaHead
        title="The Advantage of Selling Your Car to Us"
        ogTitle="The Advantage of Selling Your Car to Us"
        description="Learn about the WhipFlip advantage. The process is flippin' fast, flippin' safe, and flippin' easy. Discover the easiest way ever to sell your car."
        ogDescription="Learn about the WhipFlip advantage. The process is flippin' fast, flippin' safe, and flippin' easy. Discover the easiest way ever to sell your car."
      />
      <div className="page-header about-company d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <p>Why Sell Your Car to Us?</p>
              <h1>WhipFlip Now Makes Selling Your Car 100% Hassle Free</h1>
              <p>No, you are not dreaming. This is REAL!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-6 order-2 order-md-1">
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
            <div className="col-md-5 col-lg-4 order-1 order-md-2">
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
            <div className="col-md-7 col-lg-6 order-2 order-md-1">
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
            <div className="col-md-5 col-lg-4 order-1 order-md-2">
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
            <div className="col-md-7 col-lg-6 order-2 order-md-1">
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
            <div className="col-md-5 col-lg-4 order-1 order-md-2">
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
            <div className="col-md-7 col-lg-6 order-2 order-md-1">
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
            <div className="col-md-5 col-lg-4 order-1 order-md-2">
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
      <ReadyToSell />
      <div className="pt-5">
        <Faq short={true} />
      </div>
    </>
  );
}

export default Index;
