import { useState, useEffect } from "react";

function Timer({ recording }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (recording) {
      setTime(0);
      const timeInterval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [recording]);

  function calcTime(number) {
    if (number >= 60) {
      let seconds = number % 60;
      seconds = seconds > 9 ? seconds : "0" + seconds;
      let minutes = (number - seconds) / 60;
      minutes = minutes > 9 ? minutes : "0" + minutes;
      return minutes + ":" + seconds;
    } else {
      return "00:" + (number > 9 ? number : "0" + number);
    }
  }

  return <div className="timer">{time === 0 ? "00:00" : calcTime(time)}</div>;
}

export default Timer;
