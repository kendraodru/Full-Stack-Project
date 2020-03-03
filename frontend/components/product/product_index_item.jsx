import React from 'react'

const ProductIndexItem = ({product, key }) =>{
    return (
        <div className='product-root'>
            <div className='product-content'>
                <div className='product-pic'>

                </div>
                <div className='product-info'>
                    <div className='product-name'>
                        <span>{product.name}</span>
                    </div>
                    <div className='product-nums'>
                        <span>{`$${product.price} / ${product.size}`}</span>
                    </div>
                    <div>
                        <button className='product-show-btn'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductIndexItem