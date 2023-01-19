import React, { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
function Captured({ previewing, retake }) {
  const [success, setSuccess] = useState(true);
  if (previewing?.blob)
    return (
      <div
        style={overlayStyle}
        onClick={() => {
          setSuccess(false);
        }}
      >
        {success && (
          <h6 style={titleStyle}>
            <CheckOutlined className="mr-2" />
            success
          </h6>
        )}
        <img
          src={previewing?.blob}
          style={{
            textAlign: "center",
            height: "100vh",
            width: "100%",
            objectFit: "cover",
          }}
        />
        {!success && (
          <div
            className="d-flex justify-content-around align-items-end"
            style={controlsStyle}
          >
            <Button
              className="mx-2 "
              style={{
                fontWeight: "700",
              }}
              onClick={retake}
            >
              Retake
            </Button>
            <Button
              className="mx-2  border-0"
              style={{
                backgroundColor: "#ffd147",
                fontWeight: "700",
              }}
              onClick={() => {}}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    );
}
const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};
const titleStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  fontWeight: "normal",
  backgroundColor: "#0000005c",
  color: "#ccc",
  transform: "translate(-50%,-50%)",
  padding: "7px 60px",
};

const controlsStyle = {
  position: "absolute",
  bottom: "10%",
  left: 0,
  width: "100%",
  height: "100%",
};
export default Captured;
