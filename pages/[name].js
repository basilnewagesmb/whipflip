import React, { useEffect } from "react";

import BlogCard from "components/sell-my-car/BlogCard";
import CarCard from "components/sell-my-car/CarCard";
import CardSkeleton from "components/home/banner/cardSkeleton";
import Concierge from "components/home/concierge";
import ConfirmOffer from "components/home/banner/confirmeOffer";
import Faq from "components/home/faq";
import Image from "next/image";
import InstantOffer from "components/home/banner/instantOffer";
import Link from "node_modules/next/link";
import MetaHead from "components/common/metaHead";
import ReviewCard from "components/sell-my-car/ReviewCard";
import SimpleBLog from "components/blogs/blogCard";
import { setIsModalOpen } from "features/offer/offerSlice";
import useCheckMobile from "utils/checkMobile";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

const restrictedUrsl = [
  "cash-for-cars-new-jersey",
  "cash-for-cars-wilmington-de",
  "how-much-is-a-2015-nissan-altima-worth",
  "cash-for-cars-akron-ohio",
  "cash-for-cars-cleveland-oh",
  "cash-for-cars-dayton-ohio",
  "cash-for-cars-edison-nj",
  "cash-for-cars-youngstown-oh",
  "sell-my-2019-tesla-model-3",
  "sell-my-audi-a5-sportback",
  "sell-my-car-in-cincinnati-oh",
  "sell-my-car-in-elizabeth-nj",
  "sell-my-chevy-silverado-1500",
  "sell-my-kia-forte-gt",
  "sell-my-car-in-toms-river-nj",
  "cash-for-cars-in-canton-oh",
  "cash-for-cars-in-trenton-nj",
  "cash-for-cars-minneapolis-mn",
  "sell-your-car-for-cash-in-parma-oh",
  "sell-my-2020-alfa-romeo-giulia",
  "sell-my-2022-honda-civic",
  "sell-my-volkswagen-arteon",
  "sell-my-volvo-s90",
  "sell-my-car-dayton-ohio",
  "sell-my-audi-a4",
  "sell-my-audi-q7",
  "sell-my-audi",
  "sell-my-cadillac",
  "sell-my-car-in-saint-paul-mn",
  "sell-my-ev",
  "sell-my-ford-f150",
  "sell-my-ford",
  "sell-my-honda-hr-v",
  "sell-my-honda-pilot",
  "sell-my-porsche-911",
  "sell-my-subaru",
  "sell-my-vw-jetta",
  "sell-my-audi-a6",
  "sell-my-audi-q5",
  "sell-my-audi-r8",
  "sell-my-car-in-bensalem-pa",
  "sell-my-car-in-bridgewater-nj",
  "sell-my-car-in-duluth-minnesota",
  "sell-my-car-in-lorain-oh",
  "sell-my-car-in-new-brunswick-nj",
  "sell-my-car-in-princeton-nj",
  "sell-my-car-in-springfield-oh",
  "sell-my-car-in-woodbridge-township-nj",
  "sell-my-ford-escort",
  "sell-my-ford-maverick",
  "sell-my-ford-probe",
  "sell-my-subaru-impreza",
  "sell-my-subaru-wrx",

  "cash-for-cars-columbus-ohio",
  "cash-for-cars-philadelphia",
  "cash-for-cars-pittsburgh",
];
function SEO({ blogs, reviews, car, singleBlog, concierges, seoSlug }) {
  const { initialOffer } = useSelector((state) => state.offer);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const isMobile = useCheckMobile();
  const { push } = useRouter();
  const isLocation = car?.vehicles?.[0]?.type === "location";
  if (concierges) {
    return <Concierge concierges={concierges} />;
  }
  return (
    <div
      className="seo_page"
      style={{
        paddingTop: isMobile ? "46px" : "66px",
      }}
    >
      <MetaHead
        title={car?.vehicles?.[0]?.title}
        ogTitle={car?.vehicles?.[0]?.title}
        ogImage={car?.vehicles?.[0]?.banner_image}
        description={car?.vehicles?.[0]?.description}
        ogDescription={car?.vehicles?.[0]?.description}
      />
      <div className="seo_banner seo_banner2">
        <div
          className={`row seo-row seo-row m-0 ${
            initialOffer && "initial_offer"
          }`}
        >
          <div className="col-lg-7 p-0 seo_banner_left h-100">
            {car?.vehicles?.[0]?.banner_image && (
              <Image
                placeholder="blur"
                src={car?.vehicles?.[0]?.banner_image}
                width={1153}
                height={690}
                blurDataURL={
                  "data:image/webp;base64,UklGRgIIAABXRUJQVlA4WAoAAAAgAAAAiQIAhAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggFAYAABBiAJ0BKooChQE+0WSpUaqqLKKhsrshkBoJaW7gCssFZcGqkOuoFhnFqb/yeX/sAf9v2n/GYPNp+79o4BVRO7dg7TZS5tP+S0QDHJJtfWdhsQrqRIOgUERe5nV0zqVv2gOZw3Dq6MssOBzAypX4Niok9n/kz7D+X4szkRDmH/Wp2l2+fEumdTYB/1DVl0jb6Q3IIbEvNuhIrl1wMvKXkEfkSwlfEsMBMTcXSG5BDcgjb7Dd+09qvZY613Aa7ug2gTnSYQ/za+yEmfZJvsPy/k4MvdFTwHuhrlhwtiOXSG5BDeUYFPZ9h7WxQZcmMBDZcGoXGxfJUVMTcblqZM3kJ7bmShN/OjntxdIbEvNiXKR/ohip5NmhNJQQtZn19kJM+kab+e9JhDi7aVxdIbEumu2YR/KQBbgO9EfXx1Nyd2hnKogko14arDFvTA+J5PZ9l2M+w9rYmIpTx147cBqyV6fbdk7y6GK5Qm+JXSvuEas/ITcXSGxLprn0LdC9iy3YcrntR/9SShpZRvtVPH9Jfie8FvanKxGu25/9iYilPH8pAI60KfGgEVCnCKpjlcSjJAg4u2lcfkNCfTE3FzyhboXsW8a0SQZPcDMFMAzG/pYXq0NWXSQ+RwN6YFPZ8aP5cPD5o8pcIqGRroBGq4Vd1vZCTPsk+m2s/Pl/07oePSafZ/MjpWxptexeYh878gMo/rNhUA7L/p+OT77QAcHHD/abXsa2v+L4QMKVBDb93TEeYY/kP0AvvTAxXJewgZg71KgTHpp8c4cGeO6saeYcX4B6A62/Mlg82nUHiE24ukNuhrgJwiLku25sSd5jtR/9LUiPltlyE334YVAMuPOkfz/fL/p2mxJ3mO1H/0tSI/+7lruGs+AH/ZdSW+KEH2HspfWv5kdK2NNr2dqglxP/+AStd+cdam4wkVA9EWGY9AdbfmSwebXJMWrXDW3wyedWtCVNfht7xvby+6nReUulsuWyJMe48iDB8EV+zxqYEvDv9jp+6Thz2o/+lryhIA3uE/lw+qC4sf1Ufl+tYkmPQHW35ksIRQGsAAAA/uWEch06LwQSvtd0czcT9t0EDW3jBzSGRXvtLzjiz9YwTPJWD2NPzDrjR1xwuVf1rUJ040mwi/echDj5Nfrk/bf+tQ32BxdPkLtKF4PGc5mdFV0RP2mOsK4xDbPegRyRPzHwXbbmSixUK/cXgAMvKaIZmZRYm1mfqgLt6ucXGo2sOTzEj31IRllUUKhKH5pCcpCjBABuXihDoukFep7ThrGhO15/wAc8ZjYlktVLvEzJaXw38uePOyAaAAy/XVba0SJzDuEV/vLgxhcgmgMPCw2s0yRmjIqNwlpR6V4uBn3j2z8wOJuLetPBd3zZocH70n1CJBGHGgzdAMOQxJnSNNQg02W9eVoXWEwP5wO9A1vCZC6FTz/0O9X7KX2Ob88FIgWAz87/zTC0ysLo+QDGUO11nIldYAAZiBIEPKpsrMrsz3PXJWBPMZjRmuwmEsHGj47wLGVbH6OkCBYy3Tvg+O1V2fqgZexYQPBAIqdjVNBAjo5k4pT63VR8V3aULX+sBApSndMnxnloRuQVaY0AAISg7pQK5lhRM4fLdp1vBkZzTPHkw/6mC6ke58j7DFAA2+ViDIIk9MeEl+g2OwuRnJxscbwYdHU7v3svaIABbuYw0Ca3nX/7M0iamcWmGkxqakIhoAAZ2YG46DgEk7pY/ykA53D9kMiEAAG7mIdsQha5dhVUtTnW2ZlZGkjdnJTP04ZlG2f/AMu4aY1AABPaacDjx8aLX/QSsyR8ckDqpV0LrSGxY7a9hxccuUc12XF4Q5pAAJevalNr8ReMUqqWr024SQRlI/kh+9zWFv2mln+BxCAA+hGkGCjaJ7uTu3tuwhs97E8zRz6ZEIY/NVBXCgBDLGSUeNGKvSp8JJAjB8QzrMfRTa7LLVQPcY5Yqx2eS4HD4AmGD26XMqVHSDXulbovnpFu+TOrda96McXTdVsQIWAsTYXbuGygDoDGbfa8gswu4ydqkfpn8T9wA2Mxmcl0lAbl641k+R6GSL9i+i5Km2GsAgmEvXAA"
                }
              />
            )}
            <div className={`bnr_rt_wrap bnr_lt_wrap`}>
              <div className="seo_bnr_hd">
                <span className="text-center">
                  {!isLocation && "Need To Sell Your"}
                </span>

                <h1>
                  {car?.vehicles?.[0]
                    ? isLocation
                      ? car?.vehicles?.[0]?.headline
                      : car?.vehicles?.[0]?.make
                    : "Nissan Altima" + " ?"}
                </h1>
              </div>
              <div className="bnr_dec">
                {!isMobile && (
                  <span>
                    Selling your car will now be 100% hassle-free with WhipFlip.
                  </span>
                )}
                <p>
                  {!isLocation
                    ? `Get an instant offer on your ${car?.vehicles?.[0]?.make} and
                  book an appointment to sell. Our friendly car concierge will
                  come to your driveway to pay & pick up the car for free!`
                    : `Get
                  an instant offer on your car at  ${car?.vehicles?.[0]?.display_city}  and book an appointment
                  to sell. Our friendly car concierge will come to your driveway
                  to pay & pick up the car for free!`}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center seo_banner_rt">
            <div className="row justify-content-center m-0">
              <div className="col-md-12 p-0">
                {isClient ? (
                  initialOffer ? (
                    <ConfirmOffer initialOffer={initialOffer} />
                  ) : (
                    <InstantOffer />
                  )
                ) : (
                  <CardSkeleton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta_flows">
        <div className="container">
          <div className="off_flow row m-0">
            <div className="col-lg-5 off_col align-self-center p-0">
              <h2>
                <span>Hooray! </span>
                <span>Selling Your Car Is </span>
                <span className="highlight-text">Now 100% HASSLE-FREE!</span>
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="flow_row row">
                <div className="col-lg-4 text-center">
                  <div className={`flow_item ${isMobile ? "" : "side_line"}`}>
                    <div className="flow_head">
                      <img src="/images/seo/hiw1.png" alt="Get Instant Offer" />
                    </div>
                    <div className="flow_body">
                      <h2>Get Instant Offer</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <div className={`flow_item ${isMobile ? "" : "side_line"}`}>
                    <div className="flow_head">
                      <img src="/images/seo/hiw2.png" alt="Confirm Offer" />
                    </div>
                    <div className="flow_body">
                      <h2>Confirm Offer</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="flow_item">
                    <div className="flow_head">
                      <img src="/images/seo/hiw3.png" alt="SOLD!" />
                    </div>
                    <div className="flow_body">
                      <h2>SOLD!</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {!singleBlog && <> {car.vehicles[0].whip && (
        <div className="reviews_carsold">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-rc">
                <h2>
                  {(car?.purchase_count &&
                    new Intl.NumberFormat("en-US").format(
                      car?.purchase_count
                    )) ||
                    0}{" "}
                  cars sold this month
                </h2>
                <div className="sl_wrap">
                  <div className="sold_list">
                    {car?.vehicles?.map((item, i) => (
                      <CarCard key={i} {...item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-review">
                {reviews?.[0] && <h2>Verified Reviews</h2>}
                <div className="rev_list">
                  {reviews?.map((item, i) => (
                    <ReviewCard key={i} {...item} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}</>}
      {/* {singleBlog && <SimpleBLog {...singleBlog} />} */}


      {singleBlog && (
        <>     <div className="reviews_carsold">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-rc">
              <SimpleBLog {...singleBlog} />
              </div>
              <div className="col-lg-4 col-review">
                {reviews?.[0] && <h2>Verified Reviews</h2>}
                <div className="rev_list">
                  {reviews?.map((item, i) => (
                    <ReviewCard key={i} {...item} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews_carsold">
        <div className="container">
        <div className="col-lg-10 col-rc">
                <h2>
                  {(car?.purchase_count &&
                    new Intl.NumberFormat("en-US").format(
                      car?.purchase_count
                    )) ||
                    0}{" "}
                  cars sold this month
                </h2>
                <div className="sl_wrap">
                  <div className="sold_list">
                    {car?.vehicles?.map((item, i) => (
                      <CarCard key={i} {...item} />
                    ))}
                  </div>
                </div>
                </div>
                </div>
                </div>


        
        </>  
      )}



      <div className="how-it-works pt-4 body-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 faq right_sidebar_faq">
              <div className="faqWrapper pagefaqWrapper faq_seo">
                <div className="faq_for_each text-center">
                  <Faq seoSlug={seoSlug} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="read_all">
        <div className="read_hd text-center">
          <h2>Read all about it</h2>
        </div>
        <div className="container">
          <div className="row">
            {blogs?.map((item, i) => (
              <BlogCard key={i} {...item} />
            ))}
          </div>
          <div className="load_mre">
            <Link href={"/blog"}>
              <button>
                <span
                  style={{
                    color: "#000",
                  }}
                >
                  View full blog
                </span>
                <span>
                  <svg width="7" height="10" viewBox="0 0 9.276 15.698">
                    <path
                      id="go-svgrepo-com"
                      d="M15.781,20.28,22.2,13.858a1.427,1.427,0,0,0,0-2.018L15.781,5.418a1.427,1.427,0,0,0-2.018,2.018c1.335,1.543,5.392,5.236,5.325,5.379,0,0-3.891,3.671-5.325,5.448a1.427,1.427,0,1,0,2.018,2.018Z"
                      transform="translate(-13.345 -5)"
                      fill="#272424"
                      opacity="0.61"
                    />
                  </svg>
                </span>
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SEO;
export async function getServerSideProps({ query }) {
  try {
    const name = query?.name;
    let concierges = [];
    if (name.startsWith("meet-the-car")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/get-concierges?slug=${name}`
      );
      const data = await res.json();
      concierges = data.concierges;
      if (concierges.length) {
        return {
          props: {
            concierges,
            seoSlug: name,
          },
        };
      } else {
        return {
          notFound: true,
        };
      }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?page=1`);
    const { blogs } = await res.json();
    let singleBlog = null;
    let car = null;
    if (restrictedUrsl.includes(query.name)) {
      console.log(query.name,'tittooo')
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs/${query.name.replace(
          /-/g,
          "_"
        )}`
      );
      singleBlog = await res.json();
      // console.log(singleBlog);
    } else {
      singleBlog = null;
    }
    const revRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/prospects/reviews?limit=${3}`
    );
    const reviews = await revRes.json();
    if (query.name != "how-much-is-a-2015-nissan-altima-worth") {
      const carResp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/seo-pages?slug=${name}`
      );
      car = await carResp.json();
      console.log("car-----", car);
      if (car.status === false) {
        return {
          notFound: true,
        };
      }
    }
    return {
      props: {
        blogs: blogs?.slice(0, 3) || [],
        reviews: reviews?.reviews || [],
        car,
        singleBlog,
        seoSlug: name,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
