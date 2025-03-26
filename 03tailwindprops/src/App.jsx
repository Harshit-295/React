import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let myobj = {
  //   username:"hitesh",
  //   age:21j
  // }
  // let newarr=[1,2,3]

  return (
    <>
    {/* <Card username="cahi aur code" someObject={myobj}/> */}
    <Card username="chai aur code" btnText="click me"/>
    <Card username="hitesh" btnText="visit me"/>
    </>
  )
}

export default App
