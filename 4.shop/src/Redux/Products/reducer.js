import { addProduct , removeProduct , getProductStart , getProductSuccess , getProductError } from "./actionTypes.js"
export default (state = [] , action) =>{
    switch (action.type) {
        case addProduct:{
            let newProduct = action.payload
            return [...state , newProduct]
        }
        case removeProduct : {
            const newState = [...state].filter(product=>{product.id !== action.id})
            return newState
        }
        case getProductSuccess : {
            return [...state , ...action.payload]
        }
        case getProductError : {
            return [...state , {error : action.payload}]
        }
        default : {
            return state
        }
    }
}