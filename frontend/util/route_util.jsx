import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

//user doesnt see this page if they are logged in
const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) }
}

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);


// if the user is logged in they can see the componenet, otherwise redirected
const Protected = ({ loggedIn, path, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        // debugger
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
)

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);
