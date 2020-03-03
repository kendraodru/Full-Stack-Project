import { connect } from 'react-redux';
import ProductIndex from  './product_index';
import { fetchProducts } from '../../util/products_api_util';
const mapStateToProps = state =>({
    products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: dispatch(fetchProducts())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductIndex)
