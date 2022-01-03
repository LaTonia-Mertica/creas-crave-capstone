import React from "react";
import Wheel from "./Wheel.mp4";

export function WheelVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={true}
        muted="muted"
        src={Wheel}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="wheelVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default WheelVideo;
