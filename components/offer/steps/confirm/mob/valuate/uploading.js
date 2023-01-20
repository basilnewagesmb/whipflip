import RotatePhone from "components/anim/phoneRotate";
import React from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import { Progress } from "./progress";
function Uploading({ state }) {
  return (
    <DeviceOrientation lockOrientation={"landscape"}>
      <Orientation orientation="landscape" alwaysRender={false}>
        <Progress {...state} />
        <div style={rotate}>
          <div className="pb_inside">
            <div className="pb_headd">
              <div className="pb_img cr_hd_img">
                <RotatePhone isLoading={true} />
              </div>
            </div>
            <div className="pb_rotate_info">
              <div className="pbr_hd">
                <h6 className="text-center mt-2 text-dark">
                  All Done! Now tilt your phone back
                  <br /> to portrait mode
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Orientation>
      <Orientation orientation="portrait" alwaysRender={false}>
        <Progress {...state} />
      </Orientation>
    </DeviceOrientation>
  );
}
const rotate = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  backgroundColor: "#ccccccbd",
  height: "100vh",
  zIndex: 10000000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default Uploading;
