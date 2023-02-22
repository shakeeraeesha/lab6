import React, { useState, useEffect } from 'react';

//create timer watch function 
function TimerWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
    
//referenced from Murray's timer 
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

    //Crate start button and set to true
  const handleStart = () => {
    setIsRunning(true);
  };

    //Create stop button and set to false
  const handleStop = () => {
    setIsRunning(false);
  };

    //Create reset button to reset the time on stopwatch
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

    
    //Create the consts to calculate the time, referenced from Murray's timer
  const milli = time % 1000;
  const sec = Math.floor(time / 1000) % 60;
  const min = Math.floor(time / 60000) % 60;

    //Open return to print back the timer
    //Create timer in h1 tag in 00:00:00 format
    //Create buttons for stop, start and reset
  return (
      <div>
      <h1>
        {min < 10 ? "0" + min : min}:
        {sec < 10 ? "0" + sec : sec}:
        {milli < 100 ? "0" : ""}{milli < 10 ? "0" : ""}{milli}
      </h1>
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

//export function so it can be called in App.js
export default TimerWatch;
