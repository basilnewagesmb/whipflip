import React from "react";

function SimpleBLog(props) {
  console.log(props);
  return (
    <div
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      className="pt-5"
    >
      <div className="container">
        {props.template && (
          <div
            dangerouslySetInnerHTML={{
              __html: props.template.replace(/(<? *script)/gi, "illegalscript"),
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default SimpleBLog;
