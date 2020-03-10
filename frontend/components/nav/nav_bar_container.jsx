import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
    // debugger. Hacky....fix this
    return({currentUser: state.entities.users[state.session.id],
    cart: Object.values(state.entities.carts)[0]
    })
    // debugger
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => (dispatch(logout())),
    otherForm: (
        <span className='nav-btn' onClick={() => dispatch(openModal('login'))}>
            LOGIN
      </span>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);