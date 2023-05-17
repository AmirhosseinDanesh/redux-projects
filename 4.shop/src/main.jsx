import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import productReducer from "./Redux/Products/reducer.js"
import commentreducer from "./Redux/Comments/reducer.js"
import articleReducer from "./Redux/Articles/reducer.js"

import { addProductAction, getProductStartAction } from "./Redux/Products/actionCreators.js"
import { addArticleAction } from "./Redux/Articles/actionCreators.js"
import { addCommentAction } from "./Redux/Comments/actionCreators.js"

import logger from './Redux/Middleware/logger.js'
import apiCall from './Redux/Middleware/apiCall.js'
import { getProductStart } from './Redux/Products/actionTypes.js'

const store = Redux.createStore(
  Redux.combineReducers({
    products: productReducer,
    comments: commentreducer,
    article: articleReducer
  }),
  Redux.applyMiddleware(logger , apiCall)

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
store.dispatch(getProductStartAction("https://fakestoreapi.com/products"))
console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
