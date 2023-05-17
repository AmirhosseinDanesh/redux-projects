// Action Types
const addArticle = "ADD_ARTICLE"
const removeArticle = "REMOVE_ARTICLE"



// Reducres

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


// Action Creators

export const addArticleAction = (data) =>{
    return {
        type : addArticle , 
        payload : data
    }
}
export const removeArticleAction = (id) =>{
    return {
        type : removeArticle , 
        id
    }
}