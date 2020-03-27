import { RECEIVE_CART } from "../actions/cart_actions";
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
const cartProductsReducer = (state={}, action)=>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CART:
            if (action.payload.products === undefined) {
                return {}
            } else {
                return action.payload.products
            }
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default cartProductsReducer;