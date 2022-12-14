import { useState } from "react";

export default function Score({ jeopardy }) {
  const [score, setScore] = useState(0);
  const handleIncrement = () => {
    setScore(score + jeopardy.value);
  };

  const handleDecrement = () => {
    setScore(score - jeopardy.value);
  };
  const handleReset = () => {
    setScore(0);
  };

  const displayed = () => {
    return (
      <>
        <button className="Increment" onClick={handleIncrement}>
          Increment <br></br>
        </button>
        <button className="Decrement" onClick={handleDecrement}>
          Decrement<br></br>
        </button>
        <button className="Reset" onClick={handleReset}>
          RESET
        </button>
        <h1 className="Points">{score}</h1>
      </>
    );
  };
  const notDisplayed = () => {
    return <h1></h1>;
  };

  return jeopardy ? displayed() : notDisplayed();
}
