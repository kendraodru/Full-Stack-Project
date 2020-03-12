import React from 'react';

const Banner = () =>{
    return(
        <div className='banner-root'>
            <div className='banner-wrap'>
                <div className="free-ship">
                    Free Shipping $50+
                    <br/>
                    and Free Returns
                </div>
                <div className='banner-info'> 
                    <div className='banner-how'>
                        HERE'S
                        <br/>
                        HOW:
                    </div>
                    <div className='banner-how-info'>
                        Spend $50 or more to receive free standard 
                        shipping + free, easy returns. Offered at Checkout.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;