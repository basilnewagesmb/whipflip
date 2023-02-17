import React from "react";
import { useCountdown } from "utils/useCountdown";

function Clock({ date }) {
  const [days, hours, minutes, seconds, countDown] = useCountdown(
    date || moment().format("YYYY-MM-DD HH:mm:ss")
  );
  return (
    <div className="offer_expire">
      <h2>Offer expires in:</h2>
      <div className="oe_time_left">
        <div className="oet_col">
          <div className="oet_col_in">
            <span> {countDown > 0 ? days : 0}</span>
          </div>
          <span>DAYS</span>
        </div>
        <b className="mt-md-1 text-muted">:</b>
        <div className="oet_col">
          <div className="oet_col_in">
            <span> {countDown > 0 ? hours : 0}</span>
          </div>
          <span>hrs</span>
        </div>
        <b className="mt-md-1 text-muted">:</b>
        <div className="oet_col">
          <div className="oet_col_in">
            <span> {countDown > 0 ? minutes : 0}</span>
          </div>
          <span>mins</span>
        </div>
        <b className="mt-md-1 text-muted">:</b>
        <div className="oet_col">
          <div className="oet_col_in">
            <span> {countDown > 0 ? seconds : 0}</span>
          </div>
          <span>secs</span>
        </div>
      </div>
    </div>
  );
}

export default Clock;
