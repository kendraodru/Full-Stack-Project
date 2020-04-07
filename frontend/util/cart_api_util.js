export const fetchCart = ()=>(
    $.ajax({
        url:`api/carts/show`,
        method: 'GET'
    })
);

export const resetCart = (cartId) =>(
    $.ajax({
        url:`api/carts/${cartId}`,
        method: 'PATCH'
    })
)

