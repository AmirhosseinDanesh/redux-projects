import {getProductStart ,getProductSuccessAction , getProductErrorAction} from "../Store/Products"

const apiCall = ({ dispatch }) => (next) => (action) => {
    if (action.type !== getProductStart) {
        return next(action)
    } else {
        fetch(action.payload)
            .then((res) => res.json())
            .then((data) => { dispatch(getProductSuccessAction(data))})
            .catch(err => dispatch(getProductErrorAction(err)))
    }
}


export default apiCall;