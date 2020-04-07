import React from 'react';

class Purchased extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className='full-purchase-wrap'>
                <div className='close-x-div-purchased'>
                    <span
                        onClick = {()=>this.props.closeModal()}
                        id="close-x-purchased"
                        className="close-x">×
                     </span>
                </div>
                <div className='purchased-wrap'>
                    <div className='purchased'>Purchase Sucessful</div>
                    <div className='thank-you'>Thank you for visiting</div>
                    <div id="contact-icon-holder" className='contact-icon-holder'>
                        <a id='purchase-icon' href="https://github.com/kendraodru"><i id='icon' className="fab fa-github"></i></a>
                        <a id='purchase-icon' href="https://angel.co/kendra-odrunia"><i id='icon' className="fab fa-angellist"></i></a>
                        <a id='purchase-icon'href="https://www.linkedin.com/in/kendra-odrunia-9272441a4/"><i id='icon' className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        )
    }
};

export default Purchased;