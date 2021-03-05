import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTime, resetTimer } from "../actions";

// This component use for time measure, both for display and for record info.
function Timer({ recording, playSession }) {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.time);
  useEffect(() => {
    if (recording || playSession) {
      dispatch(resetTimer());
      const timeInterval = setInterval(() => {
        dispatch(addTime());
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [recording, playSession, dispatch]);

  // Calculate time for displaying.
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

  return <div className="timer">{timer === 0 ? "00:00" : calcTime(timer)}</div>;
}

export default Timer;
