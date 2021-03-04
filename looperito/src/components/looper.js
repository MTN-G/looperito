import React, { useEffect, useState } from "react";
import Pad from "./pad";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleOutlineSharpIcon from "@material-ui/icons/PauseCircleOutlineSharp";

function Looper({ allSounds }) {
  // const [activeSounds, setActiveSounds] = useState([]);
  const [playing, setPlaying] = useState(false);

  return (
    <div id="looper">
      <button
        className="playbtn"
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? <PauseCircleOutlineSharpIcon /> : <PlayArrowIcon />}
      </button>
      <div id="pads-grip">
        {allSounds &&
          allSounds.map((sound) => (
            <Pad
              sound={sound}
              // activeSounds={activeSounds}
              // setActiveSounds={setActiveSounds}
              playing={playing}
            />
          ))}
      </div>
    </div>
  );
}

export default Looper;
