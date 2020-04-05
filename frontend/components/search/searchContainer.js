import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions'
import SearchProducts from './search_product_index';
import {closeModal} from '../../actions/modal_actions'


const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch =>({
    fetchProducts: ()=>(dispatch(fetchProducts())),
    closeModal: () => (dispatch(closeModal()))
})


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SearchProducts)