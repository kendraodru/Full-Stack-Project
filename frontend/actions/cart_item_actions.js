import * as cartItemsAPIUtil from '../util/cart_items_api_util';
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";


export const receiveCartItem = (cartItem) =>({
    type: RECEIVE_CART_ITEM,
    cartItem
})

export const removeCartItem = (cartItemId) =>({
    type: REMOVE_CART_ITEM,
    cartItemId
})

// THUNK

export const postCartItem = cartItem => dispatch =>(
    cartItemsAPIUtil.postCartItem(cartItem)
        .then(cartItem => (dispatch(receiveCartItem (cartItem))))
)

export const updateCartItem = cartItem => dispatch =>(
    cartItemsAPIUtil.updateCartItem(cartItem)
        .then(cartItem => (dispatch(receiveCartItem (cartItem))))
)

export const deleteCartItem = cartItemId => dispatch=>(
    cartItemsAPIUtil.deleteCartItem(cartItemId)
        .then(() => (dispatch(removeCartItem(cartItemId))))
)