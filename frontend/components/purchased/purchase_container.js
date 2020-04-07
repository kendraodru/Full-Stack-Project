import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Purchased from './purchased'

const mapStateToProps = (state) =>({
    currentUser: state.entities.users
})

const mapDispatchToProps = dispatch =>({
    closeModal: ()=>(dispatch(closeModal()))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Purchased)