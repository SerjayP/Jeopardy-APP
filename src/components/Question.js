

export default function Question({ jeopardy }) {

    console.log(jeopardy)
    const displayed = () => {
        return (
            <>
                <div className="Question" alt="Question">
                    <p>{jeopardy.category}</p>
                </div>
            </>

        )
    }
    const notDisplayed = () => {
        return <h1>Not Displayed</h1>
    }

    return jeopardy ? displayed() : notDisplayed()
}
