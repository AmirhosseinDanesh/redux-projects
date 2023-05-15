import React from 'react'
import { useState } from 'react'
import "./App.css"
function App() {
  const [counter , setCounter] = useState(0)

  const increament = ()=>{
    setCounter (counter => counter + 1 )
  }
  const decreament = ()=>{
    setCounter (counter => counter - 1 )
  }
  const setZero = ()=>{
    setCounter (counter => counter = 0 )
  }
  return (
    <div class="container">
      <h1 id="num">{counter}</h1>
      <div class="btns">
        <button class="dec" onClick={decreament}>
          <i class="fas fa-minus"></i>
        </button>
        <button class="reset" onClick={setZero}>
          <i class="fas fa-redo"></i>
        </button>
        <button class="inc" onClick={increament}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default App
