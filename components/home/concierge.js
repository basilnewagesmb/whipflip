import MetaHead from "components/common/metaHead";
import Image from "next/image";
import React from "react";

function Concierge({ concierges }) {
  return (
    <>
      <MetaHead
        title="Meet our car concierge"
        ogImage={"https://whipflipnow.s3.amazonaws.com/Whipflip+Logo.png"}
      />
      <div className="bg-light">
        <div className="container  pt100 concierge">
          <div className="row mb-4 concierge-banner">
            <div className="blue-card-bg"></div>
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
              <h2 className="h3 text mb-3">
                Car Concierges in {concierges?.[0]?.display_market}
              </h2>
              <p className="text-highlight text-capitalize blue-arrow-down">
                {" "}
                One of our friendly car concierges will come to your driveway to
                buy your car and pay you on the spot!
              </p>
            </div>
          </div>

          <div className="row pt-3 align-items-start">
            {concierges.map(({ cc_name, cc_about, image_url }, k) => (
              <div className="col-md-6 mb-4" key={k}>
                <div className="card h-100 concierge-profile">
                  <div className="card-body text-center d-flex justify-content-center flex-column align-items-center">
                    <div className="image-wrapper">
                      <Image
                        src={image_url || "/images/avatar.png"}
                        alt={cc_name}
                        title={cc_name}
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3 className="h5 mb-3">{cc_name}</h3>
                    <p className="">{cc_about}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Concierge;
