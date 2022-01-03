import React from "react";
import SugarCane from "./SugarCane.mp4";

export function SugarCaneVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={SugarCane}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="sugarCaneVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default SugarCaneVideo;
