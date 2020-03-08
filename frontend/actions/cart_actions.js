import * as cartAPIUtil from  '../util/cart_api_util'

export const RECEIVE_CART = 'RECEIVE_CART';
export const CREATE_CART = 'CREATE_CART';


export const receiveCart = (cart) => ({
    type: RECEIVE_CART,
    cart 
})

// do i need to create a cart? - my controller and ajax might do this for me
export const createCart  = (cart) =>({
    type: CREATE_CART,
    cart
}) 

// THUNK

export const fetchCart = () => dispatch =>(
    cartAPIUtil.fetchCart()
        .then(cart => (dispatch(receiveCart(cart))))
)

export const postCart = (userId) =>(
    cartAPIUtil.postCart(userId)
        .then(cart => (dispatch(createCart(cart))))
)

