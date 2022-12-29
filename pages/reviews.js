import React from "react";
import Image from "next/image";
import HappyCustomersSlider from "components/home/slider";
import { useSelector } from "react-redux";
import MetaHead from "components/common/metaHead";
import ReadyToSell from "components/common/readytoSell";
import useCheckMobile from "utils/checkMobile";
function Reviews() {
  const isMobile = useCheckMobile();
  const reviews = useSelector((state) => state.reviews);

  return (
    <>
      <MetaHead title="Reviews" />
      <div className="page-header reviews d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <p>Customer Reviews</p>
              <h1>{`Don't Just Take Our Word For It`}</h1>
              <picture className="pic_review">
                <Image
                  src="/images/star_head.png"
                  alt="Customer Review"
                  title="Customer Review"
                  className="my-2"
                  width={isMobile ? 200 : 370}
                  height={isMobile ? 45 : 80}
                />
              </picture>
              <p>Hear It from of Thousands of Raving Customers</p>
              <p className="reviewTxt">
                {reviews?.count}/5 in recent{" "}
                <span>
                  <picture>
                    <Image
                      src="/images/google-w.png"
                      alt="Customer Review"
                      title="Customer Review"
                      className="mx-1"
                      width={95}
                      height={32}
                    />
                  </picture>
                </span>
                reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isMobile ? "how-it-works pt-4 pb-5" : "how-it-works pt100 pb-5"
        }
      >
        <div className="container">
          <div className="sub-title text-center">
            <h2>
              <span>
                Our Customers{" "}
                <span className="text-noted">
                  <i>FLIPPIN’</i>
                </span>{" "}
                Love Us!
              </span>
            </h2>
          </div>
          <HappyCustomersSlider />
        </div>
      </div>
      <ReadyToSell />
    </>
  );
}

export default Reviews;
