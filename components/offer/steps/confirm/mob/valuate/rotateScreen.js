import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import RotatePhone from "components/anim/phoneRotate";
function RotateScreen({ setCurrent }) {
  return (
    <div className="portrait_body">
      <CloseOutlined
        style={{
          fontSize: "20px",
          color: "#fff",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          setCurrent("initial");
        }}
      />
      <div className="pb_inside">
        <div className="pb_headd">
          <div className="pb_img cr_hd_img">
            <RotatePhone isLoading={true} />
          </div>
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
          <div className="pbr_foo_links">
            <a href="#">Still having issues?</a>
            <a href="#">Chat with us using the button below</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RotateScreen;
