import React from 'react';

class Purchased extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            <div className='fadeMe'>
                <div className='hamburger'></div>
                <div className='purchased-wrap'>
                    {/* <div className='purchased-banner'></div> */}
                    <div className='purchased'>Purchase Sucessful</div>
                    <img src='https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'></img>
                </div>
            </div>
        )
    }
};

export default Purchased;