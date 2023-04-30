import{counterIncrement,counterDecrement,counterSetZero} from "./actionType.js"
import { incrementAction , decrementAction , setZeroAction } from "./actionCreators.js"
const incBtn = document.querySelector(".inc") 
const decBtn = document.querySelector(".dec")
const resetBtn = document.querySelector(".reset")

const number = document.querySelector("#num")


const counterRedux = (state=0 , action) => {
  switch (action.type) {
    case counterIncrement:{
      return state + 1;
    }
    case counterDecrement :{
      return state - 1;
    }
    case counterSetZero:{
      return 0;
    }
      
    default:{
      return state;
    }
  }
}

const store = Redux.createStore(counterRedux)



incBtn.addEventListener("click" , ()=>{

  store.dispatch(incrementAction())
  let newVal = store.getState()
  number.innerHTML = newVal

})

decBtn.addEventListener("click" , ()=>{

  store.dispatch(decrementAction())
  let newVal = store.getState()
  number.innerHTML = newVal

})

resetBtn.addEventListener("click" , ()=>{

  store.dispatch(setZeroAction())
  let newVal = store.getState()
  number.innerHTML = newVal

})