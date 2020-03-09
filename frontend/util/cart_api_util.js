export const fetchCart = ()=>(
    $.ajax({
        url:`api/carts/show`,
        method: 'GET'
    })
);

