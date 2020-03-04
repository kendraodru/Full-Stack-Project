import React from 'react'

const ProductIndexItem = ({product, key }) =>{
    return (
        <div className='product-root' key= {key}>
            {/* <div className='product-content'> */}
                <div className='product-pic'>
                <img src="https://images.unsplash.com/photo-1551945326-df678a97c3af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
                <div className='product-info'>
                    <div className="basic-info">
                        <div className='product-name'>
                            <span>{product.name}</span>
                        </div>
                        <div className='product-nums'>
                            <span>{`$${product.price} / ${product.size}`}</span>
                        </div>
                    </div>
                    <div className="product-btn-div">
                        <button className='product-show-btn'>Add to cart</button>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default ProductIndexItem