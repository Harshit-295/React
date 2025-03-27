import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  const changecolor = ()=> {
    setColor({backgroundColor:color})
  }

  return (
    <div class="w-full h-screen duration-800 flex"
    style={{backgroundColor:color}}>
      <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
        class="flex flex-wrap justify-between gap-10 bg-white rounded-lg p-2">
        <button 
        onClick={()=>{
          setColor("red")
        }}class="outline-none p-2 text-white rounded-xl shadow-2xl"
        style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=>{
          setColor("blue")
        }} class="outline-none p-2 text-white rounded-xl shadow-2xl"
        style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>{
          setColor("green")
        }} class="outline-none p-2 text-white rounded-xl shadow-2xl"
        style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>{
          setColor("pink")
        }}class="outline-none p-2 text-white rounded-xl shadow-2xl"
        style={{backgroundColor:"pink"}}>pink</button>
        <button onClick={()=>{
          setColor("yellow")
        }}class="outline-none p-2 text-white rounded-xl shadow-2xl"
        style={{backgroundColor:"yellow"}}>yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
