import "react-responsive-tabs/styles.css";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tabs from "react-responsive-tabs";

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
              Our final offer are real, service is 5 star, and our payment NEVER
              bounces! We buy thousands of cars a year ranging from $1,000 to
              $250,000+ from awesome customers like yourself and pride ourselves
              on delivering a phenomenal purchase experience at your driveway.
              Don’t just take our word for it, check out our Google certified
              reviews and our Flippin’ awesome partners below.
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
              <div className="col-6 col-md-4 pt-2"></div>
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
                offer.
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
              process to get a initial offer, and book to sell can take less
              than 5 minutes.
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
              This includes getting a initial offer, uploading ownership proof,
              setting an appointment, and completion of the sale at your door.
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
              Currently, WhipFlip is serving most of Pennsylvania, Ohio,
              Delaware, New Jersey and part of Minnesota. We are growing FAST
              and will be adding many more service areas to handle customer
              demand in the near future.
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
              In addition, our initial offer and final offer are instant to give
              you all the information you need without spending hours traveling
              shopping it around just to Get Instant Offer.
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
            <p>
              {`A transaction fee up to $99 may apply to cover standard DMV fees
              of titling and transfer as well as supporting our awesome Car
              Concierge staff coming to your location to provide the best car
              selling experience you&apos;ve ever had!`}
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
              great advantages that allow us to deliver great final offer to our
              customers that can be higher than KBB, Carmax, Carvana,
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
              {`WhipFlip&apos;s payment method is a company check through Wells Fargo
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
  "cash-for-cars-columbus-ohio": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Replace Title To Your Car In Columbus, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/how_to_replace_title_to_your_car_in_columbus_ohio"
              >
                replace your car title in Columbus, Ohio
              </a>
              , visit the local BMV office or use their online services.
              Complete the duplicate title application with your VIN, proof of
              ID, and payment (around $15). If the title is lost or stolen,
              submit a sworn statement. The new title will arrive by mail within
              a few weeks.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Does Columbus, OH Require Emissions Testing?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Columbus, OH, requires{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/does_columbus_oh_require_emissions_testing"
              >
                emissions testing
              </a>{" "}
              every two years for vehicles over four years old registered in
              designated urban areas like Franklin County as part of Ohio&apos;s
              program to reduce air pollution. Vehicle owners should check
              specific requirements to ensure compliance and avoid penalties.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Sell A Car In Columbus, OH?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/how_to_sell_a_car_in_columbus_oh"
              >
                sell a car in Columbus, OH
              </a>
              , ensure the title is in your name, complete a bill of sale with
              the buyer, and remove license plates. Complete the transaction at
              a local BMV office to finalize the sale and transfer ownership.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "cash-for-cars-new-jersey": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Transfer A Car Title In NJ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In New Jersey, the buyer must take the signed title, bill of sale,
              and completed Vehicle Registration Application to the local Motor
              Vehicle Commission (MVC) office, where they will pay a title
              transfer fee and sales tax. To avoid penalties, the{" "}
              <a
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/how_to_transfer_a_car_title_in_nj"
                target="_blank"
              >
                transfer
              </a>{" "}
              must be completed within 10 business days, and if there is a lien,
              additional documentation may be required.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can You Sell A Car Without Inspection In NJ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can sell a car in New Jersey{" "}
              <a
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/can_you_sell_a_car_without_inspection_in_nj"
                target="_blank"
              >
                without an inspection
              </a>
              , but it&apos;s important to inform the buyer if the car
              hasn&apos;t passed or is being sold &quot;as-is.&quot; The buyer
              will be responsible for the inspection after the purchase, and you
              must provide a valid title and complete the necessary paperwork.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can You Sell A Car If The Registration Is Suspended In New Jersey?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can sell a car in New Jersey even if the{" "}
              <a
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/can_you_sell_a_car_if_the_registration_is_suspended_in_new_jersey"
                target="_blank"
              >
                registration is suspended
              </a>
              , as the registration status doesn&apos;t affect vehicle
              ownership. However, the buyer must register the car in their name
              and may need to resolve any suspension-related issues before
              legally driving it.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "cash-for-cars-philadelphia": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do I need to cancel my registration when I sell my car in
              Philadelphia, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, when you sell your car in Philadelphia, PA, you should{" "}
              <a
                href="https://www.whipflip.com/blog/do_i_need_to_cancel_my_registration_when_i_sell_my_car_in_pa"
                target="_blank"
                rel="noopener noreferrer"
              >
                cancel your registration
              </a>
              . This helps prevent liability for any future issues related to
              the vehicle. Make sure to notify the Pennsylvania Department of
              Transportation (PennDOT) and return the license plates to avoid
              any potential fees.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Sell A Car In Philadelphia, Pennsylvania?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To{" "}
              <a
                href="https://www.whipflip.com/blog/how_to_sell_a_car_in_pennsylvania"
                target="_blank"
                rel="noopener noreferrer"
              >
                sell a car to WhipFlip in Philadelphia, Pennsylvania
              </a>
              , start by visiting our website to get an instant quote. Provide
              details about your vehicle, such as its make, model, year, and
              condition. Schedule an appointment for a quick inspection and
              final offer.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I Sell My Car With An Open Insurance Claim In PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, you can sell your car with an{" "}
              <a
                href="https://www.whipflip.com/blog/can_i_sell_my_car_with_an_open_insurance_claim_in_pa"
                target="_blank"
                rel="noopener noreferrer"
              >
                open insurance claim in Philadelphia, Pennsylvania
              </a>
              . However, you should notify the insurance company about the sale,
              as they may have a vested interest in the vehicle until the claim
              is resolved. It&apos;s also important to check if the potential
              buyer is willing to purchase a car with an open claim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "cash-for-cars-pittsburgh": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Does Pittsburgh Require Emissions Testing?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, Pittsburgh requires{" "}
              <a
                href="https://www.whipflip.com/blog/does_pittsburgh_require_emissions_testing"
                target="_blank"
                rel="noopener noreferrer"
              >
                emissions testing
              </a>{" "}
              for certain vehicles as part of its air quality management
              efforts. These inspections are designed to ensure that vehicles
              meet state and federal emissions standards, helping to reduce air
              pollution and protect public health.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How Much Is Car Registration In Pittsburgh PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In Pittsburgh, PA, the{" "}
              <a
                href="https://www.whipflip.com/blog/how_much_is_car_registration_in_pittsburgh_pa"
                target="_blank"
                rel="noopener noreferrer"
              >
                cost of car registration
              </a>{" "}
              varies based on several factors, including the type of vehicle and
              its weight. As of 2024, the standard registration fee for a
              passenger vehicle is approximately $38.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to Sell Your Car In Pittsburgh, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To{" "}
              <a
                href="https://www.whipflip.com/blog/sell_your_car_online_in_pittsburgh_pa"
                target="_blank"
                rel="noopener noreferrer"
              >
                sell your car in Pittsburgh, PA
              </a>
              , first research reputable platforms and compare their offers.
              Provide accurate information about your car&apos;s condition,
              mileage, and features, and schedule an inspection with the
              service, often at your convenience. Once the inspection is
              complete, negotiate the final price and terms. If satisfied, agree
              to the sale, and the service will handle the paperwork and
              payment.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-dayton-ohio": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Transfer A Car Title in Dayton, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To{" "}
              <a
                href="https://www.whipflip.com/blog/how_to_transfer_a_car_title_in_ohio"
                target="_blank"
                rel="noopener noreferrer"
              >
                transfer a car title in Dayton, Ohio
              </a>
              , the seller must sign the title in the presence of a notary, and
              the buyer must also sign. Both parties need to provide the
              vehicle&apos;s odometer reading.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do You Need A Notary To Sell A Car In Dayton, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No, you do not need a{" "}
              <a
                href="https://www.whipflip.com/blog/do_you_need_a_notary_to_sell_a_car_in_ohio"
                target="_blank"
                rel="noopener noreferrer"
              >
                notary to sell a car in Dayton, Ohio
              </a>
              . However, the title must be notarized when you transfer
              ownership, meaning you will need a notary&apos;s signature on the
              vehicle title at the time of the sale. Both the seller and buyer
              must be present for this process to complete the legal transfer.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Transfer A Car Title To A New Owner In Dayton, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To{" "}
              <a
                href="https://www.whipflip.com/blog/how_to_transfer_a_car_title_to_a_new_owner_in_ohio"
                target="_blank"
                rel="noopener noreferrer"
              >
                transfer a car title to a new owner
              </a>{" "}
              in Dayton, Ohio, both the buyer and seller must visit a local Ohio
              Bureau of Motor Vehicles (BMV) office. The seller needs to sign
              the title and provide a notarized signature, while the buyer must
              complete an Application for a Certificate of Title.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-altoona-pa": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can I quickly sell my car in Altoona, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Use WhipFlip for a fast sale; they offer instant evaluations and
              manage the entire selling process, including pickup from your
              location.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What documents do I need to sell my car in Altoona, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You&apos;ll need the vehicle title, a valid ID, and maintenance
              records to facilitate the transaction and secure a good price.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is it possible to sell my car in Altoona, PA if it&apos;s not
              running?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Selling a non-running car in Altoona can be challenging. While
              WhipFlip typically buys vehicles that can operate, you might
              consider local junkyards or services that specialize in buying
              non-operational vehicles.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-in-bensalem-pa": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do You Need a Notary to Sell a Car in Bensalem, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No, one of the best things about using our service is we take care
              of all the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/do_you_need_a_notary_to_sell_a_car_in_pa"
              >
                notary work on your title
              </a>
              . The only thing is that you need to be present and ready to sign
              off on the deal. The entire process takes about 10 minutes once we
              arrive to pick up your vehicle.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I Sell My Car with an Open Insurance Claim in Bensalem, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If you currently have an{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/can_i_sell_my_car_with_an_open_insurance_claim_in_pa"
              >
                open insurance claim
              </a>{" "}
              on your automobile, you need to settle it before you can make the
              sale. While we are still interested in purchasing your car, we
              must ensure the claim is settled. You need to talk with your
              insurance company to move forward.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do I Need to Cancel My Registration When I Sell My Car in
              Bensalem, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No, once we transfer the title from your name to ours, your{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.whipflip.com/blog/do_i_need_to_cancel_my_registration_when_i_sell_my_car_in_pa"
              >
                registration
              </a>{" "}
              for this vehicle becomes null and void. There&apos;s no need to go
              to the BMV and stand in line, as this is taken care of for you.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-in-bridgewater-nj": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can You Sell A Car Without Inspection In Bridgewater, NJ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No, you cannot sell a car{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/can_you_sell_a_car_without_inspection_in_nj"
              >
                without an inspection in Bridgewater, NJ
              </a>
              . While WhipFlip offers car-buying services, New Jersey law
              requires a valid inspection certificate for selling a car. The
              Motor Vehicle Commission (MVC) takes these violations seriously to
              ensure road safety. Selling without an inspection could result in
              fines or even legal action. It&apos;s best to get your car
              inspected before attempting to sell it in Bridgewater, New Jersey.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I Get A Refund On Registration If I Sell My Car In
              Bridgewater, NJ?{" "}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, you can typically get a{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/can_i_get_a_refund_on_registration_if_i_sell_my_car_in_nj"
              >
                refund on your registration fees
              </a>{" "}
              if you sell your car in Bridgewater, NJ. You&apos;ll need to
              provide proof of sale, such as a bill of sale, to the local motor
              vehicle department. However, specific refund policies may vary, so
              it&apos;s best to contact the New Jersey Motor Vehicle Commission
              for accurate information.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Sell My Car For Cash In Bridgewater, New Jersey?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              WhipFlip offers a fast and easy way to{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_to_sell_my_car_for_cash_in_new_jersey"
              >
                sell your car for cash in Bridgewater, NJ
              </a>
              . Just visit our website, enter your vehicle&rsquo;s details, and
              get an initial offer through our automated valuation tool. If you
              accept, upload your ownership documents, like the title and proof
              of address. Then, schedule an appointment for a Car Concierge to
              visit you, complete the sale, and pay you on the spot. Selling
              your car is simple and stress-free with WhipFlip.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-in-cincinnati-oh": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the fastest way to sell my car in Cincinnati, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/where_can_i_sell_my_car_for_the_most_money_in_cincinnati"
              >
                fastest way to sell your car in Cincinnati
              </a>{" "}
              is through a direct buyer like WhipFlip. You can quickly receive
              an offer by entering your vehicle details on our website. If you
              accept, we&rsquo;ll arrange an immediate payment and handle all
              the necessary paperwork, making the process swift and hassle-free.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What documents do I need to sell my car in Cincinnati, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To sell your car in Cincinnati, you&apos;ll need to provide a few
              key documents: the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_to_transfer_a_car_title_in_ohio"
              >
                car&apos;s title
              </a>{" "}
              to prove ownership, a valid state ID or driver&apos;s license, and
              ideally, maintenance records to show the car&rsquo;s history.
              WhipFlip can help you gather and prepare all necessary documents
              for a smooth transaction.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is WhipFlip a safe platform to use?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              WhipFlip prioritizes safety and security in all transactions. We
              verify all{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/what_paperwork_do_i_need_to_sell_a_car"
              >
                relevant documents
              </a>{" "}
              and provide a secure platform for you to receive your payment.
              Additionally, we offer a contactless service where we pick up your
              car directly from your chosen location in Cincinnati, ensuring a
              convenient and safe selling experience.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-bethlehem-pa": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What are the steps to sell my car in Bethlehem, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Selling your car in Bethlehem, PA, involves a few simple steps.
              First,{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/what_paperwork_do_i_need_to_sell_a_car"
              >
                gather necessary documents
              </a>{" "}
              like the car title, valid photo ID, and any maintenance records.
              Next, determine your car&rsquo;s value using tools like Kelley
              Blue Book or WhipFlip&apos;s instant valuation tool. Once you set
              a price, you can either list your car for sale or sell directly to
              a service like WhipFlip, which handles paperwork and offers
              instant payment. Finally, ensure the title transfer is completed
              to finalize the sale legally.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do I need to go to PennDOT to transfer ownership when selling my
              car in Bethlehem, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, the title transfer process in Pennsylvania, including
              Bethlehem, requires a trip to a PennDOT-authorized agent or DMV
              office. Both the buyer and seller must sign the title in front of
              a notary, and the buyer will need to pay the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/do_both_parties_have_to_be_present_to_transfer_a_car_title_in_pa"
              >
                title transfer
              </a>{" "}
              fee. Services like WhipFlip simplify this process by handling the
              paperwork for you, saving time and effort.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can I sell my car quickly in Bethlehem, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If yo&apos;re looking to{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/12_best_sites_to_sell_your_used_car_quickly"
              >
                sell your car quickly
              </a>{" "}
              in Bethlehem, using a direct car-buying service like WhipFlip is
              the best option. WhipFlip provides an instant offer for your car,
              handles all the paperwork, and picks up the vehicle from your
              location at a time that&rsquo;s convenient for you. This
              eliminates the need for listing, negotiating with buyers, or
              making multiple trips to complete the sale.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-harrisburg-pa": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What steps should I follow to sell my car in Harrisburg, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Prepare your car by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/does_cleaning_your_car_increase_trade_in_value"
              >
                cleaning it
              </a>{" "}
              and gathering necessary documents like the title. For a
              streamlined process, consider using WhipFlip, which offers
              valuation, handles paperwork, and arranges vehicle pickup.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I sell my car in Harrisburg, PA without a vehicle title?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              It&apos;s challenging to{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_to_prove_car_ownership_without_a_title"
              >
                sell a car without a title
              </a>{" "}
              in Harrisburg. If missing, apply for a duplicate at the
              Pennsylvania Department of Transportation.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How quickly can I sell my car in Harrisburg, PA using WhipFlip?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              WhipFlip can facilitate a quick sale, often completing pickups and
              payments within a few days after receiving your details and making
              an offer.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-lakewood-nj": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can I sell my car fast in Lakewood, NJ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Use online services like WhipFlip for{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_much_is_my_car_worth"
              >
                instant quotes
              </a>{" "}
              and quick, convenient car pickups at your location.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What paperwork do I need to sell my car in Lakewood, NJ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You’ll need the vehicle title, your driver&apos;s license, and
              vehicle registration to sell your car.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Where can I find a buyer for my used car in Lakewood, NJ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Explore options like online marketplaces, local dealerships, or
              services like WhipFlip that offer competitive pricing and handle
              all paperwork.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-lancaster-pa": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What do I need to do to sell my car in Lancaster, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Clean your car and{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/what_paperwork_do_i_need_to_sell_a_car"
              >
                gather important documents
              </a>{" "}
              like the title and maintenance records. Consider using WhipFlip
              for a hassle-free process, as they handle evaluations, pickups,
              and paperwork.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can I get the best price for my car in Lancaster, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Provide detailed information and keep your car well-maintained.
              Use WhipFlip for a{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_much_is_my_car_worth"
              >
                fair market evaluation
              </a>{" "}
              and competitive pricing.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is it necessary to go to the DMV when I sell my car in Lancaster,
              PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No, if you use WhipFlip, we manage all paperwork and DMV
              communications, eliminating the need for you to visit the DMV.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-in-lorain-oh": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do You Need A Notary To Sell A Car In Lorain, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              When selling a car in Lorain, Ohio, it&apos;s important to follow
              certain formalities to ensure a smooth transaction. One key step
              is to have the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/do_you_need_a_notary_to_sell_a_car_in_ohio"
              >
                title transfer notarized
              </a>
              . Having a notary public witness and attest to the title transfer
              is highly recommended to ensure the sale is legally binding and
              complies with Ohio law.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Transfer A Car Title To A New Owner In Lorain, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_to_transfer_a_car_title_to_a_new_owner_in_ohio"
              >
                Transferring the car title
              </a>{" "}
              to Lorain, Ohio, is convenient. First, the buyer and seller must
              write their details on the title certificate. Finally, the seller
              must afford their signature over the title and a notary&apos;s
              seal. Then, the buyer has to go to the Bureau of Motor Vehicles.
            </p>
            <p>
              (BMV) to finalize the transfer and present the notarized title to
              BMV.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I Get A Refund On My Registration If I Sell My Car in Lorain,
              Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No, you generally cannot get a{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/can_i_get_a_refund_on_my_registration_if_i_sell_my_car_ohio"
              >
                refund on your registration fees
              </a>{" "}
              if you sell your car in Lorain, Ohio. Registration fees are
              typically non-refundable, even if you sell the vehicle before the
              registration period ends. However, you might be able to transfer
              the registration to a new vehicle.
            </p>
            <p>
              It&apos;s best to consult the Ohio Bureau of Motor Vehicles (BMV)
              for specific guidelines and any potential exceptions.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-your-car-mt-lebanon-pa": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the best way to sell my car in Mt. Lebanon, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The best way to sell your car in Mt. Lebanon is to use a reputable
              service like WhipFlip, which offers a straightforward{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_much_is_my_car_worth"
              >
                online valuation
              </a>
              , handles all the paperwork, and can pick up the car directly from
              your location.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What documents do I need to sell my car in Mt. Lebanon, PA?{" "}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To sell your car in Mt. Lebanon, you&apos;ll need{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_to_sign_over_your_car_title_in_pennsylvania_pa"
              >
                your car title
              </a>
              , a valid state ID, and proof of vehicle registration. Having your
              maintenance records handy can also help ensure a smooth sale.
              <br />
              <br />
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How quickly can I complete the sale of my car in Mt. Lebanon, PA?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              With services like WhipFlip, you can complete the sale of your car
              quite quickly, often within a day. We manage the entire process,
              from inspection to payment, minimizing delays.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-your-car-for-cash-in-parma-oh": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can I quickly sell my car in Parma, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Selling your car quickly in Parma, Ohio, can be efficiently
              managed by using a direct car buying service like WhipFlip.
              WhipFlip offers an instant purchasing option where you can receive
              an immediate payment. Simply submit your car’s details on our
              website, receive an offer, and if you accept, we’ll handle all the
              paperwork and pick up your car directly from your chosen location.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What do I need to prepare when selling my car in Parma, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              When preparing to sell your car in Parma, Ohio, you should have
              your{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/can_you_transfer_a_car_title_online_in_ohio"
              >
                vehicle&apos;s title
              </a>{" "}
              clear of liens, a valid photo ID, and any service records that
              highlight your car&rsquo;s maintenance history. Ensuring your car
              is clean and in{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/mileage_matters_how_does_it_impact_trade_in_value"
              >
                good condition
              </a>{" "}
              can also help you get the best offer. WhipFlip simplifies this
              process by guiding you through each step and ensuring all
              necessary documentation is ready.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Are there any fees associated with selling my car in Parma, Ohio
              through WhipFlip?{" "}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No, selling your car through WhipFlip in Parma, Ohio, comes with
              no hidden fees. We offer free vehicle valuation, paperwork
              handling, and car pickup from your location. The price we offer is
              the amount you receive, ensuring a transparent and straightforward
              car selling experience.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-in-toms-river-nj": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the quickest way to sell my car in Toms River, NJ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Use online services like WhipFlip for fast quotes and convenient
              home pickup.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              What documents are required to sell my car in Toms River, NJ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You&apos;ll need the vehicle title, driver’s license, and current
              registration.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I sell my car in Toms River, NJ without a vehicle inspection?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, services like WhipFlip may buy your car as-is, without a
              prior inspection.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  "sell-my-car-in-springfield-oh": () => (
    <div className="whipflip-faq">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem key={1} uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do You Need a Notary to Sell a Car in Springfield, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. In Springfield, Ohio, you typically need a{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/do_you_need_a_notary_to_sell_a_car_in_ohio"
              >
                notary to sell a car
              </a>
              . Fortunately, WhipFlip handles this for you so that you will not
              have to worry about finding a notary on your own.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={2} uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I Get a Refund on My Registration If I Sell My Car in
              Springfield, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Ohio does not offer{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/can_i_get_a_refund_on_my_registration_if_i_sell_my_car_ohio"
              >
                refunds on vehicle registration
              </a>{" "}
              when you sell your car. However, if you are planning to buy a new
              car, you can transfer your current plates to your new vehicle.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem key={3} uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>
              How To Transfer a Car Title in Springfield, Ohio?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whipflip.com/blog/how_to_transfer_a_car_title_in_ohio"
              >
                transfer a car title in Ohio
              </a>
              , you need to sign the title in front of a notary, who verifies
              the sale. After that, the new owner must take the signed title to
              the Bureau of Motor Vehicles (BMV) to complete the transfer. If
              you are selling your car to WhipFlip, they handle this part of the
              process for you.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
const Faq = ({ icon, short, seoSlug }) => {
  let tabs = [
    { title: "HOW IT WORKS", component: faqData.howItWorks },
    { title: "WHAT WE BUY", component: faqData.whatWeBuy },
    { title: "INITIAL & FINAL OFFER", component: faqData.quotesAndOffers },
    { title: "APPOINTMENT", component: faqData.appointment },
    { title: "PAYMENTS", component: faqData.payments },
    { title: "FEEDBACK", component: faqData.feedback },
  ];
  if (faqData[seoSlug]) {
    tabs = [{ title: null, component: faqData[seoSlug] }];
  }
  // console.log(faqData[seoSlug]);
  function getTabs() {
    return (short ? [tabs[0]] : tabs).map((tab, index) => ({
      title: tab.title,
      getContent: tab.component,
      /* Optional parameters */
      key: index,
      tabClassName: tab.title ? "tab" : "invisible",
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
