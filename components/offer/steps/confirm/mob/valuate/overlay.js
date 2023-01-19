import React from "react";

function Overlay({ pendingLayouts, previewing }) {
  const { overlay, title, id } = pendingLayouts?.[0] || {};
  if (!previewing)
    return (
      <div style={overlayStyle}>
        <h5 style={titleStyle}>{title}</h5>
        {overlay && (
          <img
            src={`/overlay/${overlay}`}
            style={{
              textAlign: "center",
              height: "100vh",
              width: "100%",
              objectFit: "contain",
            }}
          />
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
  top: "5%",
  left: "50%",
  backgroundColor: "#0000005c",
  fontWeight: "normal",
  color: "#ccc",
  transform: "translate(-50%,-5%)",
  padding: "7px 15px",
  fontSize: "14px",
};
export default Overlay;
