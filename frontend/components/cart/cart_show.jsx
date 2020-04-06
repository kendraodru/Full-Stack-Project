import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';
import Loading from '../loading/spinner'

class CartShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser
        }
    }

    componentDidMount(){
        this.props.fetchCart();

        const overlay = document.querySelector('.modal-background'); 
        const cartBody = document.querySelector('.out-most-cart-wrap'); 
        const xBtn = document.querySelector('.close-x-cart'); 
        console.log(overlay)
        console.log(cartBody)
        debugger
        overlay.addEventListener('click', () => {            
            window.setTimeout(() => this.props.closeModal(), 300);
            cartBody.style.transition = "all 0.3s ease-in-out";
            cartBody.style.right = "-1000px";
        });


        xBtn.addEventListener('click', e => {
            e.preventDefault();

            window.setTimeout(() => this.props.closeModal(), 300);
            cartBody.style.transition = "all 0.3s ease-in-out";
            cartBody.style.right = "-1000px";
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.setState({currentUser: this.props.currentUser})
        }
    }

    render(){
        if (this.props.cart === undefined) {
            return <Loading />;
        };

        const items = this.props.cartItems.map((item, idx)=>{
            return(
                <CartItem
                key={idx} 
                item={item}
                products={this.props.products}
                updateCartItem = {this.props.updateCartItem}
                deleteCartItem = {this.props.deleteCartItem} 
                />
            )
        })

        const emptyCart = () =>{
            if (items.length === 0){
                return(
                    <div className='emptyCart'>
                        <div>
                            <i className="fas fa-shopping-bag"></i>
                            {/* <i className="fas fa-cart-arrow-down"></i> */}
                        </div>
                        <div className='empty-cart-para'>
                            Your cart is empty
                        </div>
                    </div>
                )
            }
        }


        return(
            <div>
                <div className='modal-background'></div>
                <div className='out-most-cart-wrap'>
                        <div className='close-x-div-cart'>
                            <span 
                            className="close-x-cart">×
                            </span>
                        </div>
                    <div className="cart-header">Cart</div>
                    <div className='all-items'>
                        {items}
                        {emptyCart()}
                    </div>
                    <div className='cart-btm'>
                        <Link className='ckout-link' onClick={this.props.closeModal} to='/purchased'>
                            <button 
                            onClick={() => this.props.completePurchase()}
                            className='ckout-btn'>
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartShow