import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { fetchCart } from './actions/cart_actions';
// import {login, logout } from './actions/session_actions'
// import { fetchProduct, fetchProducts} from './actions/product_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
                cart: window.cart.cart,
                cartItems: window.cart.cartItems
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchCart = fetchCart;
    // window.fetchProducts = fetchProducts
    // window.fetchProduct = fetchProduct
  

    ReactDOM.render(<Root store={store} />, root);
});