import React from 'react'
import { NavLink } from 'react-router-dom'
import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'


const mapStateToProps = (state, ownProps) =>({
    errors: state.errors.session,
    formType: 'Login',
    navLink: <NavLink className='session-link'
    to="/signup">New customer? Sign up</NavLink>
});

const mapDispatchToProps = (dispatch) =>({
    processForm: (formUser)=> dispatch((login(formUser)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);