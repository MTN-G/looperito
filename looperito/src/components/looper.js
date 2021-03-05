import React, { useEffect, useState } from "react";
import Pad from "./pad";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleOutlineSharpIcon from "@material-ui/icons/PauseCircleOutlineSharp";
import { Grid } from "@material-ui/core";
import Timer from "./timer";

function Looper({ allSounds }) {
  // const [activeSounds, setActiveSounds] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [recording, setRecording] = useState(false);

  return (
    <div className="looper">
      <div className="controlers">
        <button
          className="playbtn"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? <PauseCircleOutlineSharpIcon /> : <PlayArrowIcon />}
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <button
            id="recordbtn"
            className={recording ? "rec" : "notrec"}
            onClick={() => {
              setRecording(!recording);
              setPlaying(!playing);
            }}
          >
            record
          </button>
          <Timer recording={recording} />
        </div>
      </div>
      <div id={"pads-grid"}>
        <Grid container spacing={3}>
          {allSounds &&
            allSounds.map((sound) => (
              <Grid item xs={6} sm={6} md={4} style={{ textAlign: "center" }}>
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
