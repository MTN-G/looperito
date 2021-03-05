import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// This component provide the "recorded" audio element.
// Each of the sounds that recorded get 1 component with the info about start and end.
// In case of use same sound more then once, each sound will get his own component.
function SessionSound({ start, stop }) {
  const audioEl = useRef();
  const timer = useSelector((state) => state.time);
  const duration = useSelector((state) => state.duration);

  useEffect(() => {
    if (timer === start.time) {
      audioEl.current.play();
    }
    if (stop) {
      if (timer === stop.time) {
        audioEl.current.pause();
      }
    }
    if (timer === duration) audioEl.current.pause();
  }, [duration, start.time, stop, timer]);

  return <audio ref={audioEl} src={start.src} loop></audio>;
}

export default SessionSound;
