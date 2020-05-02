import React from 'react'

const Footer = ()=>{
    return(
        <footer>
            <div className='top-logo'></div>
                <img className="yttp-footer-logo" src="https://cdn.shopify.com/s/files/1/0466/9701/files/yttp-logo_321x_2x_321x_2x_321x_2x_7ccc446e-d83f-454d-a826-0710f3c46b44_321x@2x.png?v=1562194452" alt=""/>
            <div className='bottom-logo'></div>
                <div>
                    <div className="inner-footer">
                        <div className='contact-icon-holder'>
                            <a href="https://github.com/kendraodru"><i id='icon' className="fab fa-github"></i></a>
                            <a href="https://kendraodru.tech"><i id='icon' className="fab fa-dev"></i></a>
                            <a href="https://angel.co/kendra-odrunia"><i id='icon' className="fab fa-angellist"></i></a>
                            <a href="https://www.linkedin.com/in/kendra-odrunia-9272441a4/"><i id='icon' className="fab fa-linkedin"></i></a>
                        </div>
                    </div> 
                </div>
        </footer>
    )
};

export default Footer;