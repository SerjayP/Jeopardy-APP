import { useState } from "react"
export default function QA({ jeopardy }) {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    //  toggle shown state
    // setIsShown(current => !current);

    //  or simply set it to true
    setIsShown(true);
  };

  return (
    <div className="QA">
      <button onClick={handleClick} >Answer</button>

      {/*  show elements on click */}
      {isShown && (
        <div>
          <h2>{jeopardy.answer}</h2>
        </div>
      )}

      {/*  show component on click */}
      {isShown && <Answer />}
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


