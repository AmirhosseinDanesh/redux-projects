import { addArticle , removeArticle } from "./actionTypes.js"
export default (state = [] , action) =>{
    switch (action.type) {
        case addArticle:{
            let newArtilce = action.payload
            return [...state , newArtilce]
        }
        case removeArticle : {
            const newState = [...state].filter(artilce=>{artilce.id !== action.id})
            return newState
        }
        default : {
            return state
        }
    }
}