import React from 'react'
import ProductIndexItem from './product_index_item';
import Loading from '../loading/spinner'

class ProductIndex extends React.Component {
    constructor(props){
        // debugger
        super(props)
    }

    componentDidMount(){
        // debugger
        this.props.fetchProducts();
    }

    render(){
        // debugger
        const products = this.props.products.map((product) =>{
            return(
                <ProductIndexItem 
                product={product} 
                key={product.id} 
                postCartItem={this.props.postCartItem}
                updateCartItem={this.props.updateCartItem}
                cart={this.props.cart}
                currentUser ={this.props.currentUser}
                cartItems = {this.props.cartItems}
                />
            )
        });

        if (this.props.products.length === 0){
            return <Loading />
        };
        
        return (
            <div className="products-wrapper">
                <div className="hamburger"></div>
                    <div className="inner-products-wrapper">
                        {products}
                    </div>
            </div>
        )
    };
};

export default ProductIndex;