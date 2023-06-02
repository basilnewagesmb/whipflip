import React, { useEffect, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
function Captured({ previewing, retake, continue_, pendingLayouts, compleat }) {
  const [success, setSuccess] = useState(true);
  useEffect(() => {
    if (previewing && success) {
      setTimeout(() => {
        setSuccess(false);
      }, 1500);
    }
  }, [success, previewing]);

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
              size="large"
            >
              Retake
            </Button>
            <Button
              className="mx-2  border-0"
              style={{
                backgroundColor: "#ffd147",
                fontWeight: "700",
              }}
              size="large"
              onClick={() => {
                pendingLayouts?.length == 0 ? compleat() : continue_();
              }}
            >
              {pendingLayouts?.length == 0 ? "All Done" : "Continue"}
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
  fontSize: "14px",
};
const titleStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  fontWeight: "normal",
  backgroundColor: "#0000005c",
  color: "#ccc",
  transform: "translate(-50%,-50%)",
  padding: "7px 7px",
  fontSize: "14px",
};

const controlsStyle = {
  position: "absolute",
  bottom: "30%",
  left: 0,
  width: "100%",
  height: "100%",
};
export default Captured;
