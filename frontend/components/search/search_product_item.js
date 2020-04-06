import React from 'react';
import { Link } from 'react-router-dom';

const SearchProductItem = (props)=>{
    
    let { product } = props;

    return(
        <div>
            <Link to={`/products/${product.name}/${product.id}`}>
                {product.name}
            </Link>
        </div>
    )
}

export default SearchProductItem;