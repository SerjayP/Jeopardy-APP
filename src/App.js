
import { useState, useEffect } from 'react'
import './App.css';
import Question from './components/Question';

function App() {

  const [jeopardy, setJeopardy] = useState(null)
  const url =`http://jservice.io/api/random`
 
 
 
  const getJeopardy = async () => {
  
    try{
    const response = await fetch(url)
    const data = await response.json();
    setJeopardy(data[0])
    
  }
  catch (err) {
    console.err(err)
  }
}
  useEffect(() => { getJeopardy() }, [])

 

  return (
    <div className="App">
      <Question jeopardy={jeopardy}/>
    </div>
  );
}

export default App;
