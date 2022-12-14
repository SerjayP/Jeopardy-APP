
import { useState, useEffect } from 'react'

import './App.css';
import QA from './components/QA';
import Header from './components/Header';
import Score from './components/Score';
import Question from './components/Question';
import Points from './components/Points';
import Right from './components/Right';

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
      <QA jeopardy={jeopardy}/>
      <Header jeopardy={jeopardy}/>
      <Points />
      <Score jeopardy={jeopardy}/>
      <Question jeopardy={jeopardy}/>
      <Right />
    </div>
  );
}

export default App;
