import { connect } from 'react-redux';
import ProductIndex from  './product_index';
import { fetchProducts } from '../../actions/product_actions';
import { postCartItem, updateCartItem } from '../../actions/cart_item_actions'


const mapStateToProps = state =>{
    // debugger
    return ({products: Object.values(state.entities.products),
    cart: state.entities.cart,
    // cart: Object.values(state.entities.carts),
    currentUser: state.entities.users[state.session.id],
    cartItems: state.entities.cartItems
    })
}
// my cart infomation doesn't persist when i navigate away


const mapDispatchToProps = dispatch => ({
    fetchProducts: ()=> (dispatch(fetchProducts())),
    postCartItem: (cartItem) => (dispatch(postCartItem(cartItem))),
    updateCartItem: (cartItem) => (dispatch(updateCartItem(cartItem)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductIndex)
