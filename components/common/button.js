import React from "react";
import { Button as AntBTn } from "antd";

function Button(props) {
  return <AntBTn {...props} style={style}>{props.children}</AntBTn>;
}
const style = {
  background: "#FFD147",
  borderRadius: "4px",
  color: "#353442",
  fontStyle: "normal",
  fontWeight: 700,
  border: "none",
};

export default Button;
