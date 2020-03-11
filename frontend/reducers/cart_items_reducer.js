import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from '../actions/cart_item_actions'
import { RECEIVE_CART } from '../actions/cart_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartItemReducer = (state ={}, action)=>{
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            if (action.payload.cartItems === undefined) {
                return {};
            }else{
                return action.payload.cartItems;
            }
// changed to camel case, will have to revise a lot. keep for now
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_CART:            
            if (action.payload.cart_items === undefined) {
                return {}
            } else {
                return action.payload.cart_items
            };
        case RECEIVE_CART_ITEM:
            
            nextState[action.cartItem.id] = action.cartItem
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId]
            return nextState;
        default:
            return state;
    }
}

export default cartItemReducer;