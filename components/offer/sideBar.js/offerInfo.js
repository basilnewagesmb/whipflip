import InfoIcon from "components/common/infoIcon";
import React from "react";
import { Modal } from "antd";

function OfferInfo({ isShow, data }) {
  const { confirm } = Modal;
  return (
    isShow && (
      <div className="offer_factors">
        <h2>Your Offer Factors:</h2>
        <div className="off_items">
          <div className="off_item">
            <span>Cosmetic:</span>
            <span>
              -$
              {new Intl.NumberFormat("en-US").format(
                Math.floor(
                  data.deductions
                    .filter((d) => d.type == "cosmetic" || d.type == "exterior")
                    .reduce((sum, d) => sum + d.margin, 0) / 100
                )
              )}{" "}
            </span>
          </div>
          <div className="off_item">
            <span>Mechanical:</span>
            <span>
              -${" "}
              {new Intl.NumberFormat("en-US").format(
                Math.floor(
                  data.deductions
                    .filter((d) => d.type == "mechanical")
                    .reduce((sum, d) => sum + d.margin, 0) / 100
                )
              )}
            </span>
          </div>
          <div className="off_item">
            <span>Vehicle History:</span>
            <span>
              -${" "}
              {new Intl.NumberFormat("en-US").format(
                Math.floor(
                  data.deductions
                    .filter((d) => d.type == "history")
                    .reduce((sum, d) => {
                      if (d.margin_type == "percent") {
                        const p =
                          data.base_trade_amount -
                          data.initial_dedcution_amount;
                        const dp = p * (d.margin / 100);
                        return sum + dp;
                      } else {
                        return sum + d.margin;
                      }
                    }, 0) / 100
                )
              )}
            </span>
          </div>
        </div>
        <div
          className="fooText"
          onClick={() => {
            confirm({
              icon: null,
              content: (
                <div className="of_body">
                  <div className="of_list">
                    <div className="of_item">
                      <h2>Cosmetic:</h2>
                      <p>
                        Factors in cosmetic imperfections such as dents,
                        scratches, tears, or general refurbishing.
                      </p>
                    </div>
                    <div className="of_item">
                      <h2>Mechanical:</h2>
                      <p>
                        Factors in any warning lights, engine or drivetrain
                        issues, aftermarket parts, etc.
                      </p>
                    </div>
                    <div className="of_item">
                      <h2>Vehicle History:</h2>
                      <p>
                        Factors in what may be reported by Carfax and other vehicle
                        history reports that pertain to accident history, rental
                        or fleet use, or severe history issues such as salvage,
                        flood, and odometer rollbacks.
                      </p>
                    </div>
                  </div>
                </div>
              ),
              title: <h3>Offer Factors</h3>,
              closable: true,
              footer: null,
              className: "will_come_back offer_factors_modal",
            });
          }}
        >
          <InfoIcon fill="#FFC000" />
          <span>What are these?</span>
        </div>
      </div>
    )
  );
}

export default OfferInfo;
