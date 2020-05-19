import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_PRODUCT } from '../actions/product_actions';

const reviewsReducer = (state ={}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    debugger
    switch (action.type) {
        case RECEIVE_PRODUCT:
            if (action.payload.reviews === undefined){
                debugger
                return {}
            }else{
                debugger
                return action.payload.reviews
            }
            
        case RECEIVE_REVIEW:
            return Object.assign(nextState, action.review)
        case RECEIVE_REVIEW_ERRORS:
            return action.errors
        default:
            return state;
    }
}

export default reviewsReducer