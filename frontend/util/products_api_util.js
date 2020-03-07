export const fetchProducts = ()=>(
    $.ajax({
        url: "/api/products",
        method: 'GET'
    })
) 

export const fetchProduct = (productId)=>(
    $.ajax({
        url: `/api/products/${productId}`,
        method: 'GET'
    })
) 

// Cart products
export const fetchCartProducts = (cartId) =>(
    $.ajax({
        url:`api/carts/${cartId}/products`,
        method: 'GET'
    })
)