import React, { useCallback, useEffect, useRef, useState } from "react";

function Pad({ sound, activeSounds, setActiveSounds, playing }) {
  const [active, setActive] = useState(false);
  const audioEl = useRef();
  const handleChange = useCallback(() => {
    if (active && playing) {
      // setActiveSounds([...activeSounds, sound]);
      // console.log("added");
      audioEl.current.play();
    } else {
      // console.log("removed");
      //   const activeSoundIndex = activeSounds.findIndex(
      //     (element) => element === sound
      //   );
      //   activeSounds.splice(activeSoundIndex, 1);
      //   setActiveSounds(activeSounds);
      audioEl.current.pause();
    }
  }, [playing, active]);

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
