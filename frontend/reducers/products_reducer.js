import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../actions/product_actions';
import { RECEIVE_CART } from '../actions/cart_actions';

const productReducer = (state={}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product
            return nextState;
        case RECEIVE_CART:
            return action.payload.products
        default:
            return state;
    }
}

export default productReducer



