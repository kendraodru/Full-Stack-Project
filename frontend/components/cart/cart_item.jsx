import React from 'react';

class CartItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            quantity: this.props.item.quantity
        }

        this.handleProductQuantity = this.handleProductQuantity.bind(this);
        this.handleCartItemDB = this.handleCartItemDB.bind(this);
        this.handleDeleteCartItem = this.handleDeleteCartItem.bind(this);
    }


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

                if (subbedQuantity < 1){
                    this.props.deleteCartItem(this.props.item.id)
                }else{this.handleCartItemDB(subbedQuantity)
                    .then(() => this.setState({ quantity: subbedQuantity }))
                break;
                }

                
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
            <div className='cart-product-outer-wrap'>
                <div className='indivi-cart-product-wrap'>
                    <div className='cart-product-pic'>
                        <img src={product.photoUrls[0]} alt=""/>
                    </div>
                    <div className='cart-product-basic-info'>
                        <div> 
                            {product.name}
                        </div>

                        {/* <div className='delete-item-wrap'>
                            <div onClick={() => this.handleDeleteCartItem()}>
                                Remove Item
                            </div>
                        </div> */}

                        <div className="price-update-wrap">
                            <div className="cart-product-updating">
                                <button onClick={()=> this.handleProductQuantity('subtract')}>
                                    -
                                </button>
                                <button id='curr-quantity'>
                                    {this.state.quantity}
                                </button>
                                <button onClick={()=> this.handleProductQuantity('add')}>
                                    +
                                </button>
                            </div>
                            <div className='delete-item-wrap'>
                                <div onClick={() => this.handleDeleteCartItem()}>
                                    Remove Item
                                </div>
                            </div>
                            <div>
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
