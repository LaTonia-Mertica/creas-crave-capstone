import React from "react";
import SugarCaneBubbles from "./SugarCaneBubbles.mp4";

export function SugarCaneBubblesVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={SugarCaneBubbles}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="sugarCaneBubblesVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default SugarCaneBubblesVideo;
