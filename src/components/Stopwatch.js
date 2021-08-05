import React, { useEffect, useState } from "react";

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isRunning]);

  function handleStopwatch() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{count}</span>
      <button onClick={handleStopwatch}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
