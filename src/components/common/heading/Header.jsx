import React, { useState } from 'react';
import { Head } from './Head';
import "./header.css";
import { Link } from 'react-router-dom';

export const Header = () => {
    const [click, setClick] =useState(false)
  return (
    <div>
        <Head />
        <header>
            <nav className='flexSB'>
                <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                    <li><Link to ="/" active>Home</Link></li>
                    <li><Link to ="/schemes">Schemes</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/team">Team</Link></li>
                    <li><Link to ="/gallery">Gallery</Link></li>
                    <li><Link to ="/support">Let's Support</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                </ul>
                <div className="start">
                    <div className="button">Jagrook</div>
                </div>
            </nav>
            <button className='toggle' onClick={() => setClick(!click)}>
                {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </header>
    </div>
  )
}
