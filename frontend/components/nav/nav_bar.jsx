import React from 'react';
import { Link } from 'react-router-dom'
// need to fix my link
class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quantity: this.props.cartItems.length
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.cartItems !== this.props.cartItems){
            const numProducts = this.props.cartItems.length
            this.setState({quantity: numProducts})
        }
    }
 
 

    render(){
        const  { currentUser, logout, otherForm, cart } = this.props
        const cartId = (cart) ? cart.id : "/"

        const display = (currentUser) ? (
            <span className='root-title'>
                <span className='nav-btn' onClick={logout}>LOGOUT</span>
            </span>
        ) : (
                <span className='root-title'>
                    {otherForm}
                </span>
            )

        return(
            <div className='root-nav'>
                <div className='root-left'>
                    <div className='root-nav-item'>
                        <span className='root-title'>
                            <Link className='nav-btn' to='/products'>SKIN CARE</Link>
                        </span>
                    </div>
                    <div className='root-nav-item'>
                        <span className='root-title'>
                            <span className='nav-btn'>TO THE PEOPLE</span>
                        </span>
                    </div>
                    <div className='root-nav-item'>
                        <span className='root-title'>
                            <span className='nav-btn'>ABOUT</span>
                        </span>
                    </div>
                </div>
                <div className='root-middle'>
                    <a href='/' >
                        <img src="/assets/yttplogo.png" className='nav-image' alt="Youth to the People"/>
                    </a>
                </div>
                <div className='root-right'>
                    <div className='root-nav-item'>
                        {display}
                    </div>
                    <div className='root-nav-item'>
                        <span className='root-title'>
                            <span className='nav-btn'>SEARCH</span>
                        </span>
                    </div>
                    <div className='root-nav-item'>
                        <span className='root-title'>
                            <a href={`/#/cart/${cartId}`}>
                                 {/* <span className='nav-btn'>CART({this.state.quantity})</span> */}
                                 <span className='nav-btn'>CART({this.state.quantity})</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
};

export default NavBar