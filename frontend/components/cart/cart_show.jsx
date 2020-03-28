import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';
import Loading from '../loading/spinner'

class CartShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchCart();
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

        // let total = 0;
        // let allProducts = this.props.products;
        // this.props.cartItems.map((item,idx)=>{
        //     debugger
        //     total += allProducts[item.product_id].price
        // })

        return(
            <div className='out-most-cart-wrap' onClick={e => e.stopPropagation()}>
                    <div className='close-x-div-cart'>
                        <span 
                        onClick={this.props.closeModal} 
                        className="close-x-cart">×
                        </span>
                    </div>
                <div className="cart-header">Cart</div>
                {items}
                <div className='cart-btm'>
                    {/* <div>
                        <span>Shipping</span>
                        <span>CALCULATED AT CHECKOUT</span>
                    </div>
                    <div>
                        <span>Subtotal</span>
                        <span>{total}</span>
                    </div> */}
                    <Link className='ckout-link' onClick={this.props.closeModal} to='/purchased'>
                        <button className='ckout-btn'>Checkout</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CartShow