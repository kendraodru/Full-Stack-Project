export const fetchCart = ()=>(
    $.ajax({
        url:`api/carts/show`,
        method: 'GET'
    })
);

// ^i use current user to find the cart so dont need to feed it in anything

// so in my sign up from I need to also have a function that will create my cart
export const postCart = (userId) =>(
    $.ajax({
        url:`/api/users/${userId}/carts`,
        method: 'POST',
        data: {cart: {user_id: userId}}
    })
)