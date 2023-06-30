import React from "react";
import Tabs from "react-responsive-tabs";
import Link from "next/link";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-responsive-tabs/styles.css";
import "react-accessible-accordion/dist/fancy-example.css";
import Image from "next/image";
import PoweredBy from "components/common/poweredBy";
export const faqData = {
  howItWorks: () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={0} uuid={0}>
          <AccordionItemHeading>
            <AccordionItemButton>Is WhipFlip Legit?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              100%! We understand that selling a car to WhipFlip may sound way
              too good to be true because selling a car has always been risky,
              time consuming, and often lacks real transparency, right?!.
              Well….we have solved these issues for you! Why? We have been
              through the same insane stress selling/trading a car personally
              ourselves and decided to create THE WAY you want to sell your car
              and how it should be sold in the modern age.
            </p>
            <p>
              Our final offer are real, service is 5 star, and our payment
              NEVER bounces! We buy thousands of cars a year ranging from $1,000
              to $250,000+ from awesome customers like yourself and pride
              ourselves on delivering a phenomenal purchase experience at your
              driveway. Don’t just take our word for it, check out our Google
              certified reviews and our Flippin’ awesome partners below.
            </p>
            <div className="row align-items-center">
              <div className="col-8 col-md-4">
                <Link
                  href="https://www.bbb.org/us/de/wilmington/profile/used-car-dealers/whipflip-inc-0251-92026602/#sealclick"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <img
                    src="https://seal-delaware.bbb.org/seals/blue-seal-250-52-bbb-92026602.png"
                    alt="WhipFlip Inc. BBB Business Review"
                    title="Google reviews"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col-4 col-md-4 d-flex justify-content-center">
                <Link
                  href="https://g.page/whipflip/review?rc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/google-reviews.png"
                    alt="Google Reviews"
                    title="Google reviews"
                    className="img-fluid"
                    width={180}
                    height={20}
                  />
                </Link>
              </div>
              <div className="col-6 col-md-4 pt-2">
                <div className="poweredBy">
                  <Image
                    src="/images/jd.svg"
                    alt="poweredBy"
                    width={180}
                    height={20}
                    preview={false}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>How does WhipFlip work?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We have made it easier than ever to sell a car when you want,
              where your want, and instantaneously. It only takes less than 5
              minutes to sell your car to us in 3 easy steps.
            </p>
            <ol className="mb-4">
              <li>
                Visit our site and enter your vehicles details to get an initial
                initial offer.
              </li>
              <li>
                Use our automated and guided vehicle valuation tool to get an
                offer for us to buy your car.
              </li>
              <li>
                Accept our offer and upload ownership proofs including your
                title, license/ID, and another proof document such as a utility
                bill, vehicle registration, insurance card, etc.
              </li>
            </ol>
            <p>
              From there you will set an appointment to sell that is convenient
              for you. One of our Car Concierges will arrive to complete the
              sale and pay you on the spot.
            </p>
            <div className="social-icon d-flex">
              <Link
                href="https://www.facebook.com/WhipFlip-111080500678406"
                target="_blank"
              >
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip" target="_blank">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What happens after I book an appointment?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              All the hard work (if that is what you could even call it that) is
              done.
            </p>
            <h6>Here&apos;s what happens next.</h6>
            <p>
              Our team will send a confirmation call, text, and email confirming
              your appointment. Before we can deploy our Car Concierge, we will
              need you to confirm the appointment is valid and can include basic
              confirmation of ownership and your cars details.
            </p>
            <p>
              You can simply click on the &quot;Confirm&quot; links sent via
              text or email to complete this step.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>Do you come to me to buy?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yup! That&apos;s all we do. WhipFlip doesn&apos;t operate out of
              physical locations or any 3rd party dealerships to buy your car.
              You deal with us the whole way.....at your driveway.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={4} uuid={4}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What if I have a loan/financing on the vehicle? Will you buy it?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Absolutely! Please see below.</p>
            <h6>
              Positive Equity - Car offer is worth MORE than the payoff amount.
            </h6>
            <p>
              We will pay the difference on the spot via your preferred WhipFlip
              payment method and handle the processing of the final payment to
              the lienholder.
            </p>
            <h6>
              Negative Equity - Car offer is worth LESS than the payoff amount.
            </h6>
            <p>
              You will need to pay us the difference between our offer and owed
              amount via Credit or Debit card. This will be due only when we
              arrive to complete the transaction. From there, we will handle the
              processing of the remaining balance to the lienholder.
            </p>
            <p>We do not accept checks or wire transfers.</p>
            <p>
              <strong>When should I see my payment post?</strong>
              <br />
              Payment is sent{" "}
              <strong>
                <u>IMMEDIATELY</u>
              </strong>{" "}
              to the lienholder as we cannot sell the car through our channels
              for profit until we receive the title (which they possess until
              the balance is $0).
            </p>
            <p>
              Turnaround time to post the payment for the payoff amount is
              normally 4 days upon receipt, but sometimes can take up to 10 days
              depending on your lending institution.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={5} uuid={5}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Honestly, how long does it really take to sell my car to WhipFlip?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We want to buy your car as fast as you can order a pizza. Our
              process to get a initial offer, an offer, and book to sell can
              take less than 5 minutes.
            </p>

            <p>
              {" "}
              <span className="text-bold">
                {" "}
                To get a initial offer? - 30-60+ seconds.
              </span>
            </p>

            <p>
              <span className="text-bold">
                To get an offer? - 1-2+ minutes.
              </span>
            </p>

            <p>
              <span className="text-bold">
                The whole thing!? - 5-10+ minutes -
              </span>{" "}
              This includes getting a initial offer, an offer, uploading
              ownership proof, setting an appointment, and completion of the
              sale at your door.
            </p>

            <p>
              <span className="text-bold">Some good advice:</span> <br />
              Take your time and ensure you are answering all needed vehicle
              questions accurately so you can get the best offer possible. We
              know you want to be the best ever (and always will cheer your on),
              but there is no WhipFlip award given for fastest time to get an
              offer
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={6} uuid={6}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do I need a smartphone to sell to WhipFlip?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If you are just looking for a initial offer or basic information
              about our company you may use any device including a computer. You
              will need to use a smartphone to complete the rest of the process
              to get a WhipFlip offer.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={7} uuid={7}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What geographic areas do you serve?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Currently, WhipFlip is serving most of Pennsylvania, North
              Carolina, Ohio, Delaware and New Jersey. We are growing FAST and
              will be adding many more service areas to handle customer demand
              in the near future.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={8} uuid={8}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Your site says &quot;Out of Area&quot;. Can I still sell?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Absolutely! However, we will need to arrange a time and place
              within our coverage area so that we can complete the transaction
              and store the vehicle for pick up.
            </p>
            <p>
              We hate to see you have to travel but if you desire to sell to us,
              this is the current option. We are growing FAST and will be
              expanding in the near future, hopefully in your area.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={9} uuid={9}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How is my vehicle picked up?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              WhipFlip handles the whole vehicle pickup process and is
              completely free of charge (including transport). When we buy the
              car our Car Concierge will secure the keys via a secure car key
              lock box that can only be accessed by the transporter.
            </p>
            <p>
              The transporter will arrive, access the box, and load the vehicle
              on the truck and take it away. This typically happens the
              following 24-72 hours.
            </p>
            <p>
              Better yet, YOU DO NOT NEED TO BE THERE! You&apos;ve already been
              paid, vehicle has been sold, and you can continue to enjoy life!
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={10} uuid={10}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What happens to my vehicle after its picked up?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              WhipFlip does not sell back into the general public or drive it
              for personal use. All title and ownership transfer is handled 100%
              correctly by us so your vehicle will never come back to haunt you.
            </p>
            <p>
              We have established several partnerships with commercial resale
              outlets to store and sell purchased vehicles.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  whatWeBuy: () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={11} uuid={11}>
          <AccordionItemHeading>
            <AccordionItemButton>Do we buy any car?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Not any car, but most.</p>
            <p>
              {" "}
              <span className="font-weight-bold">Vehicles we DO NOT buy:</span>
            </p>
            <p>
              - Vehicles over 15 years old and/or over $30,000. This will
              increase soon!
            </p>
            <p>
              - Classic cars, ATV&apos;s, motorcycles, RV&apos;s, specialty
              vehicles, or flying saucers (UFO&apos;S).
            </p>
            <p>
              - Non-running vehicles. Ex. Disabled, blown engines/transmission,
              etc.
            </p>
            <p>
              - Salvage/Rebuilt/Reconstructed or branded vehicles - Ex. TMU,
              Lemon, Salvage, etc.
            </p>
            <p>- Dealer or commercial inventory --- not yet.</p>
            <p>- Stolen vehicles. Someone actually asked if we did.</p>
            <p>
              If you don&apos;t see your vehicle listed on our site, please
              continue to check in as we always are adding new vehicles every
              day.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={12} uuid={12}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What if I have a loan/financing on the vehicle? Will you buy it?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Absolutely! Please see below.</p>
            <p className="font-weight-bold">
              Positive Equity - Car offer is worth MORE than the payoff amount.
            </p>
            <p>
              We will pay the difference on the spot via your preferred WhipFlip
              payment method and handle the processing of the final payment to
              the lienholder.
            </p>
            <p className="font-weight-bold">
              Negative Equity - Car offer is worth LESS than the payoff amount.
            </p>
            <p>
              You will need to pay us the difference between our offer and owed
              amount via Credit or Debit card. This will be due only when we
              arrive to complete the transaction. From there, we will handle the
              processing of the remaining balance to the lienholder.
            </p>
            <p className="font-weight-bold">
              We do not accept checks or wire transfers.{" "}
            </p>
            <p>When should I see my payment post? </p>
            <p>
              Payment is sent{" "}
              <span className="font-weight-bold">IMMEDIATELY</span> to the
              lienholder as we cannot sell the car through our channels for
              profit until we receive the title (which they possess until the
              balance is $0).
            </p>
            <p>
              Turnaround time to post the payment for the payoff amount is
              normally 4 days upon receipt, but sometimes can take up to 10 days
              depending on your lending institution.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={13} uuid={13}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do you determine my final offer based on my vehicles
              condition?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              WhipFlip doesn&apos;t ask a customer a ton of cumbersome questions
              to make &quot;guesstimates&quot; on final offer, or just apply
              some broad conservative deduction to determine an offer.
            </p>
            <p>
              {" "}
              We laser in on only what counts which tend to be obvious
              damages/issues that have a true impact on a vehicles value.
              Basically, we don&apos;t knitpick to find and deduct normal wear &
              tear.
            </p>
            <p>
              {" "}
              In addition, our initial offer and final offer are instant to
              give you all the information you need without spending hours
              traveling shopping it around just to Get Instant Offer.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={14} uuid={14}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Should I detail my vehicle? Will it increase in value?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="font-weight-bold">Best answer is - It depends.</p>
            <p>
              Detailing a vehicle for extra &quot;curb appeal&quot; will not
              make a difference in your offer so please save that money for
              something else. However, the vehicle should be reasonably clean
              and free of heavy soiling, mud, or snow to ensure it can be
              assessed by our photo capture inspection tool properly.
            </p>
            <p>
              If needed, a quick $5 car wash should do the trick. You can
              actually pull right out of the car wash and use our website app to
              sell rigth then and there!
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={15} uuid={15}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Should I repair my vehicle to get a better offer?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="font-weight-bold">Best answer - It depends.</p>
            <p>
              A common misconception is that putting money into a vehicle will
              increase its value. This is not true most of the time as you only
              bring the value closer to its full potential. However, the types
              of repairs whether mechanical or cosmetic will cost more than what
              you will get out of the vehicle.
            </p>
            <p className="font-weight-bold">Ex. 1 - Repair NOT Recommended</p>
            <p>
              Jane has a 2009 Honda Accord with a initial offer of $4,500. It
              has a Check Engine Light on and has two body panels with decent
              sized dents that need professional repair. When she used WhipFlip,
              we deducted $780 from the initial offer for these issues. The cost
              to repair these issues is $1,900 if she decided to repair. In this
              case, it is not recommended to pay for these repairs and sell
              as-is.
            </p>
            <p className="font-weight-bold">Ex. 2 - Repair Recommended</p>
            <p>
              John has a 2016 Mercedes E320 sedan with a initial offer of
              $19,000. Recently his airbag/SRS light came on and WhipFlip
              deducted $2,200 from the initial offer. John went to the local
              Mercedes service center and they determined that it was a sensor
              in need of repair and could fix for $960. In this case it is
              recommended to repair this issue.
            </p>
            It&apos;s your choice. We would love to guide you to make the best
            decision by clicking here.
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  quotesAndOffers: () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={16} uuid={16}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is your offer price what I get paid?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes! The offer price shown is the price WhipFlip will pay, at your
              door, on your set appointment time for your car.
            </p>
            <p>
              This assumes the vehicle is as described. Please see the following
              question below.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={17} uuid={17}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is your initial offer or final offer guaranteed?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="font-weight-bold">
              Yes and no. Let&apos;s explain.....
            </p>
            <p>
              <span className="font-weight-bold"> - INITIAL OFFER</span> are not
              final offer nor guaranteed. Based on the vehicle information you
              entered, you will receive a initial offer which is only to be
              taken as an initial estimate of what our offer could be.
            </p>
            <p>
              {" "}
              <span className="font-weight-bold"> - FINAL OFFER</span> are
              guaranteed as long as the details of your vehicle, condition, and
              history are as described. Basically, the information you enter is
              what the offer is based on. If what has been entered isn&apos;t
              reflective of what the vehicle is, the offer could adjust or be
              cancelled.
            </p>
            <p>
              *All final offer are good for 5 days from when they were
              generated. If this time has lapsed, you will need to complete the
              process for a new offer. The good news is it only takes 3 minutes!
            </p>
            <p className="font-weight-bold">Examples of offer adjustments:</p>
            <p>- Wrong year, make, model, and options selected.</p>
            <p>- Mechanical, cosmetic, and history issues not disclosed.</p>
            <p>- Past 5 day limit</p>
            <p>
              - Technical issues with WhipFlip&apos;s web-app resulting in false
              returns.
            </p>
            <p>
              WhipFlip fully understands that mistakes do happen, on both sides.
              No worries! If an adjustment is needed, it will be for obvious
              issues that would affect the vehicles value. We do not nitpick. We
              will work with each customer to come to a fair resolution or
              cancel the offer.{" "}
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={18} uuid={18}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Where do your final offer come from? How are they calculated?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              While it might not be rocket science, its pretty close as there is
              a lot of technology, data, and a massive amount of number
              crunching done by some very very smart people to ensure you are
              getting the best value for your vehicle.
            </p>
            <p className="font-weight-bold">
              Want a more in-depth explanation? Ok, you asked for it.
            </p>
            <p>
              For each car, WhipFlip analyses real-time industry wholesale and
              retail market data, millions of unique data points and variables
              including vehicle demand, historical resale performance, economic
              factors, condition, seasonality, etc. to derive an accurate value
              for your car.
            </p>
            <p>
              We strive to provide best in class final offer for vehicles (aka
              more money for you).
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={19} uuid={19}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you beat Kelley Blue Book, Carmax, Carvana, or trade-in?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              We try! It&apos;s hard to answer that but WhipFlip has several
              great advantages that allow us to deliver great final offer to
              our customers that can be higher than KBB, Carmax, Carvana,
              Webuyanycar.com etc.
            </p>

            <p>
              Typically, our final offer are close to all others and sometimes
              are much higher. If you have an official offer from any of these
              dealers, please give us a call{" "}
              <Link href="tel:8883493189">
                <div>(888) 349-3189</div>
              </Link>{" "}
              and we will see if we can beat it +$100.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={20} uuid={20}>
          <AccordionItemHeading>
            <AccordionItemButton>
              I think I can get more for my car than your offer?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              We get it. We have sold many cars as consumers ourselves, most for
              less than expected. Others around what we wanted.
            </p>
            <p>
              It is possible to get more for your vehicle vs. our offer or even
              another dealerships offer. To do that you must sell it on your own
              for a RETAIL price. However, the time spent, effort, and risk are
              significant and there is no guarantee of success.
            </p>
            <p>
              Keep in mind the more expensive your car is ($5,000+), the harder
              it will be to sell on your own. If your vehicle is financed, it
              will be almost impossible to sell privately. Honesty is our best
              policy here. Sorry if we are delivering tough advice.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={21} uuid={21}>
          <AccordionItemHeading>
            <AccordionItemButton>Can I negotiate my offer?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              We make our best offer first, no negotiation or haggling needed.
              Therefore, the offer a customer receives from WhipFlip is firm.
            </p>
            <p>
              ***Please note in certain circumstances we may increase an offer
              vs. what our &quot;pricing machine said&quot; based on accidental
              overassessment of condition, expensive options/packages not
              accounted for, or lack of needed market data to formulate a
              stronger offer. This mainly pertains to a very expensive vehicle.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={22} uuid={22}>
          <AccordionItemHeading>
            <AccordionItemButton>
              I accepted your offer. Am I obligated to sell?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              Absolutely not! It&apos;s your car and your decision. As a
              courtesy, please contact us at{" "}
              <span className="font-weight-bold">
                <Link href="tel:8883493189">
                  <div>(888) 349-3189</div>
                </Link>
              </span>{" "}
              or here if you have already booked and confirmed an appointment to
              sell.
            </p>
            <p>Hopefully we will see you someday!</p>
            <p className="font-weight-bold">
              Please Read: Post Sale Cancellation
            </p>
            <p>
              Once a Car Concierge completes the final transaction the car is
              deemed owned by WhipFlip and sold as proceeds were paid to the
              customer as well as costs incurred. If an extenuating circumstance
              should occur, please reach out to Customer Support immediately.
            </p>
            <p>
              We may be able to reverse a sale when our funds have been
              returned. A reprocessing fee of $99 could apply. If a vehicle has
              been picked up already (typically within 24-48 hours), WhipFlip
              will be unable to return it or reverse the sale.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={23} uuid={23}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you have to have a perfect car?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              Nope! Conditions of clean, average, needs a little TLC, and
              vehicles that have seen better days have all been sold to
              WhipFlip.
            </p>
            <p>
              {" "}
              A perfect car rarely exists unless its brand new. If we only
              bought excellent condition vehicles we wouldn&apos;t be able to
              meet a lot of great customers.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  appointment: () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={29} uuid={29}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do I reschedule or cancel my appointment?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Bummer! We were excited to meet you, but understand that life
              happens. That&apos;s why when you use WhipFlip we are fast, to the
              door, and fit in the tightest of schedules to get your car SOLD.
            </p>
            <p>
              ***Please keep in mind that your offer is good for 7 days from
              when it was first issued. If you reschedule, it will have to be by
              the end of the 7-days period to retain your offer. If you cancel,
              you can always re-book and retain your offer if its within the
              7-day period.
            </p>
            <p>
              If you need to change or cancel your appointment, you can{" "}
              <Link href="#">
                <div>click here</div>
              </Link>{" "}
              or call{" "}
              <Link href="tel:8883493189">
                <div>(888) 349-3189</div>
              </Link>
            </p>
            <p>
              We LOVE buying cars! It&apos;s all we do. Hopefully we can see you
              soon.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={30} uuid={30}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do I need to be present? Other name on title present?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. All owners must be present to complete the transaction.
              Basically, any name on the TITLE must be there to legally sign off
              ownership of the vehicle.
            </p>
            <p>
              We understand that there might be situations where the other
              owner/name on title cannot be present (deceased, separation, armed
              service deployment, etc.).
            </p>
            <p>
              No worries, give us a call at{" "}
              <Link href="tel:8883493189">
                <div>(888) 349-3189</div>
              </Link>{" "}
              to see what we can do! If you have a Power of Attorney granting
              rights to sell on their behalf, we should be able to buy.
            </p>

            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={31} uuid={31}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Anything I need to do/prepare for my appointment?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Other than ensuring you are at your location at the desired time,
              have all keys and title on hand, and are ready to be paid.
            </p>
            <p>
              The process only takes around 10 minutes (and we&apos;re trying to
              make it even faster) and doesn&apos;t require you to be by our
              side.
            </p>
            <p>
              So just hand us the keys, go back to watching the big game or
              taking care of the kids, and we&apos;ll do our thing. We&apos;ll
              only bother you to set up your preferred payment method to receive
              your cash and sign a buyers agreement.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={32} uuid={32}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What happens to my vehicle after its picked up?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              WhipFlip does not sell back into the general public or drive it
              for personal use. All title and ownership transfer is handled 100%
              correctly by us so your vehicle will never come back to haunt you.
            </p>
            <p>
              We have established several partnerships with commercial resale
              outlets to store and sell purchased vehicles.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  payments: () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={24} uuid={24}>
          <AccordionItemHeading>
            <AccordionItemButton>How and when am I paid?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              A customer is paid on the spot by a WhipFlip Car Concierge.
              Payment happens before we take the keys and the title to the
              vehicle.
            </p>
            <p className="font-weight-bold">Payment Methods:</p>
            <p className="font-weight-bold">
              A customer can choose one of two payment methods we offer. Both
              are on the spot.
            </p>
            <p>
              {`WhipFlip's payment method is a company check through Wells Fargo
              Bank.`}
            </p>
            <p>
              Payment is on the spot at the time of your vehicle transaction,
              check is live, and payment is guaranteed.
            </p>
            <p>
              ***Please be advised that your bank may have their own deposit or
              clearing times and could range from 24 to 72 business hours,
              especially with large dollar amounts.
            </p>
            <p>
              If you are having an issue, please contact our Customer Success
              Team at (888) 349-3189 and select “Bank Verification” option.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={25} uuid={25}>
          <AccordionItemHeading>
            <AccordionItemButton>Do you pay cash?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No. Due to the size of the transaction we cannot drive around with
              big wads of cash on us if you can understand.
            </p>
            <p>
              Our two payment options are a company issued check or electronic
              bank transfer directly into your account.
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  feedback: () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={27} uuid={27}>
          <AccordionItemHeading>
            <AccordionItemButton>
              &quot;WhipFlip is the best!&quot; How do I thank you?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              YOU DON&apos;T! We need thank you for your business and giving us
              the chance to buy your car. Our customers are the reason why we
              exist. We were built for them.
            </p>
            <p>
              If you want to put in a good word, spread the word to anyone you
              know that wants to end the pain of selling a car and/or visit our
              reviews page{" "}
              <Link href="#">
                <div>here</div>
              </Link>{" "}
              to tell others about your experience.
            </p>

            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={28} uuid={28}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What about constructive feedback? AKA &quot;Do better!&quot;
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Just as much as we love positive feedback, we really focus on what
              we can do to provide the absolute best experience for our
              customers. We rely on you to tell us what we missed on, ways to
              improve our service, and an issue with any part of the WhipFlip
              experience.
            </p>
            <p>
              Even better, if you have an idea or feature you would like to see
              that isn&apos;t provided, please email our development team{" "}
              <Link href="#">
                <div>here</div>
              </Link>
            </p>
            <p>
              We are built by consumers, for consumers. Let us know how we can
              improve?{" "}
              <Link href="#">
                <div>Click here.</div>
              </Link>
            </p>
            <div className="social-icon d-flex">
              <Link href="https://www.facebook.com/WhipFlip-111080500678406">
                <div className="facebook-f mr-2"></div>
              </Link>
              <Link href="https://twitter.com/whip_flip">
                <div className="twitter-t"></div>
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
const Faq = ({ icon, short }) => {
  const tabs = [
    { title: "HOW IT WORKS", component: faqData.howItWorks },
    { title: "WHAT WE BUY", component: faqData.whatWeBuy },
    { title: "INITIAL & FINAL OFFER", component: faqData.quotesAndOffers },
    { title: "APPOINTMENT", component: faqData.appointment },
    { title: "PAYMENTS", component: faqData.payments },
    { title: "FEEDBACK", component: faqData.feedback },
  ];

  function getTabs() {
    return (short ? [tabs[0]] : tabs).map((tab, index) => ({
      title: tab.title,
      getContent: tab.component,
      /* Optional parameters */
      key: index,
      tabClassName: "tab",
      panelClassName: "panel",
    }));
  }

  return (
    <div className="faq">
      {icon && (
        <div className="faqLogo text-center">
          <Image
            src="/images/faq.svg"
            alt="FAQ"
            title="FAQ"
            width={250}
            height={250}
          />
        </div>
      )}
      <div className="secHd text-center mt-2">
        <h1>
          <span
            style={{
              lineHeight: 1.5,
            }}
          >
            Frequently <span className="asked-questions">Asked Questions</span>
          </span>
        </h1>
      </div>
      <div className="faqWrapper">
        <div className="container">
          <section className="mt-3 mb-1">
            <div className="container">
              <div className="row mb-4">
                <div className="col-12 material-tab">
                  <Tabs
                    items={getTabs()}
                    tabsWrapperClass={short ? "justify-content-center" : ""}
                  />
                </div>
              </div>
            </div>
          </section>{" "}
          <div className="moreReviews text-center moreLoad">
            <span>
              Looking for more? Visit our <Link href="/faq">FAQs page</Link> or{" "}
              <Link href="/contact-us">Contact us</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
