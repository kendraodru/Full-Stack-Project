import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav/nav_bar_container';
const App = () =>(
    <div>
        <header className="welcome-header">
            {/* <Link to='/' className='header-link'>
                <h1>Youth To The People</h1>
            </Link> */}
            {/* <GreetingContainer /> */}
            {<NavBarContainer/>}
        </header>
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path='/' component={Splash}/>
    </Switch>
    </div>
);

export default App;