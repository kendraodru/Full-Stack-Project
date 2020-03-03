import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
// import {login, logout } from './actions/session_actions'
import { fetchProduct, fetchProducts} from './actions/product_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
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
    window.fetchProducts = fetchProducts
    window.fetchProduct = fetchProduct
    // window.login = login
    // window.logout = logout

    ReactDOM.render(<Root store={store} />, root);
});