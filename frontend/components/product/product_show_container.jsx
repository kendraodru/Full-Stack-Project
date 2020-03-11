import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';
import {postCartItem, updateCartItem} from '../../actions/cart_item_actions'


const mapStateToProps = (state, ownProps) =>({
    product: state.entities.products[ownProps.match.params.productId],
    cart: state.entities.cart,
    cartItems: Object.values(state.entities.cartItems)
});

const mapDispatchToProps = dispatch  =>({
    fetchProduct: productId =>(dispatch(fetchProduct(productId))),
    fetchProducts: () => (dispatch(fetchProducts())),
    postCartItem: (cartItem) => (dispatch(postCartItem(cartItem))),
    updateCartItem: (cartItem) => (dispatch(updateCartItem(cartItem)))
});


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ProductShow);