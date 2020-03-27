import React from 'react';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import Splash from './splash/splash';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from '../components/product/product_show_container';
import CartShowContainer from '../components/cart/cart_container';
import NavBarContainer from './nav/nav_bar_container';
import Modal from './modal/modal'
import Footer from './footer/footer'
import About from './about/about';
// import { AuthRoute } from '../util/route_util';
// import GreetingContainer from './greeting/greeting_container';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';


const App = () =>(
    <div>
        <Modal />
        <header className="welcome-header">
            {<NavBarContainer/>}
        </header>
        <Switch>
            <Route path='/products/:productName/:productId' component={ProductShowContainer}/>
            <Route path='/products' component={ProductIndexContainer}/>
            <Route path='/cart/:cartId' component={CartShowContainer}/>
            <Route path='/about' component={About}/>
            <Route path='/' component={Splash}/>
        </Switch>
        < Footer />
    </div>
);

export default App;