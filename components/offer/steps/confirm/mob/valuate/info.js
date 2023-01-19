import React from "react";

import { CloseOutlined } from "@ant-design/icons";

function InfoCam({ setSkipped }) {
  return (
    <div className="">
      <CloseOutlined
        style={{
          fontSize: "20px",
          color: "#000",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          setSkipped(true);
        }}
      />
      <div className="pb_inside">
        <div className="pb_headd">
          <div className="pb_img cr_hd_img"></div>
        </div>
        <div className="pb_rotate_info">
          <div className="pbr_hd">
            <h2>Please rotate your phone</h2>
          </div>
          <div className="pbr_dec">
            <p>
              If you are unable to access the camera please enable screen
              rotation in the access control center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCam;
