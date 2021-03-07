import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSession } from "../actions";

// This is the pad component that contains the audio element.
function Pad({ sound, playing, recording }) {
  const [active, setActive] = useState(false);
  const audioEl = useRef();
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.time);

  useEffect(() => {
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
      audioEl.current.currentTime = 0;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, active, recording]);

  return (
    <button
      className="pad"
      style={{ backgroundColor: active ? sound.color : "wheat" }}
      onClick={() => setActive(!active)}
    >
      {sound.name}
      <audio ref={audioEl} src={sound.src} crossOrigin="anonymous" loop></audio>
    </button>
  );
}

export default Pad;
