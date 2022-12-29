import MetaHead from "components/common/metaHead";
import React, { useEffect, useRef, useState } from "react";
import useCheckMobile from "utils/checkMobile";
function Index() {
  const isMobile = useCheckMobile();

  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  return (
    <>
      <MetaHead title="Private Sale vs. Trading In" />
      <div className="page-header faq d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center mt-5">
              <h1>Private Sale vs.{isMobile && <br />} Trading In</h1>
              <p className="pt-4">{`Here's some great advice!`}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`how-it-works ${
          isMobile ? " pt-4 " : " pt100 "
        } pb-5 body-text`}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <p className="body-text">
                {`When it comes time to get rid of your car most have turned to
                traditional methods that have existed for many years. They are
                private sale and dealership trade-in. Both methods have their
                benefits, but some significant drawbacks as well. We'll keep
                WhipFlip out of it (for now) and give some good advice on these
                methods as well as how to use them to your advantage.`}
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="card">
                <div className="card-body p-0">
                  <div className="border-bottom card-body-custom column-one">
                    <h2>Private Sale</h2>
                    <p>
                      {`Using listing sites like Craigslist, AutoTrader. and Ebay
                      Motors as well as the good ole "For Sale" sign in the
                      window to find a buyer for your car. This is the hardest
                      way to sell your car.`}
                    </p>
                  </div>
                  <div className="border-bottom card-body-custom column-two">
                    <h3>Advantages</h3>
                    <ul>
                      <li>Potential retail sale price, aka more money!</li>
                      <li>Done at or near your location.</li>
                      <li>No mundane paperwork.</li>
                      <li>
                        Able to comfort another buyer by knowing your vehicles
                        history.
                      </li>
                    </ul>
                  </div>
                  <div className="border-bottom-colored card-body-custom column-three">
                    <h3>Disadvantages</h3>
                    <ul>
                      <li> Time and effort spent can be immense.</li>
                      <li>
                        Level of difficulty significantly increases with car
                        price, especially if you have a loan on it.
                      </li>
                      <li>
                        Can take months to sell with no guarantee of success.
                      </li>
                      <li>
                        Dealing with strangers who cancel, risk your personal
                        safety, or tire-kick.
                      </li>
                      <li>
                        Limited exposure from oversaturated listing sites.
                      </li>
                      <li>
                        Susceptible to scams, payment issues, or improper
                        ownership transfer.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="border-bottom-colored card-body-custom colored column-colored"
                    style={{
                      height: height,
                    }}
                  >
                    <h3>The WhipFlip Tips </h3>
                    <h6>Setting expectations & price</h6>
                    <p>
                      {`First, set the right expectations with yourself as this is
                      not going to be easy. What do you want out of your car? Do
                      your research from top consumer vehicle sites to see what
                      its true market value is. It is not recommended to just
                      follow everyone else's prices on listing sites as normally
                      they are too high. Remember, people want to get a great
                      deal. How can you position your car to be a good deal and
                      attract more interest?`}
                    </p>
                    <h6>Dealing with appointments & people</h6>
                    <p>
                      {`This is where you set the terms of how the process is
                      going to go. Make sure to respond promptly to all
                      questions a prospective buyer might have and be honest.
                      When the time comes for an appointment to show the car,
                      let them know that you will need them to confirm ahead of
                      time and arrange for a nearby location, preferably in a
                      public area like a shopping center.`}
                    </p>
                    <h6>Payment</h6>
                    <p>
                      {`Before an appointment is ever made, you should state your
                      acceptable payment options. Payment plans, Paypal,
                      credit/debit cards, and personal checks should be avoided.
                      Typically you should ask for a bank certified check or
                      verified electronic funds transfer. Cash is always great
                      too but ensure you can spot a counterfeit bill.`}
                    </p>
                    <h6>Ownership transfer</h6>
                    <p>
                      {`To complete the sale, you should have an automobile buyers
                      agreement ready to be filled in and signed. You can find
                      many downloadable versions of this by googling it. Also,
                      make sure both parties sign off on the title the correct
                      locations. Basically you fill and sign in the "Seller"
                      section and the other party does the same for the
                      "Purchaser" section.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                isMobile ? "col-lg-6 col-md-10 mt-4" : "col-lg-6 col-md-10"
              }
            >
              <div className="card">
                <div className="card-body p-0">
                  <div className="border-bottom card-body-custom column-one">
                    <h2>Dealership Sale/Trade-In</h2>
                    <p>
                      {`We'll start this off by saying that all dealers aren't
                      necessarily bad. You will find that some are good and some
                      are not. There are a lot of key advantages that dealers
                      can provide you, especially over private sale. However,
                      most dealership processes remain painful to sell or
                      trade-in your vehicle. That's not your problem to fix.`}
                    </p>
                  </div>
                  <div className="border-bottom card-body-custom column-two">
                    <h3>Advantages</h3>
                    <ul>
                      <li>
                        Can trade/buy vehicles with loans on them vs. private
                        sale.
                      </li>
                      <li>
                        Safer to transact with a dealer, funding guaranteed,
                        ownership transfer done right.
                      </li>
                      <li>
                        Tax breaks could save you a couple hundred dollars if
                        trading for another car.
                      </li>
                      <li>
                        Sell or trade when you want to stop continued
                        depreciation.
                      </li>
                    </ul>
                  </div>
                  <div className="border-bottom-colored card-body-custom column-three">
                    <h3>Disadvantages</h3>
                    <ul>
                      <li>
                        Not all dealers will buy your car unless you buy one of
                        theirs.
                      </li>
                      <li>
                        {`Numbers games - What's your car really worth? What's the
                        "real deal?"`}
                      </li>
                      <li>
                        Can take a few days and several hours spent traveling to
                        several dealers to get just a quote.
                      </li>
                      <li>
                        Trade-In offers are typically much lower than private
                        sale or other car buying services.
                      </li>
                      <li>
                        Pressure to sell and/or buy to meet someones quota.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="border-bottom-colored card-body-custom colored column-colored"
                    ref={ref}
                  >
                    <h3>The WhipFlip Tips </h3>
                    <h6>Find the right dealer</h6>
                    <p>
                      {`If you are looking to just sell your car you may want to
                      start by calling dealerships that sell the same make as
                      your car (ex. Honda dealer for your Honda Accord) to see
                      if they will buy your car outright. Dealerships are
                      looking to acquire inventory that fits their lot. If your
                      car fits into what they desire to buy, you may have a
                      better chance of selling it to them for a fair price.`}
                    </p>
                    <h6>Negotiating price</h6>
                    <p>
                      {`The first part of this is based on if you are trading in
                      for another car. It is best to negotiate the new/used car
                      price FIRST, without including your trade in the deal
                      equation. From there you can now just work on what your
                      car is worth to come to a clear understanding of the
                      entire car deal.`}
                    </p>

                    <p>
                      {`All dealers including WhipFlip price their offers off of
                      the true WHOLESALE market. To some this might seem low
                      based on what they see "online" at a retail level but keep
                      in mind that their numbers are based off of real sales
                      results within the industry and are representative to
                      actual true market value. However, it depends on how low
                      or high they are willing to go within the market that
                      makes the difference between a good offer or a low-ball
                      offer.`}
                    </p>
                    <h6>In doubt, keep shopping</h6>
                    <p>
                      {`If you desire to take some extra time and see what else is
                      out there.....go ahead! All dealers have different needs
                      and will go to certain lengths to earn you as a customer.
                      It can be like finding a needle in a haystack but it is
                      beneficial to get a few different offers for peace of
                      mind. What you will find is most offers will be close to
                      each other as all dealers operate within the same market
                      values for cars. If you see an offer significantly higher,
                      make sure you check the math before signing on that dotted
                      line.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 py-5">
            <div className="col-12">
              {" "}
              <div className="card">
                <div className="card-body p-0">
                  <div className="border-bottom-colored card-body-custom colored column-colored">
                    <h2>Try WhipFlip?</h2>
                    <p>
                      {` Ok, we couldn't help ourselves here! Both methods above have their pro's and con's. WhipFlip was created to solve these issues while providing great benefits to YOU the consumer to get a great deal. sell your car quickly. and do it in a safe manner. `}
                    </p>
                    <p>
                     {`So if you don't want to deal with the painful task of
                      selling your car on your own or going to the dealership.
                      and just want to get it SOLD now...`}<b>try WhIpFlIp.</b>
                    </p>
                    <h3>Our Advantages</h3>
                    <ul>
                      <li>No strangers or tire-kickers wasting your time.</li>
                      <li>
                        {" "}
                        Sell now, not in days or months. 3 easy steps. in less
                        than 5 minutes.
                      </li>
                      <li>We come to you. Just tell us when and where.</li>
                      <li>Paid on the spot and ownership transfer handled.</li>
                      <li>
                        No weird trade-in math or low-balls. Real competitive
                        true market offers.
                      </li>
                      <li>
                        Spend time living your best life.....not trying to sell
                        your car.
                      </li>
                    </ul>
                  </div>
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
