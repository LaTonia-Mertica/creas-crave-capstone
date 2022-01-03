import React from "react";
import Oil from "./Oil.mp4";

export function OilVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={Oil}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="oilVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default OilVideo;
