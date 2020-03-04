import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, logout, otherForm})=>{

    const display = (currentUser) ? (
        <span className='root-title'>
            <span className='btn' onClick={logout}>LOGOUT</span>
        </span>
    ) : (
            <span className='root-title'>
                {otherForm}
            </span>
        )

    return(
        <div className='root-nav'>
            <div className='root-left'>
                <div className='root-nav-item'>
                    <span className='root-title'>
                        <Link className="basic-link" to='/products'>SKIN CARE</Link>
                    </span>
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