import React from 'react';
// import { Link } from 'react-router-dom';

const SearchProductItem = (props)=>{
    
    let { product } = props;

    return(
        <div>
            <a href={`/#/products/${product.name}/${product.id}`}>
                {product.name}
            </a>
        </div>
    )
}

export default SearchProductItem;