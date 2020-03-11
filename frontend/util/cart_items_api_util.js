export const postCartItem = cartItem =>(
    $.ajax({
        url:`/api/cart_items`,
        method: `POST`,
        data: {cartItem}
    })
)

// think about changing this to snake case in the future because it effected my params.require() in controller and chaning the state in my form

export const updateCartItem = cartItem =>(
    $.ajax({
        url:`/api/cart_items/${cartItem.id}`,
        method: 'PATCH',
        data: {cartItem}
    })
)

export const deleteCartItem = cartItemId =>(
    $.ajax({
        url:`/api/cart_items/${cartItemId}`,
        method: `DELETE`
    })
)