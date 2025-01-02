import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  let [counter, setCounter] = useState(0);
  
  function inval(){
    if(counter < 20 ){
      setCounter(counter+1);
    }
  }
  function deval(){
    if(counter > 0){
      setCounter(counter-1);
    }
  }

  // counter value is written at multiple places to showcase the real usecase of hooks in dynamic updation of content at multiple places
  // Just Because of useState hook we can write counter variable at any place on the page and its content will be update once changed by the user at everyplace where counter is used in this case it is used at 4 places.
  return (
    <>
      <h1>Counter Project</h1>
      <h3>Count Value: {counter} </h3>
      <button onClick={inval}>Increase {counter}</button>
      <br />
      <button onClick={deval}>Decrease {counter}</button>
      <p>counter : {counter}</p>
    </>
  )
}

export default App
