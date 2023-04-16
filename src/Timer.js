import { useState, useEffect } from "react";

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(10);
  const [alertMessage, setAlertMessage] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsRunning(true);
  }, []);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const timeString = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    setAlertMessage(timeString);
    if (totalSeconds === 0) {
      alert("time is up");
      setIsRunning(false);
    }
  }, [totalSeconds]);

  return (
    <div>
      <h1>{alertMessage}</h1>
    </div>
  );
}

export default Timer;
