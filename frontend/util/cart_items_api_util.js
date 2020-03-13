export const postCartItem = cartItem =>{
    return $.ajax({
        url:`/api/cart_items`,
        method: `POST`,
        data: {cartItem}
    })
}
// my controller cart items is being callled in my params


export const updateCartItem = cartItem =>{
    return $.ajax({
        url:`/api/cart_items/${cartItem.id}`,
        method: 'PATCH',
        data: {cartItem}
    })
}

export const deleteCartItem = cartItemId =>(
    $.ajax({
        url:`/api/cart_items/${cartItemId}`,
        method: `DELETE`
    })
)