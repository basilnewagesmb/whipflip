import React, { useEffect } from "react";
import useCheckMobile from "utils/checkMobile";
import { Rate, Button } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
function Reviews(props) {
  const { push } = useRouter();
  const { reviews, setReviews, limit, setLimit, data, isFetching } = props;
  const isMobile = useCheckMobile();
  useEffect(() => {
    data && setReviews(data?.reviews);
  }, [data]);
  return (
    <>
      <div
        className={isMobile ? "how-it-works pt-4 pb-5" : "how-it-works pt-5 "}
      >
        <div className="container p-0">
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
          <div className="review_list mt-5 ">
            {reviews.length > 0 &&
              reviews.map((_review, index) => (
                <div className="review_item card p-3" key={index}>
                  <div className="review_hd">
                    <div className="rh_left">
                      <img
                        src={`https://ui-avatars.com/api/?name=${_review.firstname}&background=random`}
                        alt=""
                      />
                    </div>
                    <div className="rh_right">
                      {/* +" "+_review.lastname */}
                      <h2>{_review.firstname}</h2>
                      <div className="rating_star flex-wrap">
                        <Rate
                          allowHalf
                          disabled
                          defaultValue={+_review.rate}
                          style={{ grid: 0, color: "#ffb400" }}
                          className={"flex-wrap"}
                        />
                        <span className="date_calc">
                          {moment(_review.review_date).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="review_body">
                    <p
                      style={{
                        fontSize: "1rem",
                      }}
                    >
                      {_review.review}
                    </p>
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
                  // push("/reviews");
                }}
              >
                {isFetching ? "Loading..." : "Load more"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
