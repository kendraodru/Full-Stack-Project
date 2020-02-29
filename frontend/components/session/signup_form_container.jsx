import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import sessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Login Page</Link>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formUser) => dispatch((signup(formUser)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);