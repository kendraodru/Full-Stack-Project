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
                this.setState({quantity: addedQuantity})
                break;
            case 'subtract':
                let subbedQuantity = oldQuantity - 1;
                this.setState({ quantity: subbedQuantity })
                break;
        };  
    }

    handleCartItemDB(){
        const updatedItem = {
            id: this.props.item.id,
            cart_id: this.props.item.cart_id,
            product_id: this.props.item.product_id,
            quantity: this.state.quantity
        } 
        this.updateCartItem(updatedItem);
    }

    handleDeleteCartItem(){
        this.props.deleteCartItem(this.props.item.id)
    }



    render (){

        const { products } = this.props;
        const {item} = this.props;
        const product = products[item.product_id];
        // console.log(product)
        // console.log(this.props.products)

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
                            <div onClick={this.handleProductQuantity('subtract')}>
                                -
                            </div>
                            <div>
                                {item.quantity}
                            </div>
                            <div onClick={this.handleProductQuantity('add')}>
                                +
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CartItem;
// i need to create two more components that handle deleting and updating