import { useState, useEffect } from 'react'

export default function Question({ jeopardy }) {
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(null);
    const url =`http://jservice.io/api/random`

    console.log(jeopardy)

    const getQuestion = async () => {
        try {
          const response = await fetch(url)
          const data = await response.json()
          setQuestion(data)
        } catch (err) {
          console.log(err)
        }
      }
    
      useEffect(() => {
        getQuestion()
      }, [])

    const displayed = () => {
        return (
            <>
                <div className="Question" alt="Question">
                   <button className="questionBtn" onClick={getQuestion}>Get Question</button>
          <h3 id="question">{question[0].question}</h3>
                   
                </div>
            </>

        )
    }
    const notDisplayed = () => {
        return <h1></h1>
    }

    return jeopardy ? displayed() : notDisplayed()
}

