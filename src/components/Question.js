
export default function Question({ jeopardy }) {

    console.log(jeopardy)
    const displayed = () => {
        return (
            <>
                <div className="Question" alt="Question">
                    <p>{jeopardy.question}</p>
                   
                </div>
            </>

        )
    }
    const notDisplayed = () => {
        return <h1></h1>
    }

    return jeopardy ? displayed() : notDisplayed()
}

