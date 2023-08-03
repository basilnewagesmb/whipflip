import { Modal } from "antd";
import React from "react";

function TryAnotherVehicle({ formRealValues, form }) {
  return (
    <div className="modal-body p-0 m-0">
      <img
        className="m-auto d-flex"
        height="200"
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
        We are having trouble calculating your offer!
      </p>
      <p
        className="pb-3 text-center px-3 m-0"
        style={{
          fontSize: "16px",
        }}
      >
        Please contact us at{" "}
        <a href="mailto:appraisals@whipflip.com">appraisals@whipflip.com</a>
      </p>
      <p className="d-flex justify-content-around">
        <a
          className="try-btn px-3 py-2 rounded"
          style={{
            backgroundColor: "#ffd147",
            color: "#353442",
            textDecoration: "none",
          }}
          onClick={() => {
            Modal.destroyAll();
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            if (formRealValues?.info?.type === "plate") {
              form.setFieldValue(["info", "plateNumber"], "");
              form.setFieldValue(["info", "state"], "");
            } else {
              form.setFieldValue(["info", "vinNumber"], "");
            }
          }}
        >
          Try Another Vehicle{" "}
        </a>
      </p>
    </div>
  );
}

export default TryAnotherVehicle;
