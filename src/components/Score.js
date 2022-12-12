import { useState } from "react"

export default function Score() {
    const [score, setScore] = useState(100);
    const handleIncrement = () => {
        setScore(score + 100)
    }

    const handleDecrement = () => {
        setScore(score - 100)
    }

    return (
        <>
            <button className="Increment" onClick={handleIncrement}>INCREMENT</button>
            <button className="Decrement" onClick={handleDecrement}>DECREMENT</button>
        </>
    )
}
