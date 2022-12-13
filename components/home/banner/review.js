import Stars from "components/common/star";
import Image from "next/image";
import { Rate } from "antd";
import React from "react";

function Reviews({ mob, attributes }) {
  if (mob) {
    return (
      <div className="reviewRt_info">
        {attributes?.reviews?.count && (
          <Rate
            allowHalf
            disabled
            defaultValue={parseFloat(attributes?.reviews?.count)}
          />
        )}
        {!attributes?.reviews?.count && (
          <Rate allowHalf disabled defaultValue={5} />
        )}
        <div className="revDetail">
          <span>
            {attributes?.reviews?.count || 5}/5 in <b>Google</b> reviews
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-lg-6 review_col bnr_left_points">
        <article
          data-toggle="modal"
          data-target="#activeUsers"
          className="reviewLt_icons"
        >
          <div className="c-profile__list">
            {attributes?.reviews?.avatars &&
              Array.from(attributes?.reviews?.avatars)?.map(
                (img, i) =>
                  i < 3 && (
                    <span className="c-profile">
                      <img
                        src={img?.src}
                        alt="profile"
                        title="profile"
                        width={40}
                        height={40}
                      />
                    </span>
                  )
              )}
          </div>
        </article>
        <div className="reviewRt_info">
          {attributes?.reviews?.count && (
            <Rate
              allowHalf
              disabled
              defaultValue={parseFloat(attributes?.reviews?.count)}
            />
          )}
          {!attributes?.reviews?.count && (
            <Rate allowHalf disabled defaultValue={5} />
          )}
          <div className="revDetail">
            <span>
              {attributes?.reviews?.count || 5}/5 in <b>Google</b> reviews
            </span>
          </div>
        </div>
      </div>
    );
  }
  s;
}

export default Reviews;
