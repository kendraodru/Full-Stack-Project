import { connect } from 'react-redux';
import ProductIndex from  './product_index';
import { fetchProducts } from '../../actions/product_actions';


const mapStateToProps = state =>({
    products: Object.values(state.entities.products),
    cart: state.entities.carts,
    currentUser: state.entities.users[state.session.id]
})
// cart : {95:{}}


const mapDispatchToProps = dispatch => ({
    fetchProducts: ()=> (dispatch(fetchProducts())),
    postCartItem: (cartItem) => (dispatch(postCartItem(cartItem)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductIndex)
