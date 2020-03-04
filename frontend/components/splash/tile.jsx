import React from 'react';

const Tile = () =>{
    return(
        <div>
            <div className="spalsh-tile">
                <img src="https://cdn.shopify.com/s/files/1/0466/9701/files/YTTP_SITE_ICONS-Vegan_300x300_8144ca39-7621-4e02-8b21-61fba84c9a19_300x300.png?v=1568164109" alt="" />
                <div className='tile-title'>
                    100% Vegan
                            </div>
                <div className='tile-text' >
                    Cruelty-free = no animal products + no animal testing
                            </div>
            </div>
            <div className="spalsh-tile">
                <img src="https://cdn.shopify.com/s/files/1/0466/9701/files/YTTP-SITE-ICONS-MadeinCA_300x300_2a761f7f-cce9-4b52-9be9-b2f7442c347f_300x300.png?v=1568164132" alt="" />
                <div className='tile-title'>
                    Made in California
                            </div>
                <div className='tile-text' >
                    Three generations of skincare expertise rooting in California
                            </div>
            </div>
            <div className="spalsh-tile">
                <img src="https://cdn.shopify.com/s/files/1/0466/9701/files/YTTP-SITE-ICONS-Everyone_300x300_803246d6-79e0-44dd-bb32-9d89b546f446_300x300.png?v=1568164143" alt="" />
                <div className='tile-title'>
                    Skincare for All
                            </div>
                <div className='tile-text' >
                    We create for all - all genders, all skin types, all skin tones. all people
                </div>
            </div>
        </div>
    )
}

export default Tile