import React from "react";
import Smoke from "./Smoke.mp4";

export function SmokeVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={Smoke}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="smokeVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default SmokeVideo;
