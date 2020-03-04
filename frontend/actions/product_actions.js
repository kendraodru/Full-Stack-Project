import * as productAPIUtil from '../util/products_api_util'


export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

// actions
export const receive_products = (products) =>({
    type: RECEIVE_PRODUCTS,
    products
})

export const receive_product = (product) =>({
    type: RECEIVE_PRODUCT,
    product
})

// these below are action creators

export const fetchProducts = () => dispatch =>(
    productAPIUtil.fetchProducts()
        .then(products => (dispatch(receive_products(products))))
)

export const fetchProduct = (productId) => dispatch =>(
    productAPIUtil.fetchProduct(productId)
        .then(product => (dispatch(receive_product(product))))
)