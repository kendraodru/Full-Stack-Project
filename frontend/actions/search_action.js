import * as productAPIUtil from '../util/products_api_util'

export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";


export const searchProducts = (payload) =>({
    type: SEARCH_PRODUCTS,
    payload
})

export const fetchSearchProducts = () => dispatch => (
    productAPIUtil.fetchProducts()
        .then(payload => (dispatch(searchProducts(payload))))
)