import React from 'react';
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
                        {/* <div className='best-item-pic-1'></div> */}
                        <img src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/superfood_cleanser/0.jpg" alt=""/>
                        {/* <img src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/superfood_cleanser/1.jpg" alt=""/> */}
                       
                    </div>
                    <div className="best-item-title-wrap">
                        <div className='best-item-title'>
                            Superfood Cleanser
                        </div>
                    </div>
                </div>
                <div className="best-item-wrapper">
                    <div className='best-item-img'>
                        {/* <div className='best-item-pic-2'></div> */}
                        <img id="elem" src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/kombucha/0.jpg" alt="" />
                        {/* <img id="elem" className="testing-hover" src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/kombucha/1.jpg" alt=""/> */}

                    </div>
                    <div className='best-item-title-wrap'>
                        <div className='best-item-title'>
                            Kombucha + 11 AHA Exfoliation Power Toner
                        </div>
                    </div>
                </div>
                <div className="best-item-wrapper">
                    <div className='best-item-img'>
                        {/* <div className='best-item-pic-3'></div> */}
                        <img src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/superberry/0.jpg" alt="" />
                        {/* <img src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/superberry/1.jpg" alt=""/> */}
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