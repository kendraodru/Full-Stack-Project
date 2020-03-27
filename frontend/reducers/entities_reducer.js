import { combineReducers } from 'redux';
import usersReducer from  './users_reducer';
import productReducer from './products_reducer';
import cartReducer from './cart_reducer';
import cartItemReducer from './cart_items_reducer';
import cartProductsReducer from './cart_products';


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer,
    cart: cartReducer,
    cartItems: cartItemReducer,
    cartProducts: cartProductsReducer
});

export default entitiesReducer;
