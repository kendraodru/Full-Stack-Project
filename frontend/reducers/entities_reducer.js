import { combineReducers } from 'redux';
import usersReducer from  './users_reducer';
import productReducer from './products_reducer';
import cartReducer from './cart_reducer';
import cartItemReducer from './cart_items_reducer';
import cartProductsReducer from './cart_products';
import searchProductReducer from './search_reducer';
import reviewsReducer from './reviews_reducer';
const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    cartItems: cartItemReducer,
    cartProducts: cartProductsReducer,
    searchProducts: searchProductReducer
}); 

export default entitiesReducer;
