import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import ProductIndexContainer from './product/product_index_container';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav/nav_bar_container';
import Modal from './modal/modal'
import Footer from './footer/footer'

const App = () =>(
    <div>
        {/* <Modal /> */}
        <header className="welcome-header">
            {<NavBarContainer/>}
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path='/products' component={ProductIndexContainer}/>
            <Route path='/' component={Splash}/>
        </Switch>
        < Footer />
    </div>
);

export default App;