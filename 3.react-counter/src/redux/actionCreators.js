import { counterIncrement , counterDecrement , counterSetZero } from "./actionTypes";

const counterIncrementAction = ()=>{
    
    return {
        type : counterIncrement
    }
} 
const counterDecrementAction = ()=>{
    return {
        type : counterDecrement
    }
} 
const counterSetZeroAction = ()=>{
    return {
        type : counterSetZero
    }
} 

export {counterIncrementAction , counterDecrementAction , counterSetZeroAction}