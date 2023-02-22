import React, { useState, useRef } from 'react';

function LapCounter() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setLaps(prevLaps => prevLaps + 1);
      clearInterval(intervalRef.current);
    }
  };

  const handleLap = () => {
    setLaps(prevLaps => prevLaps + 1);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps(0);
  };

  const formatTime = time => {
    const milli = time % 1000;
    const sec = Math.floor(time / 1000) % 60;
    const min = Math.floor(time / 60000) % 60;
    
    <h1>
    {min < 10 ? "0" + min : min}:
    {sec < 10 ? "0" + sec : sec}:
    {milli < 100 ? "0" : ""}{milli < 10 ? "0" : ""}{milli}
  </h1>
     };

  return (
    <div>
      <div>{formatTime(time)}</div>
      <div>Laps: {laps}</div>
      {!isRunning ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleLap}>Lap</button>
        </>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default LapCounter;
