import React from 'react';
import Carousel from '../carousel/carousel';
import Loading from '../loading/spinner';

class ProductShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            updated: false
        }
        this.handleChangingCartItem = this.handleChangingCartItem.bind(this)
    }

    componentDidMount(){
        // this.props.fetchProducts()
        this.props.fetchProduct(this.props.match.params.productId);
        // debugger
    }

    componentWillUnmount(){
        debugger
    }

    componentDidUpdate(prevProps, prevState){
        // this.props.fetchProduct(this.props.match.params.productId);
        // because this is making the prop update, its going into an infinite loop,
        // updating causes it to "update"
        // if (prev)
        if (prevProps !== this.props){
            this.setState({updated: !this.state.updated})
        }
    }
    


    handleChangingCartItem() {
        let existingCartItem;
        const cart = this.props.cart
        const { product } = this.props

        this.props.cartItems.forEach(cartItem => {
            if (cartItem.product_id === product.id) {
                existingCartItem = cartItem
            }
        });

        if (existingCartItem) {

            let updatedItem = {
                id: existingCartItem.id,
                cart_id: existingCartItem.cart_id,
                product_id: existingCartItem.product_id,
                quantity: existingCartItem.quantity + 1
            }

            this.props.updateCartItem(updatedItem);
        }
        else {
            const newCartItem = { cart_id: cart.id, product_id: product.id };
            this.props.postCartItem(newCartItem);
        }

    }


    render(){
        debugger
        if (this.props.product === undefined) {
            return <Loading />;
        };
        
        const { product } = this.props
        return(
            <div>
                <div className="hamburger"></div>
                <div className="inner-show-wrapper">
                    <div className='show-main-content'>
                        <div className='show-main-content-wrapper'>
                            <div className='show-pic-wrapper'>
                                <div className="show-pic">
                                    < Carousel product={ this.props.product } />
                                </div>
                            </div>
                            <div className='show-content-info-wrapper'>
                                <div className='show-info'>
                                    <div className='show-basic-info'>
                                        <div className='show-product-title'>
                                            {product.name}
                                        </div>
                                        <div className='show-product-price'>
                                            {`$${product.price} / ${product.size}`}
                                        </div>
                                        <div className='show-product-rating'>
                                            Rated 4.5 stars out of 5
                                        </div>
                                    </div>
                                    <div>
                                        <div className='show-product-description'>
                                            {product.description}
                                        </div>
                                    </div>
                                    <div>
                                        <a className='show-read-more' href="/">Read more</a>
                                    </div>
                                    <div className='show-add-to-cart'>
                                        <button className='show-add-to-cart-btn' onClick={() => this.handleChangingCartItem()}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <div className='show-info-btn'>
                                    <div className='inner-show-info-btn'>
                                        <div className="show-share">
                                            Share on:
                                        </div>
                                        <div className="show-icon">
                                            <i className="fab fa-facebook-square"></i>
                                            <i className="fab fa-twitter-square"></i>
                                            <i className="fab fa-pinterest-square"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default ProductShow