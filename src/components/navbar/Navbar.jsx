// navbar 

import React from 'react';
import './Navbar.css';
import image from '../../assets/images/logo.png';

const Navbar = () => {
    return (
        
        <div class="topnav">
            <a class="active" href="#home">React Burger</a>
            <a href="#news">A place to learn and eat</a>
            <img src={image} alt="logo" className='logo' />
        </div>
    );
}

export default Navbar;
