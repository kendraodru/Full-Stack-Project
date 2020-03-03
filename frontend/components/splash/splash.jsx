import React from 'react'

const Splash = ()=>{
    return(
        <div className = 'splash-wrapper'>
            <div className="hamburger"></div>
            <div className="root-pic">
                {/* <img className="front-image" src={window.images.oil}></img> */}
                <div className="main-content">
                    <div className="main-pic-text">
                        Good Skin
                        <br/>
                        Starts Here
                    </div>   
                    <div className="main-pic-para">
                        Intelligent multitasking hydration powered by antioxidant-rich 
                        adaptogens, hyaluronic acid, and activated neuropeptides. It's ultra-fine 
                        and ready for your top shelf.
                    </div>
                    <div className='shop-now'>
                        <button className='shop-now-btn'>
                            <a className='shop-now-href 'href="/">SHOP NOW</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;