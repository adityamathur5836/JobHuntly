import React from 'react';
import "./Hero.css"
import photo from '../assets/photo.png';
import pattern from '../assets/Pattern.png';
import logo from '../assets/Frame 3.svg';
import "./Navbar.css"
import lakeete from '../assets/lakeete.png';
import search from '../assets/search.png';
import rectangle from '../assets/rectangle.png';
import location from '../assets/location.png';

export default function Hero() {
    return (
        <div className='hero'>
            <div class="container">
                <div className='text-cover'>
                    <h1 className='cover-text'>Discover</h1><h1 className='cover-text'>more than</h1><h1 className='highlight cover-text'>5000+ Jobs</h1>
                <img src={lakeete} className='lakeete'/>
                <p className='para'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                <div class="search-box">
                    <img src={search}/>
                    <input type="text" placeholder="Job title or keyword" />
                    <img src={location}/>
                    <select>
                        <option>Florence, Italy</option>
                        <option>New York, USA</option>
                        <option>London, UK</option>
                    </select>
                    <button>Search my job</button>
                </div>
                <p className='para'>Popular : UI Designer, UX Researcher, Android, Admin</p>
            </div>
            </div>
            <div className='images'>
                <img src={pattern} className='back-pattern'/>
                <img src={photo} className='photo'/>
            </div>
            <img src={rectangle} className='rectangle'/>
        </div>
    )
}