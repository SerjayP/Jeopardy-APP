
export default function Header({ jeopardy }) {

    
    const displayed = () => {
        return (
            <>
              <button className="Category"alt="Category">
                    <p>{jeopardy.category.title}</p>
                    </button>
                
            </>

        )
    }
    const notDisplayed = () => {
        return <h1>Failed to load!</h1>
    }

    return jeopardy ? displayed() : notDisplayed()
}