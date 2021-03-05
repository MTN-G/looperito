import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSession } from "../actions";

function Pad({ sound, playing, recording }) {
  const [active, setActive] = useState(false);
  const audioEl = useRef();
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.time);
  const handleChange = useCallback(() => {
    if (active && playing) {
      if (recording) {
        dispatch(
          editSession({
            src: sound.src,
            time: timer,
            type: "start",
          })
        );
      }
      audioEl.current.play();
    } else {
      if (recording && timer > 0) {
        dispatch(
          editSession({
            src: sound.src,
            time: timer,
            type: "stop",
          })
        );
      }
      audioEl.current.pause();
    }
  }, [playing, active, recording]);

  useEffect(() => {
    handleChange();
  }, [handleChange]);

  return (
    <>
      <button
        className="pad"
        style={{ backgroundColor: active ? sound.color : "wheat" }}
        onClick={() => setActive(!active)}
      >
        {sound.name}
        <audio ref={audioEl} src={sound.src} loop></audio>
      </button>
    </>
  );
}

export default Pad;
