import React from 'react'
import { NavLink } from 'react-router-dom'
import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) =>({
    errors: state.errors.session,
    formType: 'Login',
    // navLink: <NavLink className='session-link'
    // to="/signup">New customer? Sign up</NavLink>
});

const mapDispatchToProps = (dispatch) =>({
    processForm: (formUser)=> dispatch((login(formUser))),
    clearErrors: () => dispatch(clearSessionErrors()),
    otherForm: (
        <span className="submit-session" onClick={() => dispatch(openModal('signup'))}>
            New Customer? Sign up
        </span>),
    closeModal: () => dispatch(closeModal())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);