import { Rate, Avatar } from "antd";
import Link from "next/link";
import React from "react";

function ReviewCard({ firstname, rate, review, index }) {
  return (
    <div className="rev_item">
      <div className="prof">
        <div className="p_left">
          <img
            src={`https://ui-avatars.com/api/?name=${firstname}&background=random&rounded=true`}
            alt={firstname}
          />
        </div>
        <div className="p_right">
          <h3>{firstname}</h3>
          <span>3 months ago</span>
        </div>
      </div>
      <div className="rating pt-1 px-3">
        {rate && <Rate allowHalf disabled defaultValue={parseFloat(rate)} />}
        {!rate && <Rate allowHalf disabled defaultValue={5} />}
      </div>
      <div className="rev_comment position-relative">
        <p>{review}</p>
        <div id="layer"></div>
      </div>
      {index === 2 && (
        <div className="load_mre">
          <Link href="/reviews">
            <button>
              <span>Read All Reviews</span>
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
      )}
    </div>
  );
}

export default ReviewCard;
