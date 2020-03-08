import { combineReducers } from 'redux';
import usersReducer from  './users_reducer';
import productReducer from './products_reducer';
import cartReducer from './cart_reducer';
import cartItemReducer from './cart_items_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer,
    carts: cartReducer,
    cartItems: cartItemReducer
});

export default entitiesReducer;
