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
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
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
