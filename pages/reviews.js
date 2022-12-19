import React from "react";
import Image from "next/image";
import HappyCustomersSlider from "components/home/slider";
import { useSelector } from "react-redux";
function Reviews() {
    const reviews = useSelector((state) => state.reviews);

  return (
    <>
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
                  width={370}
                  height={80}
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
      <div className="how-it-works pt100">
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
    </>
  );
}

export default Reviews;
