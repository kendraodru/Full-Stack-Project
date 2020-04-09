import React from 'react'

const UpperMid = () =>{


    return(
        <div className='upper-splash-wrap'>
            <div className='pic-and-title'>
                <div className='upper-splash-title'>
                    All Skin
                    <br/>
                    Is Normal
                </div>
                <div className='upper-splash-pic'>
                    <img src="https://youth-to-the-people-seeds.s3-us-west-1.amazonaws.com/splash/allskin.jpg" alt=""/>
                </div>
            </div>
            
            <div className='upper-splash-para-info'>
                <div className='normal-skin-info'>
                    Having “normal” skin is an important topic of 
                    conversation in skincare, and there hasn’t 
                    really been a standard for what that means 
                    in the industry.
                </div>
                <div>
                    <button className="normal-skin-btn no-outline">
                        <span>READ MORE</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default UpperMid;