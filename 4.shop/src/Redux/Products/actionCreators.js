import { addProduct , removeProduct , getProductStart , getProductSuccess , getProductError} from "./actionTypes.js";

const addProductAction = (data) =>{
    return {
        type : addProduct , 
        payload : data
    }
}
const removeProductAction = (id) =>{
    return {
        type : removeProduct , 
        id
    }
}
const getProductStartAction = (url) =>{
    return {
        type : getProductStart , 
        payload : url
    }
}
const getProductSuccessAction = (data) =>{
    return {
        type : getProductSuccess , 
        payload : data
    }
}
const getProductErrorAction = (error) =>{
    return {
        type : getProductError , 
        payload : error
    }
}


export { removeProductAction , addProductAction , getProductErrorAction , getProductSuccessAction , getProductStartAction}