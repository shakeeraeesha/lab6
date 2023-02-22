import React, { useState } from 'react';

//Create rep counteer function 
function RepCounter() {
  const [count, setCount] = useState(0);
//Create function to add one to the count everytime button is clicked
  const incrementCount = () => {
    setCount(count + 1);
  }
//Create function to send the count number back to 0
  const resetCount = () => {
    setCount(0);
  }
//Create return statement
    //Create buttons to call the increment and reset buttons
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Complete Rep</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

//export function so it can be called in App.js
export default RepCounter;
