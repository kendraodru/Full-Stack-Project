import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions'
import {fetchSearchProducts} from '../../actions/search_action'
import SearchProducts from './search_product_index';
import {closeModal} from '../../actions/modal_actions'


const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products)
    // products: Object.values(state.entities.searchProducts)
})

const mapDispatchToProps = dispatch =>({
    fetchProducts: () => (dispatch(fetchProducts())),
    closeModal: () => (dispatch(closeModal()))
})


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SearchProducts)