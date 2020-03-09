import * as productAPIUtil from '../util/products_api_util'


export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

// actions
export const receive_products = (payload) =>({
    type: RECEIVE_PRODUCTS,
    payload
})

export const receive_product = (payload) =>({
    type: RECEIVE_PRODUCT,
    payload
})

// these below are action creators

// export const fetchProducts = () => dispatch =>(
//     productAPIUtil.fetchProducts()
//         .then(products => (dispatch(receive_products(products))))
// )
export const fetchProducts = () => dispatch =>(
    productAPIUtil.fetchProducts()
        .then(payload => (dispatch(receive_products(payload))))
)

export const fetchProduct = (productId) => dispatch =>{
    return productAPIUtil.fetchProduct(productId)
        .then(payload => (dispatch(receive_product(payload))))
        // .then((payload) =>console.log(payload))
}