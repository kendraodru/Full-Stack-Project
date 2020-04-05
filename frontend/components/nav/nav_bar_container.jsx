import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {

    // . Hacky....fix this
    return({currentUser: state.entities.users[state.session.id],
    cart: state.entities.cart,
    // cart: Object.values(state.entities.carts)[0],
    cartItems: Object.keys(state.entities.cartItems)
    })

};

const mapDispatchToProps = (dispatch) => ({
    logout: () => (dispatch(logout())),
    otherForm: (
        <span className='nav-btn' onClick={() => dispatch(openModal('login'))}>
            LOGIN
      </span>
    ),
    // closeModal: () => dispatch(closeModal()),
    cartForm: (
        <span
            className='nav-btn'
            onClick={() => dispatch(openModal('cart'))}>
            CART
        </span>
    ),
    searchForm: (
        <span
            className='nav-btn'
            onClick={() => dispatch(openModal('search'))}>
            SEARCH
        </span>
    ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);