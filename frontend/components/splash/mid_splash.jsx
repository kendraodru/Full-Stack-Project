import React from 'react';
// import ProductIndexItem from '../product/product_index_item';
// import ProductShow from '../product/product_show';

const MidSplash = () =>{

    return(
        <div className='outter-mid-wrapper'>
           <div className='splash-mid-title'>
                Best Sellers
            </div> 
            <div className='outter-best-items'>
                <div className="best-item-wrapper">
                    <div className='best-item-img'>
                        <img src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/superfood_cleanser/0.jpg" alt=""/>
                       
                    </div>
                    <div className="best-item-title-wrap">
                        <div className='best-item-title'>
                            Superfood Cleanser
                        </div>
                    </div>
                </div>
                <div className="best-item-wrapper">
                    <div className='best-item-img'>
                        <img id="elem" src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/kombucha/0.jpg" alt="" />
                    </div>
                    <div className='best-item-title-wrap'>
                        <div className='best-item-title'>
                            Kombucha + 11 AHA Exfoliation Power Toner
                        </div>
                    </div>
                </div>
                <div className="best-item-wrapper">
                    <div className='best-item-img'>
                        <img src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/superberry/0.jpg" alt="" />
                    </div>
                    <div className="best-item-title-wrap">
                        <div className='best-item-title'>
                            Superberry Hydrate + Glow Dream Mask
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MidSplash