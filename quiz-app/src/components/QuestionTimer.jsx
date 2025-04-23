import { useState, useEffect } from "react";

//useEffect is good for side effects, to prevent loops, cleanup, etc.

export default function QuestionTimer({ timeout, onTimesout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // to reset the timer when the question changes
  useEffect(() => {
    const timeoutId = setTimeout(onTimesout, timeout);

    return () => clearTimeout(timeoutId); // to clear the timeout when the component unmounts
  }, [timeout, onTimesout]);

  // to update the timer every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval); // to clear the interval when the component unmounts
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
