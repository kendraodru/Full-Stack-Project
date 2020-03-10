import React from 'react';

class CartItem extends React.Component{
    constructor(props){
        super(props);
        debugger
        

        this.state = {
            quantity: this.props.item.quantity,
            // price: (this.props.products[this.props.item.product_id].price * this.props.item.quantity)
        }

        this.handleProductQuantity = this.handleProductQuantity.bind(this);
        this.handleCartItemDB = this.handleCartItemDB.bind(this);
        this.handleDeleteCartItem = this.handleDeleteCartItem.bind(this);
    }

    // componentDidUpdate(prevProps){
    //     // use preProps when youre not usng a local state, can use local here
    //     // if (this.state.quantity !== preProps.item.quantity)
    //     if (this.state.quantity !== this.props.item.quantity){
    //         this.props.fetchCart()
    //     }
    // }



    handleProductQuantity(type){
        
        let oldQuantity = this.state.quantity;
        switch(type){
            case 'add':
                let addedQuantity = oldQuantity + 1;
                this.handleCartItemDB(addedQuantity)
                    .then(() => this.setState({ quantity: addedQuantity }))
                break;
            case 'subtract':
                let subbedQuantity = oldQuantity - 1;
                this.handleCartItemDB(subbedQuantity)
                    .then(() => this.setState({ quantity: subbedQuantity }))
                break;
        };  
    }


    handleCartItemDB(quantity){
        const updatedItem = {
            id: this.props.item.id,
            cart_id: this.props.item.cart_id,
            product_id: this.props.item.product_id,
            quantity: quantity
        } 
        return this.props.updateCartItem(updatedItem);
    }

    handleDeleteCartItem(){
        this.props.deleteCartItem(this.props.item.id)
    }

    render (){    
        const { products } = this.props;
        const { item } = this.props;
        const product = products[item.product_id];

        if (product === undefined) {
            return null;
        }

        return(
            <div>
                <div>
                    <div className='cart-product-pic'>
                        <img src={product.photoUrls[0]} alt=""/>
                    </div>
                    <div className='cart-product-basic-info'>
                        <div> 
                            {product.name}
                        </div>
                        <div className="cart-product-updating">
                            <div onClick={()=> this.handleProductQuantity('subtract')}>
                                -
                            </div>
                            <div>
                                {this.state.quantity}
                            </div>
                            <div onClick={()=> this.handleProductQuantity('add')}>
                                +
                            </div>
                        </div>
                        <div>
                            space
                        </div>
                        <div className='delete-item-wrap'>
                            <div onClick={()=> this.handleDeleteCartItem()}>
                                Remove
                            </div>
                        </div>
                        <div className="price-wrapper">
                            <div>

                            </div>
                            <div>
                                {/* <span>${this.state.price}</span> */}
                                <span>${ product.price * this.state.quantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CartItem;
