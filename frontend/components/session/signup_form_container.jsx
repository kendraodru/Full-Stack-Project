import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import sessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Create Account',
    navLink: <NavLink className='session-link'to="/login">Already a customer? Login</NavLink>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formUser) => dispatch((signup(formUser)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);