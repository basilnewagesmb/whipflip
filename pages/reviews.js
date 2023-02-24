import React, { useEffect } from "react";
import Image from "next/image";
import MetaHead from "components/common/metaHead";
import ReadyToSell from "components/common/readytoSell";
import useCheckMobile from "utils/checkMobile";
import Head from "next/head";
import services from "utils/services";
import Link from "next/link";
import { useReviewsQuery } from "services/util";
import { useState } from "react";
import { Rate, Button } from "antd";
import moment from "moment";
function Reviews(props) {
  useEffect(() => {
    services.loadScript(
      `https://widgets.rr.skeepers.io/generated/74b77a84-2556-b644-d55f-1bd5142f4822/e1d7ef12-19d9-469f-ac08-e4242f0ee3c4.js`,
      () => {}
    );
  }, []);
  const isMobile = useCheckMobile();
  const [reviews, setReviews] = useState(props.reviews?.reviews);
  const [limit, setLimit] = useState(10);
  const { data, isFetching } = useReviewsQuery({ limit });
  useEffect(() => {
    data && setReviews(data?.reviews);
  }, [data]);
  console.log(reviews);
  return (
    <>
      <MetaHead title="Customer Reviews" />
      <Head>
        <meta
          name="Description"
          content="Read real reviews from real customers. Learn about their quick, painless experiences and why Whip Flip is the easiest way ever to sell your car."
        ></meta>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://www.whipflip.com/reviews" />
        <meta property="og:url" content="https://www.whipflip.com/reviews" />
        <meta property="og:title" content="Customer Reviews | Whip Flip" />
        <meta
          property="og:description"
          content="Read real reviews from real customers. Learn about their quick, painless experiences and why Whip Flip is the easiest way ever to sell your car."
        />
        <link rel="canonical" href="https://www.whipflip.com/reviews" />
      </Head>
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
                  width={isMobile ? 200 : 370}
                  height={isMobile ? 45 : 80}
                />
              </picture>
              <p>Hear It from of Thousands of Raving Customers</p>
              <div
                className="review_gid"
                itemProp="aggregateRating"
                itemScope=""
                itemType="http://schema.org/AggregateRating"
              >
                <div
                  id="e1d7ef12-19d9-469f-ac08-e4242f0ee3c4"
                  className="review-google-img"
                ></div>
                <Link
                  href="https://g.page/whipflip/review?rc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/google-reviews.png"
                    alt="Google Reviews"
                    title="Google reviews"
                    className="google_review_card img-fluid footer-icon mx-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isMobile ? "how-it-works pt-4 pb-5" : "how-it-works pt100 pb-5"
        }
      >
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
          <div className="review_list mt-5">
            {reviews.length > 0 &&
              reviews.map((_review, index) => (
                <div className="review_item" key={index}>
                  <div className="review_hd">
                    <div className="rh_left">
                      <img
                        src={`https://ui-avatars.com/api/?name=${_review.firstname}&background=random`}
                        alt=""
                      />
                    </div>
                    <div className="rh_right">
                      <h2>{_review.firstname}</h2>
                      <div className="rating_star">
                        <Rate
                          allowHalf
                          disabled
                          defaultValue={+_review.rate}
                          style={{ grid: 0, color: "#ffb400" }}
                        />
                        <span className="date_calc">
                          {moment(_review.review_date).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="review_body">
                    <p>{_review.review}</p>
                  </div>
                </div>
              ))}
            {limit <= data?.count && (
              <Button
                className="m-auto text-center d-flex sell_car_btn"
                size={"large"}
                loading={isFetching}
                disabled={isFetching}
                onClick={() => {
                  setLimit((prev) => prev + 10);
                }}
              >
                {isFetching ? "Loading..." : "Load more"}
              </Button>
            )}
          </div>
        </div>
      </div>
      <ReadyToSell />
    </>
  );
}

export default Reviews;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/reviews?limit=${10}`
  );
  const reviews = await res.json();
  return {
    props: {
      reviews,
    },
    revalidate: 10,
  };
}
