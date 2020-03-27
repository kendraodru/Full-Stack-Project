import React from 'react';
import CartItem from './cart_item';

class CartShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchCart();
    }

    render(){
        if (this.props.cart === undefined) {
            return null;
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

        return(
            <div className='out-most-cart-wrap' onClick={e => e.stopPropagation()}>
                <div className='close-x-div'>
                    <span 
                    onClick={this.props.closeModal} 
                    className="close-x">×
                    </span>
                </div>
                {items}
            </div>
        )
    }
}

export default CartShow