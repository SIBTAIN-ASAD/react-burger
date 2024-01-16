// navbar 

import React from 'react';
import './Navbar.css';
import image from '../../assets/images/logo.png';

const Navbar = () => {
    return (
        
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <img src={image} alt="logo" className='logo' />
        </div>
    );
}

export default Navbar;
