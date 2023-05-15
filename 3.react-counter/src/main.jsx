import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store.js'
import { counterDecrementAction, counterIncrementAction, counterSetZeroAction } from './redux/actioncreators.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
const render = () =>
  root.render(
    <React.StrictMode>
      <App
        counter={store.getState()}
        onIncrement={() => store.dispatch(counterIncrementAction())}
        onDecrement={() => store.dispatch(counterDecrementAction())}
        onSetzero={() => store.dispatch(counterSetZeroAction())}
      />
    </React.StrictMode>,
  )

render();

store.subscribe(render)