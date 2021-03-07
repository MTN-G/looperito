import React, { useEffect, useState } from "react";
import Pad from "./pad";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleOutlineSharpIcon from "@material-ui/icons/PauseCircleOutlineSharp";
import { Grid } from "@material-ui/core";
import Timer from "./timer";
import { useDispatch, useSelector } from "react-redux";
import { changeDuration, resetRecord, resetTimer } from "../actions";
import SessionSound from "./session";
import { allSounds } from "./sounds/sounds.js";

function Looper() {
  const [playing, setPlaying] = useState(false);
  const [recording, setRecording] = useState(false);
  const [playSession, setPS] = useState(false);
  const currSession = useSelector((state) => state.session);
  const timer = useSelector((state) => state.time);
  const duration = useSelector((state) => state.duration);

  const dispatch = useDispatch();
  // Handle the play session button
  function playSessionFunc() {
    const playAudio = currSession.filter((sound) => sound.type === "start");
    return playAudio.map((sound) => {
      const stopSound = currSession.find(
        (element) =>
          element.src === sound.src &&
          element.time >= sound.time &&
          element.type === "stop"
      );
      return <SessionSound key={sound.src} start={sound} stop={stopSound} />;
    });
  }
  // Reset the clock when the session record end.
  useEffect(() => {
    if (timer === duration && timer !== 0) {
      setPS(false);
      dispatch(resetTimer());
    }
  }, [dispatch, duration, timer]);

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
              if (!playing) {
                setPlaying(!playing);
              }
              dispatch(changeDuration(timer));
            }}
          >
            record
          </button>
          <Timer recording={recording} playSession={playSession} />
          {currSession.length && !recording ? (
            <button
              className="psbtn"
              onClick={() => {
                setPS(true);
              }}
            >
              play session
            </button>
          ) : null}
        </div>
      </div>
      <div id={"pads-grid"}>
        <Grid container spacing={3}>
          {allSounds &&
            allSounds.map((sound) => (
              <Grid
                key={sound.src}
                item
                xs={4}
                sm={4}
                md={4}
                style={{
                  textAlign: "center",
                }}
              >
                <Pad sound={sound} playing={playing} recording={recording} />
              </Grid>
            ))}
        </Grid>
      </div>
      {playSession && playSessionFunc()}
    </div>
  );
}

export default Looper;
