import Webcam from "react-webcam";
import React from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import RotateScreen from "./rotateScreen";
import { FullScreen } from "react-full-screen";
import InfoCam from "./info";
import CamLayout from "./Camlaout";
import Overlay from "./overlay";
import Captured from "./captured";
function Camera(props) {
  const { state, camProps, pendingLayouts } = props;
  return (
    <DeviceOrientation lockOrientation={"landscape"}>
      <Orientation orientation="landscape" alwaysRender={false}>
        <FullScreen {...props}>
          {!state?.infoSkipped ? (
            <InfoCam {...props} />
          ) : (
            <CamLayout {...props}>
              <Webcam {...camProps} />
              {pendingLayouts.length >= 0 && (
                <>
                  <Captured {...props} />
                  <Overlay {...props} />
                </>
              )}
            </CamLayout>
          )}
        </FullScreen>
      </Orientation>
      <Orientation orientation="portrait" alwaysRender={false}>
        <RotateScreen {...props} />
      </Orientation>
    </DeviceOrientation>
  );
}

export default Camera;
