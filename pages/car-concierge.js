import React, { useEffect } from "react";
import { isDev, isLocal } from "utils/helper";
import { useDispatch, useSelector } from "react-redux";

import Faq from "components/home/faq";
import HomeBanner from "components/home/banner/index";
import Image from "next/image";
import Link from "next/link";
import MetaHead from "components/common/metaHead";
import ReadyToSell from "components/common/readytoSell";
import ShimmerImage from "components/common/shimmerImage";
import dynamic from "next/dynamic";
import { initialize } from "features/site/siteSlice";
import { useRouter } from "next/router";
import { useState } from "react";

const HappyCustomersSlider = dynamic(() => import("components/home/slider"), {
  loading: () => <p>Loading...</p>,
});

function Index(props) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { query } = useRouter();
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const shouldNotTrack = isLocal("localhost") || isDev();

  useEffect(() => {
    shouldNotTrack &&
      window?.ga &&
      ga(function () {
        dispatch(initialize(query));
      });
  }, [query]);
  return (
    <>
      <MetaHead
        title="Car Concierge"
        ogImage={"https://whipflipnow.s3.amazonaws.com/Whipflip+Logo.png"}
      />
      <div className="bg-light">
        <div className="container  pt100 concierge">
          <div className="row mb-4 concierge-banner">
            <div className="col-12">
              <div className="card banner-card bg-opacity-25 border-0 rounded-5 overflow-hidden">
                <div className="card-body position-relative">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-4 d-flex justify-contents-center d-md-none end-0 top-0 h-100 image-container">
                      <Image
                        src="/images/car-concierge.png"
                        alt="Car Concierge Banner"
                        title="Car Concierge Banner"
                        width={300}
                        height={250}
                        style={{
                          objectFit: "scale-down",
                        }}
                      />
                    </div>
                    <div className="col-md-8 z-1">
                      <h1 className="display-6 font-weight-bold mb-3 main-heading">
                        Meet Your Car <br /> Concierge!
                      </h1>
                      <p className="lead">
                        WhipFlip does not use third parties to purchase <br />{" "}
                        your car. It&apos;s you and us all the way!
                      </p>
                    </div>
                    <div className="col-md-4 d-none d-md-block end-0 top-0 h-100 ">
                      <Image
                        src="/images/car-concierge.png"
                        alt="Car Concierge Banner"
                        title="Car Concierge Banner"
                        width={550}
                        height={500}
                        style={{
                          objectFit: "contain",
                          height: "auto",
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5 text-center">
            <div className="col-12">
              <h2 className="h3 text mb-3">Car Concierges in Pittsburgh, PA</h2>
              <p className="text-highlight text-capitalize blue-arrow-down">
                {" "}
                One of our friendly car concierges will come to your driveway to
                buy your car and pay you on the spot!
              </p>
            </div>
          </div>

          <div className="row pt-3">
            <div className="col-md-6 mb-4">
              <div className="card h-100 concierge-profile">
                <div className="card-body text-center d-flex justify-content-center flex-column align-items-center">
                  <div className="image-wrapper">
                    <Image
                      src="/images/prof.png"
                      alt="money"
                      title="money"
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className="h4 mb-3">Nick</h3>
                  <p className="">
                    Nick is a Pittsburgh native who loves all things cars, punk
                    rock, and being Italian. You can find him at the local...
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100 concierge-profile">
                <div className="card-body text-center d-flex justify-content-center flex-column align-items-center">
                  <div className="image-wrapper">
                    <Image
                      src="/images/prof.png"
                      alt="money"
                      title="money"
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className="h4 mb-3">Nick</h3>
                  <p className="">
                    Nick is a Pittsburgh native who loves all things cars, punk
                    rock, and being Italian. You can find him at the local...
                  </p>
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
