import React, { useEffect, useState } from "react";
import Pad from "./pad";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleOutlineSharpIcon from "@material-ui/icons/PauseCircleOutlineSharp";
import { Grid } from "@material-ui/core";
import Timer from "./timer";
import { useDispatch, useSelector } from "react-redux";
import { resetRecord } from "../actions";

function Looper({ allSounds }) {
  // const [activeSounds, setActiveSounds] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [recording, setRecording] = useState(false);
  const currSession = useSelector((state) => state.session);
  const dispatch = useDispatch();

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
              if (!recording) {
                dispatch(resetRecord());
              }
              setRecording(!recording);
              setPlaying(!playing);
              console.log(currSession);
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
                <Pad sound={sound} playing={playing} recording={recording} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}

export default Looper;
