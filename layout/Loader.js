
import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Image src="/images/car-anim.gif" width={200} height={200} />

      {/* <div className="lds-spinner">
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
      </div> */}
    </div>
  );
}

export default Loader;
