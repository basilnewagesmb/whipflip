import Link from "next/link";
import React from "react";

function OOA() {
  return (
    <div className="modal-body pb-4">
      <img
        className="m-auto d-flex"
        height="240"
        src="/images/yellow_car.png"
        alt="yellow car"
      ></img>
      <h3 className="p-0 text-center m-0 text-lg">
        <strong>Uh oh!</strong>
      </h3>
      <p
        className="py-3 text-center px-4 m-0"
        style={{
          fontSize: "16px",
        }}
      >
        WhipFlip is currently not in your area…yet. Please check back with us in
        the future as we are adding new service areas regularly.
      </p>
      <p
        className="pb-3 text-center px-3 m-0"
        style={{
          fontSize: "16px",
        }}
      >
        If you have any questions or concerns, please contact our Customer
        Success Team at{" "}
        <a href="tel:+18883493189">
          (888) 349-3189.
        </a>
      </p>
      <p className="d-flex justify-content-around">
        <Link href="/" legacyBehavior>
          <a
            className="try-btn px-3 py-2 rounded"
            style={{
              backgroundColor: "#00b0f0",
              color: "#ffff",
            }}
          >
            Whipflip Home
          </a>
        </Link>
      </p>
    </div>
  );
}

export default OOA;
