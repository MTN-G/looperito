import React, { useEffect, useState } from "react";
import Pad from "./pad";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleOutlineSharpIcon from "@material-ui/icons/PauseCircleOutlineSharp";
import { Grid } from "@material-ui/core";

function Looper({ allSounds }) {
  // const [activeSounds, setActiveSounds] = useState([]);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="looper">
      <button
        className="playbtn"
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? <PauseCircleOutlineSharpIcon /> : <PlayArrowIcon />}
      </button>
      <div id={"pads-grid"}>
        <Grid container spacing={3}>
          {allSounds &&
            allSounds.map((sound) => (
              <Grid item xs={12} sm={6} md={4} style={{ textAlign: "center" }}>
                <Pad
                  sound={sound}
                  // activeSounds={activeSounds}
                  // setActiveSounds={setActiveSounds}
                  playing={playing}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}

export default Looper;
