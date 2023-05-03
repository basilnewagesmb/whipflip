import { Rate } from "antd";
import React from "react";
import ShimmerImage from "components/common/shimmerImage";
import Link from "next/link";
import { useRouter } from "next/router";

function Reviews({ mob, reviews }) {
  const { push } = useRouter();
  if (mob) {
    return (
      <div
        className="reviewRt_info"
        onClick={() => {
          push("/reviews");
        }}
      >
        {reviews?.count && (
          <Rate allowHalf disabled defaultValue={parseFloat(reviews?.count)} />
        )}
        {!reviews?.count && <Rate allowHalf disabled defaultValue={5} />}
        <div className="revDetail">
          <span>
            {reviews?.count || 5}/5 in <b>Google</b> reviews
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="col-lg-6 review_col bnr_left_points"
        onClick={() => {
          push("/reviews");
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <article
          data-toggle="modal"
          data-target="#activeUsers"
          className="reviewLt_icons"
        >
          <div className="c-profile__list">
            {reviews?.avatars &&
              reviews?.avatars?.map(
                (img, i) =>
                  i < 3 && (
                    <Link className="c-profile" href={"/reviews"} key={i}>
                      <span>
                        <ShimmerImage
                          src={img.src}
                          alt={img.name}
                          title={img.name}
                          width={40}
                          height={40}
                          preview={false}
                          fallback={"/images/personFallback.jpg"}
                        />
                        {img.src}
                      </span>
                    </Link>
                  )
              )}
          </div>
        </article>
        <div className="reviewRt_info">
          {reviews?.count && (
            <Rate
              allowHalf
              disabled
              defaultValue={parseFloat(reviews?.count)}
            />
          )}
          {!reviews?.count && <Rate allowHalf disabled defaultValue={5} />}
          <div className="revDetail">
            <span>
              {reviews?.count || 5}/5 in <b>Google</b> reviews
            </span>
          </div>
        </div>
      </div>
    );
  }
  s;
}

export default Reviews;
