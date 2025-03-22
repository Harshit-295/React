import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)
  const addValue=()=>{
    
    // counter =counter+1

    setCounter(counter+1)
    console.log("value incresed",counter)
  }

  const decValue = ()=>{
    setCounter(counter-1);

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Counter increase</button>
      <br></br>
      <button onClick={decValue}>counter decrease</button>
    </>
  )
}

export default App
