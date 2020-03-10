import {RECEIVE_CART} from '../actions/cart_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartReducer = (state={}, action) =>{
    Object.freeze(state)
    // let nextState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_CART:
            return action.payload.cart;
        case RECEIVE_CURRENT_USER:
            return action.payload.cart;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default cartReducer;