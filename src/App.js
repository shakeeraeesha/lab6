import React, { useState } from 'react';
import RepCounter from "./components/RepetitionExercise";
import TimerWatch from "./components/DurationExercise";
import LapCounter from "./components/SwimmingExercise"; 
//import both timer and rep functions from both index.js's

//create app function
function App() {
    //create variables to call each exercise
  const [selectedExercise, setSelectedExercise] = useState(null);

    //Create function to open exercise and rep or timer when selected
  const handleSelectExercise = (event) => {
    setSelectedExercise(event.target.name);
  }

    //Create return function when return button is selected
  const handleReturn = () => {
    setSelectedExercise(null);
  }

    //Create return function

    //Attach h3 to selector to call the selected exercise for the title
    //Select the repcounter or timerwatch depending on which exercise is selected

    //Create a return button to call the return handler when selected
    //Create the buttons for each exercise
  return (
    <div>
      <h1>Work Out</h1>  
      <h2>Choose an exercise!</h2>

      {selectedExercise ? (
              <div>
          <h3>Exercise: {selectedExercise}</h3>
          {selectedExercise === 'Push Ups' && <RepCounter />}
          {selectedExercise === 'Squats' && <RepCounter />}
          {selectedExercise === 'Sit Ups' && <RepCounter />}
          {selectedExercise === 'Running' && <TimerWatch />}
          {selectedExercise === 'Biking' && <TimerWatch />}
          {selectedExercise === 'Swimming' && <LapCounter />}
          <button onClick={handleReturn}>Return</button>
        </div>
      ) : (
        <div>
          <button name="Push Ups" onClick={handleSelectExercise}>Push Ups</button><br/>
          <button name="Squats" onClick={handleSelectExercise}>Squats</button><br/>
          <button name="Sit Ups" onClick={handleSelectExercise}>Sit Ups</button><br/>
          <button name="Running" onClick={handleSelectExercise}>Running</button><br/>
          <button name="Biking" onClick={handleSelectExercise}>Biking</button><br/>
          <button name="Swimming" onClick={handleSelectExercise}>Swimming</button>
          </div>
      )}
    </div>      
  );
}

//Export app function 
export default App;