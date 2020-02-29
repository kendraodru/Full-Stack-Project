import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
const App = () =>(
    <div>
        <header>
            <Link to='/' className='header-link'>
                <h1>Youth To The People</h1>
            </Link>
            <GreetingContainer />
        </header>
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    </div>
);

export default App;