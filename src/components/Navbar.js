import React from 'react';
import logo from '../assets/Frame 3.svg';
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='left-nav'>
                <div className="navbar">
                    <div className='nav-logo'>
                        <img src={logo} alt="logo"/>
                        <h2>JobHuntly</h2>
                    </div>
                    <div className='companies'>
                        <a>Find jobs</a>
                        <a>Browse Companies</a>
                    </div>
                </div>
            </div>
            <div className='login'>
                <a>Login</a>
                <div className='signup-btn'>
                    <button className='signup'>Sign Up</button>
                </div>
            </div>
            <div className='hamburger'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>   
    )
}