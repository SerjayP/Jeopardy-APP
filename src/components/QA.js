import { useState } from "react"
export default function QA({ jeopardy }) {

  const [isShown, setIsShown] = useState(false);
const [answer, setAnswer] = useState(false)

  const handleClick = event => {
    //  toggle shown state
    // setIsShown(current => !current);

    //  or simply set it to true
    setAnswer(hidden => !hidden)
  };

  return (
    <div className="QA">
      <button onClick={handleClick} >Answer</button>

      {/*  show elements on click */}
      {answer && (
        <div>
          <h2>{jeopardy.answer}</h2>
        </div>
      )}

      {/*  show component on click */}
      {answer && <Answer />}
    </div>
  );
  function Answer() {
    return (
      <div >
        <h2></h2>
      </div>
    );
  }
}


