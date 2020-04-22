import { connect } from 'react-redux';
import ProductIndex from  './product_index';
import { fetchProducts } from '../../actions/product_actions';
import { postCartItem, updateCartItem } from '../../actions/cart_item_actions';
import { openModal } from '../../actions/modal_actions'


const mapStateToProps = state =>{
    return ({products: Object.values(state.entities.products),
    cart: state.entities.cart,
    currentUser: state.entities.users[state.session.id],
    cartItems: Object.values(state.entities.cartItems)
    })
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: ()=> (dispatch(fetchProducts())),
    postCartItem: (cartItem) => (dispatch(postCartItem(cartItem))),
    updateCartItem: (cartItem) => (dispatch(updateCartItem(cartItem))),
    openCart: (type)=>(dispatch(openModal(type)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductIndex)
