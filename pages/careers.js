import React from "react";
import Image from "next/image";
import MetaHead from "components/common/metaHead";
import { Empty } from "antd";
import { Tag } from "antd";

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
              <h1>Come Join the Revolution!</h1>
              <p>
                {`WhipFlip's team has over 100 years of combined expertise in all
                facets of the automotive industry, consumer services, and
                digital technology.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works ">
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
      <div className="how-it-works ">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12 pb-3">
              <div className="sub-title">
                <h2 className="font-weight-800">Open Position</h2>
              </div>
              <div className="py-3">
                <div className="border-bottom py-3 d-flex justify-content-between align-items-center">
                  <h6 className="fw-normal">Data Scientist</h6>
                  <div>
                    <Tag>Remote</Tag>
                    <Tag>LA</Tag>
                  </div>
                </div>
                <div className="border-bottom py-3 d-flex justify-content-between align-items-center">
                  <h6 className="fw-normal"> Full-stack developer</h6>
                  <div>
                    <Tag>LA</Tag>
                  </div>
                </div>
                <div className="border-bottom py-3 d-flex justify-content-between align-items-center">
                  <h6 className="fw-normal">Growth Manager </h6>
                  <div>
                    <Tag>Remote</Tag>
                    <Tag>LA</Tag>
                  </div>
                </div>
              </div>
              {/* <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="No open positios"
              /> */}
              <div className="body-text pt-4">
                <p>
                 {`don't see the right job ? Contact us at`}{" "}
                  <a href="mailto:join@whipflip.com" className="text-primary">
                    join@whipflip.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default careers;
