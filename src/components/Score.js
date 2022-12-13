
import { useState } from "react"

export default function Score({ jeopardy }) {
    const [score, setScore] = useState(0);
    const handleIncrement = () => {
        setScore(score + jeopardy.value)
    }

    const handleDecrement = () => {
        setScore(score - jeopardy.value)
    }


    const displayed = () => {
        return (
            <>
                <button className="Increment" onClick={handleIncrement}>
                    Increment <br></br>
                </button>
                <button className="Decrement" onClick={handleDecrement}>
                    Decrement<br></br>
                </button>
                <button className="Points">{score}</button>
            </>
        )
    }
    const notDisplayed = () => {
        return <h1></h1>
    }

    return jeopardy ? displayed() : notDisplayed()
}
