import React from 'react'
import { NavLink } from 'react-router-dom'

const Greeting = ({currentUser, logout})=>{

    const display = (currentUser) ? (
        <div>
            <h2 className="welcome"> Welcome {currentUser.first_name}</h2>
            <br/>
            <button className='btn' onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <h2 className="welcome"> Whaat it do</h2>
            <br/>
            <NavLink className='btn' to='/login'>Login</NavLink>
            &nbsp;or&nbsp;
            <NavLink className='btn' to='/signup'>Sign up</NavLink>
        </div>
    )

    return(
        <div>
            {display}
        </div>
    );
}

export default Greeting;