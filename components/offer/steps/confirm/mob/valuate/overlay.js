import { Image, Slider } from "antd";
import React, { useState } from "react";

function Overlay({ pendingLayouts, previewing }) {
  const { overlay, title, id } = pendingLayouts?.[0] || {};
  const [scale, setScale] = useState(50);
  if (!previewing)
    return (
      <div style={overlayStyle}>
        <h5 style={titleStyle}>{title}</h5>
        <Image
          src={`/overlay/${overlay}`}
          preview={false}
          style={{
            textAlign: "center",
            height: "100vh",
            width: "100%",
            objectFit: "contain",
            transform: `scale(${scale * 0.015})`,
          }}
        />
        {/* <Slider
          defaultValue={scale}
          style={zoom}
          onChange={(value) => {
            setScale(value);
          }}
        /> */}
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

const zoom = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%,-5%)",
  bottom: "0",
  width: "80%",
};
export default Overlay;
