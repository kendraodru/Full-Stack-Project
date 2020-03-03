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
    <footer>
        <div className='footer-links'>
            <div className='footer-set'>
                <div className='footer-title'>
                    <span>Shop</span>
                </div>
                <div className='footer-title-items'>
                    <a id="a" href="/">All Skin Care</a>
                    <a id="a" href="/">Face Cleansers</a>
                    <a id="a" href="/">Eye Cream</a>
                </div>
            </div>
            <div className='footer-set'>
                <div className='footer-title'>
                    <span>About</span>
                </div>
                <div className='footer-title-items'>
                    <a id="a" href="/">Our Ethos</a>
                    <a id="a" href="/">Our Mission</a>
                    <a id="a" href="/">Our Story</a>
                </div>
            </div>
            <div className='footer-set'>
                <div className='footer-title'>
                    <span>Social</span>
                </div>
                <div className='footer-title-items'>
                    <span><a id="a" href="/">Facebook</a></span>
                    <span><a id="a" href="/">Pinterest</a></span>
                    <span> <a id="a" href="/">Instagram</a></span>
                </div>
            </div>
        </div>
    </footer>
    </div>
);

export default App;