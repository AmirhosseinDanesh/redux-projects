import React from 'react'
import { useState } from 'react'
import "./App.css"
function App({counter , onDecrement , onIncrement , onSetzero}) {
  return (
    <div className="container">
      <h1 id="num">{counter}</h1>
      <div className="btns">
        <button className="dec" onClick={onDecrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="reset" onClick={onSetzero}>
          <i className="fas fa-redo"></i>
        </button>
        <button className="inc" onClick={onIncrement}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default App
