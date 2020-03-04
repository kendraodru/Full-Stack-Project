import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import sessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Create Account',
    navLink: <NavLink className='session-link'to="/login">Already a customer? Login</NavLink>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formUser) => dispatch((signup(formUser))),
    otherForm: (
        <span className="submit-session" onClick={() => dispatch(openModal('login'))}>
            <p>Existing Account? Login</p>
        </span>),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);