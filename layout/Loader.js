import BreakDown from "components/anim/breakdown";
import React from "react";

function Loader() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
