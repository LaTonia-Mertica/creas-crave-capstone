import React from "react";
import DustTrail from "./DustTrail.mp4";

export function DustTrailVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={DustTrail}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="dustTrailVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default DustTrailVideo;
