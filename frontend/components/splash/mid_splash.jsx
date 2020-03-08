import React from 'react';

const MidSplash = () =>{
    return(
        <div className='outter-mid-wrapper'>
           <div className='splash-mid-title'>
                Best Sellers
            </div> 
            <div className='outter-best-items'>
                <div className="best-item-wrapper">
                    <div className='best-item-img'>
                        <img src="https://images.unsplash.com/photo-1530733895788-f39cc96b6ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                        {/* <img src="https://s1.r29static.com/bin/shop/746/x,85/1921613/image.webp" alt=""/> */}
                        {/* <img src="https://media.allure.com/photos/5c3fb097b44f422c9f00c6db/1:1/w_400%2Cc_limit/youth-to-the-people-super-mask.jpg" alt=""/> */}
                    </div>
                    <div className='best-item-title'>
                        Superfood Cleanser
                    </div>
                </div>
                <div className="best-item-wrapper">
                    <div className='best-item-img'>
                        <img src="https://images.unsplash.com/photo-1530733895788-f39cc96b6ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                            {/* <img src="https://media.allure.com/photos/5cd0800c0c6dfb3ab780f299/1:1/w_1600%2Cc_limit/seal-youth-to-the-people-superfood-antioxidant-cleanser.jpg" alt=""/> */}
                    </div>
                    <div className='best-item-title'>
                        Kombucha + 11 AHA Exfoliation Power Toner
                    </div>
                </div>
                <div className="best-item-wrapper">
                    <div className='best-item-img'>
                        <img src="https://images.unsplash.com/photo-1530733895788-f39cc96b6ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                            {/* <img src="https://cdn.shopify.com/s/files/1/0082/8299/6826/products/youth-to-the-people-superfood-skin-reset-mask-skincare-masks-youth-to-the-people-954402_250x.png?v=1566946377" alt=""/>
                             */}
                            {/* <img src="https://s1.r29static.com/bin/shop/746/x,85/1921613/image.webp" alt=""/> */}

                    </div>
                    <div className='best-item-title'>
                        Superberry Hydrate + Glow Dream Mask
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MidSplash