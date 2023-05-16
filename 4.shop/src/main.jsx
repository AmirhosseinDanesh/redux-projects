import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import productReducer from "./Redux/Products/reducer.js"
import commentreducer from "./Redux/Comments/reducer.js"
import articleReducer from "./Redux/Articles/reducer.js"

import { addProductAction } from "./Redux/Products/actionCreators.js"
import { addArticleAction } from "./Redux/Articles/actionCreators.js"
import { addCommentAction } from "./Redux/Comments/actionCreators.js"

import logger from './Redux/Middleware/logger.js'

const store = Redux.createStore(
  Redux.combineReducers({
    products: productReducer,
    comments: commentreducer,
    article: articleReducer
  }),
  Redux.applyMiddleware(logger)

)


store.subscribe(() => {
  console.log("Store Update", store.getState())
})


store.dispatch(addProductAction({
  id: 1,
  title: "laptop",
  price: 90000
}))
store.dispatch(addArticleAction({
  id: 1,
  title: "Asus or Mac",
  text: "مقایسه لپتاپ های پرچم دار این دو شرکت"
}))
store.dispatch(addCommentAction({
  id: 1,
  user: "Amir Danesh",
  text: "به نظرم جفتشون چرته فقط Nokia"
}))

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
