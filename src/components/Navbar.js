import React, { useState } from 'react';
import logo from '../assets/Frame 3.svg';
import './Navbar.css';
import JobList from './JobList';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const jobs = [
        { title: "Email Marketing", company: "Revoult", location: "Madrid, Spain" },
        { title: "Brand Designer", company: "Dropbox", location: "San Francisco, US" },
        { title: "Visual Designer", company: "Blinklist", location: "Granada, Spain" },
        { title: "Data Analyst", company: "Twitter", location: "San Diego, US" }
    ];

    return (
        <>
            <nav className='navbar'>
                <div className='left-nav'>
                    <div className="navbar">
                        <div className='nav-logo'>
                            <img src={logo} alt="logo"/>
                            <Link className='joblist' to={'/'}>
                                <h2>JobHuntly</h2>
                            </Link>
                        </div>
                        <div className='companies'>
                            <Link to={'/joblist'} className='joblist nav-logo h2'>
                                <a className='joblist'>Find jobs</a>
                            </Link>
                            <a>Browse Companies</a>
                            <Link className='applied' to={'/applied'}> 
                                <a className='applied'>Applied Jobs</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='login'>
                    <a>Login</a>
                    <div className='signup-btn'>
                        <button className='signup'>Sign Up</button>
                    </div>
                </div>
                <div className='hamburger'  onClick={toggleMenu}>
                    <span>
                        <Link to={'/joblist'} className='joblist nav-logo h2'>
                            <a className='joblist'>Find jobs</a>
                        </Link>
                    </span>
                    <span><a>Browse Companies</a></span>
                    <span>
                        <Link className='applied' to={'/applied'}> 
                            <a className='applied'>Applied Jobs</a>
                        </Link>
                    </span>
                </div>
            </nav>
        </>
    );
}
