import React from 'react';

const BottomMidSplash = () =>{
    return(
        <div className='bottom-mid-splash-root'>
            <div className="nat-skin-pic">
                <img src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/splash/naturalskin.jpg" alt=""/>
            </div>
            <div className='bottom-mid-splash-info-wrap'>
                <div className='bottom-mid-splash-title'>
                    Reach for a Higher Standard
                </div>
                <div className='bottom-mid-splash-para'>
                    We create consciously-sourced, nutrient-dense superfood 
                    blends and pair them with clinical PRO-GRADE VEGAN™ actives 
                    for powerful results. Founded in 2015, Youth To The People 
                    continues its legacy as a California-based, family-owned 
                    brand built on three generations of professional skincare 
                    expertise, research, and mindful activism. We are skincare 
                    for all.
                </div>
                <div className='bottom-mid-splash-btn-div'>
                    <button>
                        READ MORE
                        {/* <span className='bottom-mid-splash-name'>Read More</span> */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BottomMidSplash;