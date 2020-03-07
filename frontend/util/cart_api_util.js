export const fetchCart = ()=>(
    $.ajax({
        url:`api/carts/show`,
        method: 'GET'
    })
);

// so in my sign up from I need to also have a function that will create my cart
export const createCart = (userId) =>(
    $.ajax({
        url:`/api/users/${userId}/carts`,
        method: 'POST',
        data: {cart: {user_id: userId}}
    })
)