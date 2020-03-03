import React from 'react'
import { NavLink } from 'react-router-dom'
import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) =>({
    errors: state.errors.session,
    formType: 'Login',
    navLink: <NavLink className='session-link'
    to="/signup">New customer? Sign up</NavLink>
});

const mapDispatchToProps = (dispatch) =>({
    processForm: (formUser)=> dispatch((login(formUser))),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
      </button>),
    closeModal: () => dispatch(closeModal())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);