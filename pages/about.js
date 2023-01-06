import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MetaHead from "components/common/metaHead";
import ReadyToSell from "components/common/readytoSell";
function About() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  return (
    <>
      <MetaHead title="About" />
      <div className="page-header about-company d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <p>About Us</p>
              <h1>We Are Built by Consumers for Consumers</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt-5">
        <div className="container">
          <div className="sub-title text-center">
            <span>Our Values</span>
            <h2>
              <span>
                We are guided by our core values for every customer, every
                employee, every car…every single day!
              </span>
            </h2>
          </div>
          <div className="secRow row pt50">
            <div className="col-lg-4">
              <div className="card blue_card" ref={ref}>
                <div className="card-body text-center">
                  <div className="card-icon">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/icon_customerfirst.webp"
                      />
                      <Image
                        src="/images/icon_customerfirst.png"
                        alt="Customer First"
                        title="Customer First"
                        className="img-fluid"
                        width={128}
                        height={164}
                      />
                    </picture>
                  </div>
                  <h2>Customer First</h2>
                  <p>
                    We exist because of you. We buy cars exactly how you would
                    want to sell one. We constantly obsess about how we can
                    deliver the best car selling experience ever!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card blue_card"
                style={{
                  height: height,
                }}
              >
                <div className="card-body text-center">
                  <div className="card-icon innovation">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/icon_innovation.webp"
                      />
                      <Image
                        src="/images/icon_customerfirst.png"
                        alt="Innovation"
                        title="Innovation"
                        className="img-fluid"
                        width={128}
                        height={164}
                      />
                    </picture>
                  </div>
                  <h2>Innovation</h2>
                  <p>
                    Our technology and at-the-driveway purchasing service create
                    the ultimate WIN for the customer, and we are always
                    creating new ways to be even better.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card blue_card"
                style={{
                  height: height,
                }}
              >
                <div className="card-body text-center">
                  <div className="card-icon">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/icon_trust.webp"
                      />
                      <Image
                        src="/images/icon_trust.png"
                        alt="Trust"
                        title="Trust"
                        className="img-fluid"
                        width={128}
                        height={164}
                      />
                    </picture>
                  </div>
                  <h2>Trust</h2>
                  <p>
                    Trust is everything, especially in a vehicle transaction. We
                    pride ourselves in doing it the right way and making every
                    customer amazingly comfortable!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center my-5 vspace-65">
            <div className="col-12 col-lg-6">
              <div className="sub-title">
                <p className="mb-0">Our Mission</p>
                <h2 className="mb-4">
                  Make selling any car as fast and as easy as ordering a pizza!
                </h2>
              </div>
              <div className="body-text">
                <p>
                  {` Why is selling a car whether on your own or trading in still a
                  huge pain? It's time for change.`}
                </p>
                <p>
                  WhipFlip is here to put an end to the inconvenience,
                  time-waste, and risk you face with one of the most expensive
                  and difficult assets to sell...a car. Be a part of the
                  WhipFlip revolution and sell your car the way it should be. We
                  are ready to buy it now, at your door, and on your time!
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <picture>
                <source
                  type="image/webp"
                  srcSet="images/sell_fastandeasy.webp"
                />
                <Image
                  src="/images/sell_fastandeasy.png"
                  alt="Sell Fast and Easy"
                  title="Sell Fast and Easy"
                  className="img-fluid mt-4 mt-lg-0"
                  width={537}
                  height={389}
                />
              </picture>
            </div>
          </div>
          <div className="row align-items-center my-5 vspace-65 flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6 text-center">
              <picture>
                <source
                  type="image/webp"
                  srcSet="images/whipflip_concierges.webp"
                />
                <Image
                  src="/images/whipflip_concierges.png"
                  alt="Car Concierges"
                  title="Car Concierges"
                  className="img-fluid mt-4 mt-lg-0"
                  width={219}
                  height={500}
                />
              </picture>
            </div>
            <div className="col-12 col-lg-6">
              <div className="sub-title">
                <p className="mb-0">People You Can Trust </p>
                <h2 className="mb-4">Meet Our Concierges!</h2>
              </div>
              <div className="body-text">
                <p>
                  {`WhipFlip does not use third parties to purchase your car. It's you and us all the way!`}
                </p>
                <p>
                  {`Our professional Car Concierges will
                  come to you at the time and place you set to sell your car.
                  Before they arrive, you'll receive a text or email of which
                  Concierge will be arriving at your place. You'll instantly
                  recognize them from the WhipFlip uniform! In only a few
                  minutes time, our Concierge will verify your vehicle's
                  condition, and hand you the check!`}
                </p>
              </div>
            </div>
          </div>
          <div className="row vspace-65">
            <div className="col-12">
              <div className="text-center body-text founder-quote">
                <div className="px-5">
                  <h2>Meet Our Founder & CEO</h2>
                  <p>
                    We are consumers too that have tried to sell a few cars
                    ourselves, often with the same struggles most face every
                    day.
                  </p>
                  <p>
                    {`The world is changing to have practically anything that you
                    need right at your fingertips, done from a smartphone, and
                    delivered to you instantly. So why can't the same exact
                    experience exist for selling a car? We are motivated
                    everyday to truly live by our values and always understand
                    who makes us exist - YOU!`}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-center">
                    <Image
                      src="/images/prof.png"
                      alt="Roger Clappe"
                      title="Founder and CEO at WhipFlip"
                      className="thumb-64"
                      width={64}
                      height={64}
                    />
                  </p>
                  <p>
                    Roger Clappe <br />{" "}
                    <span className="text-sm text-muted">
                      Founder and CEO at WhipFlip
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReadyToSell />
    </>
  );
}

export default About;
