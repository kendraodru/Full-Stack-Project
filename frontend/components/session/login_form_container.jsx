import React from 'react'
import { NavLink } from 'react-router-dom'
import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) =>({
    errors: state.errors.session,
    formType: 'Login',
});

const mapDispatchToProps = (dispatch) =>({
    processForm: (formUser)=> dispatch((login(formUser))),
    // fetchCart: () => (dispatch(fetchCart())),
    clearErrors: () => dispatch(clearSessionErrors()),
    otherForm: (
        <span className="submit-session" onClick={() => dispatch(openModal('signup'))}>
           <p>New Customer? Sign up</p>
        </span>),
    closeModal: () => dispatch(closeModal())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);