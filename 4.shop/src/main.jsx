import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import productReducer from "./Redux/Store/Products.js"
import commentreducer from "./Redux/Store/Comments.js"
import articleReducer from "./Redux/Store/Articles.js"

import { addProductAction, getProductStartAction } from "./Redux/Store/Products.js"
import { addArticleAction } from "./Redux/Store/Articles.js"
import { addCommentAction } from "./Redux/Store/Comments.js"

import logger from './Redux/Middleware/logger.js'
import apiCall from './Redux/Middleware/apiCall.js'

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
