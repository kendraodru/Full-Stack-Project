import * as cartAPIUtil from  '../util/cart_api_util'

export const RECEIVE_CART = 'RECEIVE_CART';
export const CREATE_CART = 'CREATE_CART';


export const receiveCart = (payload) => ({
    type: RECEIVE_CART,
    payload 
})

// do i need to create a cart? - my controller and ajax might do this for me
export const createCart  = (cart) =>({
    type: CREATE_CART,
    cart
}) 

// THUNK

export const fetchCart = () => dispatch =>(
    cartAPIUtil.fetchCart()
        .then(payload => (dispatch(receiveCart(payload))))
)

// export const postCart = (userId) =>(
//     cartAPIUtil.postCart(userId)
//         .then(cart => (dispatch(createCart(cart))))
// )

