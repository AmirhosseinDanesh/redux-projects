// Action Types
const addProduct = "ADD_PRODUCT"
const removeProduct = "REMOVE_PRODUCT"
export const getProductStart = "GET_PRODUCT_START"
const getProductSuccess = "GET_PRODUCT_SUCCESS"
const getProductError = "GET_PRODUCT_ERROR"


// Reducres

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


// Action Creators

export const addProductAction = (data) =>{
    return {
        type : addProduct , 
        payload : data
    }
}
export const removeProductAction = (id) =>{
    return {
        type : removeProduct , 
        id
    }
}
export const getProductStartAction = (url) =>{
    return {
        type : getProductStart , 
        payload : url
    }
}
export const getProductSuccessAction = (data) =>{
    return {
        type : getProductSuccess , 
        payload : data
    }
}
export const getProductErrorAction = (error) =>{
    return {
        type : getProductError , 
        payload : error
    }
}