import React from "react";

function CarCard({ location, year, make, price, thumbnail_image }) {
  return (
    <div className="sold_item">
      <div className="row">
        <div className="col-lg-4 sold_item_img">
          <img src={thumbnail_image} className="rounded" alt={make} />
        </div>
        <div className="col-lg-8 sol_vh_detail">
          <div className="svd_detail">
            <div className="sv_name">
              <span>{year}</span>
              <h3>{make}</h3>
            </div>
            <div className="sold_price">
              <span>
                Sold at : <b>${price}</b>
              </span>
            </div>
          </div>
          <div className="svd_location">
            <span>
              <svg width="17.5" height="21.52" viewBox="0 0 17.5 21.52">
                <g id="map-point-svgrepo-com" transform="translate(0.75 0.75)">
                  <path
                    id="Path_17316"
                    data-name="Path 17316"
                    d="M4,10.143A8.073,8.073,0,0,1,12,2a8.073,8.073,0,0,1,8,8.143c0,4.462-2.553,9.669-6.537,11.531a3.449,3.449,0,0,1-2.926,0C6.553,19.812,4,14.606,4,10.143Z"
                    transform="translate(-4 -2)"
                    fill="none"
                    stroke="#272424"
                    stroke-width="1.5"
                  />
                  <circle
                    id="Ellipse_113"
                    data-name="Ellipse 113"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(4.84 5)"
                    fill="none"
                    stroke="#272424"
                    stroke-width="1.5"
                  />
                </g>
              </svg>
            </span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
