import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../actions/product_actions';
import {SEARCH_PRODUCTS} from '../actions/search_action';
import { RECEIVE_CART } from '../actions/cart_actions';



const productReducer = (state={}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.payload.products;
        case RECEIVE_PRODUCT:
            // nextState[action.payload.products] = action.payload.product
            // return nextState;
            return Object.assign(nextState, action.payload.products)
        default:
            return state;
    }
}

export default productReducer



