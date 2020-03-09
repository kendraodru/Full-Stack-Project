import * as cartAPIUtil from  '../util/cart_api_util'


export const RECEIVE_CART = 'RECEIVE_CART';
// export const CREATE_CART = 'CREATE_CART';


export const receiveCart = (payload) => ({
    type: RECEIVE_CART,
    payload 
})


export const fetchCart = () => dispatch =>(
    cartAPIUtil.fetchCart()
        .then(payload => (dispatch(receiveCart(payload))))
)
