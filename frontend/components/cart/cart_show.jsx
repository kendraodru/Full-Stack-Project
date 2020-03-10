import React from 'react';
import CartItem from './cart_item';

class CartShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchCart();
    }

    // componentDidUpdate(prevProps) {
    //    debugger
    //     if (this.props.cartItems.length !== prevProps.cartItems.length) {
    //         this.props.fetchCart()
    //     }
    // }

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
                // fetchCart = {this.props.fetchCart}
                />
            )
        })

        return(
            <div>
                <div className='hamburger'></div>
                <div>
                    {items}
                </div>
            </div>
        )
    }
}

export default CartShow