import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct, fetchProducts } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) =>({
    product: state.entities.products[ownProps.match.params.productId]
});

const mapDispatchToProps = dispatch  =>({
    fetchProduct: productId =>(dispatch(fetchProduct(productId))),
    fetchProducts: () => (dispatch(fetchProducts()))
});


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ProductShow);