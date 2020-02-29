import React from 'react'
import { Link } from 'react-router-dom'
import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'


const mapStateToProps = (state, ownProps) =>({
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign up Page</Link>
});

const mapDispatchToProps = (dispatch) =>({
    processForm: (formUser)=> dispatch((login(formUser)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);