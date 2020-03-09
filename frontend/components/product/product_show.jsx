import React from 'react';
import Carousel from '../carousel/carousel';

class ProductShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render(){
        if (this.props.product === undefined) {
            return null;
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
                                    < Carousel product={ product } />
                                    {/* <img src="https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/> */}
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
                                        <button>Add to cart</button>
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