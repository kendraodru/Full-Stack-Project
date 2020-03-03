import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = ({currentUser, logout})=>{

    const display = (currentUser) ? (
        <span className='root-title'>
            <span className='btn' onClick={logout}>LOGOUT</span>
        </span>
    ) : (
            <span className='root-title'>
            <NavLink className='btn' to='/login'>ACCOUNT</NavLink>
                {/* &nbsp;or&nbsp; */}
            {/* <NavLink className='btn' to='/signup'>SIGN UP</NavLink> */}
            </span>
        )

    return(
        <div className='root-nav'>
            <div className='root-left'>
                <div className='root-nav-item'>
                    <span className='root-title'>SKIN CARE</span>
                </div>
                <div className='root-nav-item'>
                    <span className='root-title'>TO THE PEOPLE</span>
                </div>
                <div className='root-nav-item'>
                    <span className='root-title'>ABOUT</span>
                </div>
            </div>
            <div className='root-middle'>
                <a href='/' >
                    <img src="/assets/yttplogo.png" className='nav-image' alt="Youth to the People"/>
                </a>
            </div>
            <div className='root-right'>
                <div className='root-nav-item'>
                    {display}
                </div>
                <div className='root-nav-item'>
                    <span className='root-title'>SEARCH</span>
                </div>
                <div className='root-nav-item'>
                    <span className='root-title'>CART</span>
                </div>
            </div>
        </div>
    )
};

export default NavBar