import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PoweredBy from "components/common/poweredBy";
import useWindowDimensions from "utils/useWindowDimension";
import Confetti from "react-confetti";
import { useGetOfferQuery } from "services/offer/api";
import getAmount from "utils/getAmount";
import ShimmerImage from "components/common/shimmerImage";
import moment from "moment";
import useCheckMobile from "utils/checkMobile";
import { useStatesQuery } from "services/util";
function Congrats({ data }) {
  const isMobile = useCheckMobile();

  const { width, height } = useWindowDimensions();
  const [confetti, setConfetti] = useState(false);
  useEffect(() => {
    if (window) {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 7000);
    }
  }, []);
  const { data: states } = useStatesQuery();

  return (
    <div>
      {confetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={200}
          opacity={1}
        />
      )}
      {!isMobile ? (
        <div className="congratsView ">
          <div className="congrats_head_vw congrats_head_web text-center">
            <Image
              src="/images/calendar.svg"
              alt="Calendar"
              title="Calendar"
              width={50}
              height={50}
            />
            <h1>Congratulations!</h1>
            <p>We`re coming to buy your car!</p>
          </div>
          <div className="cv_top_view">
            <div className="container">
              <div className="congrats_top">
                <div className="appDetail appDetail_web">
                  <div className="appDetail_in row align-items-center">
                    <div className="col-lg-4 appDetailLeft appDetailLeft_web">
                      <h2>Appointment Details:</h2>
                      <div className="dayLocation">
                        <div className="sell_day">
                          <span>Day and Time:</span>
                          <h3>
                            {moment(data?.date).format("MMMM Do, YYYY")} at{" "}
                            {data?.time}
                          </h3>
                        </div>
                        <div className="sell_location">
                          <span>Location: </span>
                          <h3>
                            {" "}
                            <span>{data?.street_address} </span>{" "}
                            <span>
                              {data?.appartment}
                              {data?.city},
                              {
                                states?.find((i) => i.abbr === data?.state)
                                  ?.state
                              }
                              ,{data?.zipcode}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 appDetailRight appDetailRight_web">
                      <div className="mobConfirmOff">
                        <div className="confOffBody">
                          <div className="ioCard ioCard_web">
                            <div className="offerProduct-mobi row offerProduct_web justify-content-end">
                              <div className="ofp_left col-5 p-0">
                                <ShimmerImage
                                  width={285}
                                  src={data?.image}
                                  alt={`${data?.year} ${data?.make} ${
                                    data?.model
                                  } ${
                                    data?.enableMultiTrim
                                      ? data?.body
                                      : data?.trim
                                  }`}
                                  title={`${data?.year} ${data?.make} ${
                                    data?.model
                                  } ${
                                    data?.enableMultiTrim
                                      ? data?.body
                                      : data?.trim
                                  }`}
                                  preview={false}
                                  fallback={"/images/no-car-image.png"}
                                />
                              </div>
                              <div className="ofp_right ofp_right_web col-6">
                                <div className="jd_op_img">
                                  <PoweredBy />
                                </div>
                                <h2>{getAmount(data)}</h2>
                                <div className="nm_detail">
                                  <h3>
                                    {data?.year} {data?.make} {data?.model}
                                  </h3>
                                  <div className="vehicle_info">
                                    <span>{data?.trim}</span>
                                    <span>
                                      {data?.mileage
                                        ?.toString()
                                        ?.replace(
                                          /\B(?=(\d{3})+(?!\d))/g,
                                          ","
                                        )}{" "}
                                      miles
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next_process next_process_web">
                <h2>What you`ll need to do next:</h2>
                <div className="np_lst row">
                  <div className="np_item col-4">
                    <div className="row np_item_row">
                      <div className="npi_wrap">
                        <div className="col-12 p-0">
                          <div className="np_item_img">
                            <Image
                              src="/images/mail.svg"
                              alt="mail"
                              title="mail"
                              width={160}
                              height={160}
                            />
                          </div>
                        </div>
                        <div className="col-12 p-0">
                          <div className="np_item_dec">
                            <h2>Respond to Confirmation</h2>
                            <p>
                              Our team will contact you to confirm your vehicle
                              and appointment details. Please respond
                              immediately to finalize confirmation. If we are
                              unable to reach you, we reserve the right to
                              cancel and rescind our offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="np_item col-4">
                    <div className="row np_item_row">
                      <div className="npi_wrap">
                        <div className="col-12 p-0">
                          <div className="np_item_img">
                            <Image
                              src="/images/sign.svg"
                              alt="sign"
                              title="sign"
                              width={160}
                              height={160}
                            />
                          </div>
                        </div>
                        <div className="col-12 p-0">
                          <div className="np_item_dec">
                            <h2>Make Sure Everyone`s There!</h2>
                            <p>
                              {`All owners must be present to sign off on the bill of sale and title.  Please have your ID’s ready as well for ownership confirmation. Additional ownership proofs may be needed such as a phone or utility bill to confirm identity`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="np_item col-4">
                    <div className="row np_item_row">
                      <div className="npi_wrap">
                        <div className="col-12 p-0">
                          <div className="np_item_img">
                            <Image
                              src="/images/key.svg"
                              alt="key"
                              title="key"
                              width={160}
                              height={160}
                            />
                          </div>
                        </div>
                        <div className="col-12 p-0">
                          <div className="np_item_dec">
                            <h2>Have Everything on Hand</h2>
                            <p>
                              {`Please ensure you have all ownership documents ready (i.e. Title or payoff letter), vehicle is cleaned out with all belongings removed, and ID.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="what_happened_we_arrive_web">
                <h2>What happens when we arrive to buy?</h2>
                <div className="we_arrive_list row">
                  <div className="wa_item col-3">
                    <div className="wa_iin">
                      <div className="wa_hd">
                        <Image
                          src="/images/ar1.svg"
                          alt="quick test drive"
                          title="quick test drive"
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className="wa_dec whwa_dec">
                        <h3>Condition Verification</h3>
                        <p>
                          We will match the vehicle condition you entered and
                          conduct a quick test drive.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="wa_item col-3">
                    <div className="wa_iin">
                      <div className="wa_hd">
                        <Image
                          src="/images/ar2.svg"
                          alt="Vehicle Purchase Agreement"
                          title="Vehicle Purchase Agreement"
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className="wa_dec whwa_dec">
                        <h3>Paperwork & Payment</h3>
                        <p>
                          We will complete all proper paperwork (i.e. Vehicle
                          Purchase Agreement) and issue a check on the spot!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="wa_item col-3">
                    <div className="wa_iin">
                      <div className="wa_hd">
                        <Image
                          src="/images/ar3.svg"
                          alt="SOLD "
                          title="SOLD "
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className="wa_dec whwa_dec">
                        <h3>SOLD!</h3>
                        <p>In less than a few minutes of your time!</p>
                      </div>
                    </div>
                  </div>
                  <div className="wa_item col-3">
                    <div className="wa_iin">
                      <div className="wa_hd">
                        <Image
                          src="/images/ar4.svg"
                          alt="handle the pick up"
                          title="handle the pick up"
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className="wa_dec whwa_dec">
                        <h3>Picked Up</h3>
                        <p>
                          No need to worry about your car anymore. We`ll handle
                          pick up and you do not need to be there!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="other_quiz">
            <div className="container">
              <div className="congrats_foo">
                <div className="cf_head">
                  <h2>Any other questions?</h2>
                  <p>
                    <span>
                      Check out our <Link href="/faq">FAQ,</Link> email us at{" "}
                      <a href="mailto:support@whipflip.com">
                        support@whipflip.com
                      </a>{" "}
                      or contact us at{" "}
                      <a href="tel:+18883493189"> (888) 349-3189.</a>
                    </span>
                  </p>
                </div>
                <div className="our_disclaimer">
                  <h2>Our Disclaimer</h2>
                  <p>
                    WhipFlip`s offers for vehicles are made in good faith, based
                    off of real-time industry market values, and primarily based
                    on the customers` input of a vehicle`s details, accuracy in
                    disclosing overall vehicle condition (mechanical, cosmetic,
                    etc.) and being the legal owner. On WhipFlip`s end, we
                    strive to stand behind every offer we make to the dollar.
                    However, on some vehicles, there might not be adequate
                    market data to derive an accurate value to purchase as well
                    as rare instances that our vehicle value/offer generation
                    tool fails to operate as normal, which would cause harm to
                    WhipFlip.
                  </p>
                  <p>
                    If any of these instances above should occur, including
                    deviation from the description of a customer`s vehicle
                    valuation upon verification from a WhipFlip representative
                    (including initial and final offers), we will work with the
                    customer to remedy the situation to come to a reasonable
                    resolution. WhipFlip reserves the right to fairly adjust or
                    rescind any active offer without penalty to WhipFlip, Inc.
                  </p>
                </div>
                <div className="cf_btn cf_btn_web text-center">
                  <Link href="/">
                    <button className="returnHomeBtn">
                      Return to the WhipFlip Website
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="congratsView pt-5">
          <div className="container pt-5">
            <div className="cv_top pt-3">
              <div className="cv_head">
                <Image
                  src="/images/calendar.svg"
                  alt="Calendar"
                  title="Calendar"
                  width={50}
                  height={50}
                />
                <h1>Congratulations!</h1>
                <p>You`re all set to sell your car!</p>
              </div>
              <div className="appDetail">
                <h2>Appointment Details:</h2>
                <div className="appDetail_in">
                  <div className="sell_day">
                    <span>Day and Time</span>
                    <h3>
                      {moment(data?.date).format("MMMM Do, YYYY")} at{" "}
                      {data?.time}
                    </h3>
                  </div>
                  <div className="sell_location">
                    <span>Location</span>

                    <h3>
                      {" "}
                      <span>{data?.street_address} </span>{" "}
                      <span>
                        {data?.appartment} {data?.city}{" "}
                        {states?.find((i) => i.abbr === data?.state)?.state}{" "}
                        {data?.zipcode}{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="mobConfirmOff">
                    <div className="confOffBody">
                      <div className="ioCard">
                        <div className="jd_op_img">
                          <PoweredBy />
                        </div>
                        <h2>Your offer: {getAmount(data)}</h2>
                        <div className="offerProduct-mobi row">
                          <div className="ofp_left col-4 p-0">
                            <ShimmerImage
                              width={"100%"}
                              src={data?.image}
                              alt={`${data?.year} ${data?.make} ${
                                data?.model
                              } ${
                                data?.enableMultiTrim ? data?.body : data?.trim
                              }`}
                              title={`${data?.year} ${data?.make} ${
                                data?.model
                              } ${
                                data?.enableMultiTrim ? data?.body : data?.trim
                              }`}
                              preview={false}
                              fallback={"/images/no-car-image.png"}
                            />
                          </div>
                          <div className="ofp_right col-8 text-left">
                            <h3>
                              {data?.year} {data?.make} {data?.model}
                            </h3>
                            <div className="vehicle_info">
                              <span>{data?.trim}</span>
                              <span>
                                {data?.mileage
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                                miles
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="next_process">
              <h2>What you`ll need to do next:</h2>
              <div className="np_lst">
                <div className="np_item">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="np_item_img">
                        <Image
                          src="/images/mail.svg"
                          alt="mail"
                          title="mail"
                          width={140}
                          height={140}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="np_item_dec">
                        <h2>Respond To Confirmation</h2>
                        <p>
                          {`Our team will contact you to confirm your vehicle and appointment details. Please respond immediately to finalize confirmation. If we are unable to reach you, we reserve the right to cancel and rescind our offer.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="np_item">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="np_item_img">
                        <Image
                          src="/images/sign.svg"
                          alt="sign"
                          title="sign"
                          width={140}
                          height={140}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="np_item_dec">
                        <h2>Make Sure Everyone`s There! </h2>
                        <p>
                          {`All owners must be present to sign off on the bill of
                          sale and title. Please have your ID's ready as well
                          for ownership confirmation. Additional ownership
                          proofs may be needed such as a phone or utility bill
                          to confirm identity.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="np_item">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="np_item_img">
                        <Image
                          src="/images/key.svg"
                          alt="key"
                          title="key"
                          width={140}
                          height={140}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="np_item_dec">
                        <h2>Have Everything on Hand</h2>
                        <p>
                          Please ensure you have all ownership documents ready
                          (i.e. Title or payoff letter), vehicle is cleaned out
                          with all belongings removed, and ID.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="what_happened_we_arrive">
              <h2>What happens when we arrive?</h2>
              <div className="we_arrive_list">
                <div className="wa_item">
                  <div className="wa_hd">
                    <Image
                      src="/images/ar1.svg"
                      alt="mail"
                      title="mail"
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="wa_dec">
                    <h2>Condition Verification</h2>
                    <p>
                      We will match the vehicle condition you entered and
                      conduct a quick test drive.
                    </p>
                  </div>
                </div>
                <div className="wa_item">
                  <div className="wa_hd">
                    <Image
                      src="/images/ar2.svg"
                      alt="mail"
                      title="mail"
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="wa_dec">
                    <h2>Paperwork & Payment</h2>
                    <p>
                      We will complete all proper paperwork (i.e. Vehicle
                      Purchase Agreement) and issue a check on the spot!
                    </p>
                  </div>
                </div>
                <div className="wa_item">
                  <div className="wa_hd">
                    <Image
                      src="/images/ar3.svg"
                      alt="mail"
                      title="mail"
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="wa_dec">
                    <h2>SOLD!</h2>
                    <p>In less than a few minutes of your time!</p>
                  </div>
                </div>
                <div className="wa_item">
                  <div className="wa_hd">
                    <Image
                      src="/images/ar4.svg"
                      alt="mail"
                      title="mail"
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="wa_dec">
                    <h2>Picked Up</h2>
                    <p>
                      {`No need to worry about your car anymore. We'll handle pick
                      up and you do not need to be there!`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="congrats_foo">
              <div className="cf_head">
                <h2>Any other questions?</h2>
                <p>
                  <span>
                    Check out our <Link href="/faq">FAQ,</Link> email us at{" "}
                    <a href="mailto:support@whipflip.com">
                      support@whipflip.com
                    </a>{" "}
                    or contact us at{" "}
                    <a href="tell:8883493189"> (888) 349-3189.</a>
                  </span>
                </p>
              </div>
              <div className="our_disclaimer">
                <h2>Our Disclaimer</h2>
                <p>
                  {`WhipFlip's offers for vehicles are made in good faith,
                  leverage real-time industry market data, and based on the
                  customers input of their vehicles information including
                  condition. Vehicle condition includes mechanical, cosmetic,
                  and historical factors. WhipFlip strives to stand behind every
                  offer made to the dollar. However, offers may change for any
                  reason, at WhipFlip's sole discretion for any undisclosed
                  issues by the customer, technical issues affecting our pricing
                  tool, or limited transaction data for certain makes and models
                  of vehicles. If any of these instances should occur, WhipFlip
                  will work with the customer to arrive at a fair resolution for
                  both parties. We will do the best we can. In the event
                  WhipFlip deems such resolution is unobtainable, we reserve the
                  right to not move forward with the purchase and release from
                  any offer generated without penalty.`}
                </p>
              </div>
              <div className="cf_btn">
                <Link href="/">
                  <button className="returnHomeBtn">
                    Return to the WhipFlip Website
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  if (data.status !== "appointment") {
    return {
      redirect: {
        permanent: false,
        destination: `/prospect/${data.uid}/${data.status}`,
      },
      props: { data },
    };
  } else {
    return {
      props: { data },
    };
  }
}

export default Congrats;
