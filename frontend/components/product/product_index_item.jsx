import React from 'react'

class ProductIndexItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            currentIdx: 0
        }

        this.changePhoto = this.changePhoto.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleChangingCartItem = this.handleChangingCartItem.bind(this)
    }

    componentDidMount() {
        let container = document.querySelector(`#image-container-${this.props.product.id}`);
        let url = this.props.product.photoUrls[this.state.currentIdx + 1 % 2];
        container.style.backgroundImage = `url(${url})`;
    }
   

    changePhoto() {
        this.setState({ currentIdx: (this.state.currentIdx + 1) % 2 })
    }

    handleHover(e){
        e.preventDefault();
        this.changePhoto()
    }
    handleChangingCartItem(){
        let existingCartItem;
        const cart = this.props.cart
        const { product } = this.props

        this.props.cartItems.forEach(cartItem =>{
            if(cartItem.product_id === product.id){
                existingCartItem = cartItem
            }
        });

        if(existingCartItem){
            
            let updatedItem = {
                id: existingCartItem.id,
                cart_id: existingCartItem.cart_id,
                product_id: existingCartItem.product_id,
                quantity: existingCartItem.quantity+1
            }
            
            this.props.updateCartItem(updatedItem);
        }
        else{
            const newCartItem = {cart_id: cart.id, product_id: product.id};
            this.addCartItem(newCartItem);
        }
        
    }

    addCartItem(newCartItem){
        this.props.postCartItem(newCartItem);
    }

    render(){

        const { product } = this.props
    
        return (
            <div className='product-root' >
                    <a className="product-index-show-link" href={`/#/products/${product.name}/${product.id}`}>
                        
                        <div id={`image-container-${product.id}`} className='product-pic'>
                            <img className="hide-on-hover"
                            src={product.photoUrls[this.state.currentIdx]} alt="" />
                        </div>
                    </a>
                    <div className='product-info'>
                        <div className="basic-info">
                            <div className='product-name'>
                                <a className="product-index-show-link" href={`/#/products/${product.name}/${product.id}`}>
                                <div className="link">
                                    <span>{product.name}</span>
                                </div>
                                </a>
                            </div>
                            <div className='product-nums'>
                                <span>{`$${product.price} / ${product.size}`}</span>
                            </div>
                        </div>
                        <div className="product-btn-div">
                        <button onClick={() => this.handleChangingCartItem()} 
                        className='product-show-btn'>Add to cart</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ProductIndexItem
