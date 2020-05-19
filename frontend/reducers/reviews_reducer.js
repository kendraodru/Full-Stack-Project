import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_PRODUCT } from '../actions/product_actions';

const reviewsReducer = (state ={}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            if (action.payload.products.reviews === undefined){
                return {}
            }else{
                return action.payloads.reviews
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