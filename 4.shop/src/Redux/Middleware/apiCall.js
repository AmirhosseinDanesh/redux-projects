import { getProductErrorAction, getProductSuccessAction } from "../Products/actionCreators";
import { getProductStart } from "../Products/actionTypes";

const apiCall = ({ dispatch }) => (next) => (action) => {
    if (action.type !== getProductStart) {
        next(action)
    } else {
        fetch(action.payload)
            .then((res) => res.json())
            .then((data) => { dispatch(getProductSuccessAction(data))})
            .catch(err => dispatch(getProductErrorAction(err)))
    }
}


export default apiCall;