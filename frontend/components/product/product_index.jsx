import React from 'react'
import ProductIndexItem from './product_index_item';


class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    render(){
        const products = this.props.products.map((product) =>{
            return(
                <div key={product.id}>
                    <ProductIndexItem product = {product} />
                </div>
            )
        });
        
        return (
            <div>
                <div className="hamburger"></div>
                {products}
            </div>
        )
    };
};

export default ProductIndex;