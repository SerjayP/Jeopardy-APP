import { useState, useEffect } from "react";

export default function Question({ jeopardy }) {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const url = `http://jservice.io/api/random`;

  console.log(jeopardy);
  const handleClick = event => {
    setAnswer(hidden => !hidden)
  };


  const getQuestion = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuestion(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const handleIncrement = () => {
    setScore(score + question[0].value);
  };

  const handleDecrement = () => {
    if (score > 0){
    setScore(score - question[0].value);
    }
  };
  const handleReset = () => {
    setScore(0);
  };

  const displayed = () => {
    return (
      <>
        <button className="Increment" onClick={handleIncrement}>
          + <br></br>
        </button>
        <button className="Decrement" onClick={handleDecrement}>
          -<br></br>
        </button>
        <button className="Reset" onClick={handleReset}>
          RESET
        </button>
        <h1 className="Points">{score}</h1>

        <br></br>

        <div>
        <h1 className="Category">{question[0].category.title} </h1>
        </div>

        <div className="Question" alt="Question">
          <button className="questionBtn" onClick={getQuestion}>
            Get Question
          </button>
          <h3 id="question">{question[0].question}</h3>
        </div>

        <div className="answer">
        <h3>Answer:</h3>
        <button className="answerBtn" onClick={handleClick}>Get Answer</button>
        {answer && (<h4> {question[0].answer} </h4> )}
        
      </div>
      </>
    );
  };

  const notDisplayed = () => {
    return <h1>Failed to Display!</h1>;
  };

  return jeopardy ? displayed() : notDisplayed();
}