
import  { connect } from 'react-redux';
import { fetchCart, completePurchase } from '../../actions/cart_actions';
import { postCartItem, updateCartItem, deleteCartItem } from '../../actions/cart_item_actions';
import { fetchProducts } from '../../actions/product_actions';
import CartShow from './cart_show';
import { closeModal, openModal } from '../../actions/modal_actions';

const MapStateToProps = (state, ownProps) =>({
    cart: state.entities.cart,
    currentUser: Object.keys(state.entities.users),
    products: state.entities.cartProducts,
    cartItems: Object.values(state.entities.cartItems)
})


const mapDispatchToProps = dispatch =>({
    fetchCart: () => (dispatch(fetchCart())),
    updateCartItem:(cartItem)=>(dispatch(updateCartItem(cartItem))),
    deleteCartItem:(cartItemId)=> (dispatch(deleteCartItem(cartItemId))),
    closeModal: ()=>(dispatch(closeModal())),
    openModal: (type)=>(dispatch(openModal(type))),
    completePurchase: () => (dispatch(completePurchase()))
});

export default connect(
    MapStateToProps,
    mapDispatchToProps
)(CartShow)
