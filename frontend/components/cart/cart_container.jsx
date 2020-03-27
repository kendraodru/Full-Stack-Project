
import  { connect } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import { postCartItem, updateCartItem, deleteCartItem } from '../../actions/cart_item_actions';
import { fetchProducts } from '../../actions/product_actions';
import CartShow from './cart_show';
import { closeModal } from '../../actions/modal_actions';

const MapStateToProps = (state, ownProps) =>({
    cart: state.entities.cart,
    // products: state.entities.products,
    products: state.entities.cartProducts,
    cartItems: Object.values(state.entities.cartItems)
})


const mapDispatchToProps = dispatch =>({
    fetchCart: () => (dispatch(fetchCart())),
    updateCartItem:(cartItem)=>(dispatch(updateCartItem(cartItem))),
    deleteCartItem:(cartItemId)=> (dispatch(deleteCartItem(cartItemId))),
    closeModal: ()=>(dispatch(closeModal()))
});

export default connect(
    MapStateToProps,
    mapDispatchToProps
)(CartShow)


// ASK ANGELA, how do we know to invoke the 
// function that is in dispatch, does dispatch invoke 
// it for us
// ^ looks like [{id: 1, user_id:1}]