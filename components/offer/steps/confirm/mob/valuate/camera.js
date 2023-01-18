import Webcam from "react-webcam";
import React from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import RotateScreen from "./rotateScreen";
import { FullScreen } from "react-full-screen";
function Camera(props) {
  return (
    <DeviceOrientation lockOrientation={"landscape"}>
      <Orientation orientation="landscape" alwaysRender={false}>
        <FullScreen {...props}>
          <button
            onClick={props.handle.exit}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
            }}
          >
            button
          </button>
          <Webcam
            videoConstraints={{
              width: { min: 840, ideal: 1920 },
              height: { min: 360, ideal: 1080 },
              aspectRatio: { ideal: 1.7777777778 },
              facingMode: { exact: "environment" },
            }}
          />
        </FullScreen>
      </Orientation>
      <Orientation orientation="portrait" alwaysRender={false}>
        <RotateScreen {...props} />
      </Orientation>
    </DeviceOrientation>
  );
}

export default Camera;
