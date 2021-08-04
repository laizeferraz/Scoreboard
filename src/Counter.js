import { useState } from "react";

export const Counter = () => {
  const [score, setScore] = useState(0);
  // console.log(score);

  function decrementScore() {
    //console.log(score);
    // console.log("Hi, from inside incrementScore!");
    setScore((prevScore) => {
      console.log(prevScore);
      return prevScore - 1;
    });

    // console.log(score);
  }

  function incrementScore() {
    // console.log(score);
    // console.log("Hi, from inside incrementScore!");
    setScore((prevScore) => prevScore + 1);
  }

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={decrementScore}>
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={incrementScore}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};
