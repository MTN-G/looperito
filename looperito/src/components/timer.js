import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTime } from "../actions";

function Timer({ recording }) {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.time);

  useEffect(() => {
    if (recording) {
      const timeInterval = setInterval(() => {
        dispatch(addTime());
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

  return <div className="timer">{timer === 0 ? "00:00" : calcTime(timer)}</div>;
}

export default Timer;
