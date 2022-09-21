import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div  className='header'>
            <h1 className="logo">Rest Countries</h1>
            <div className="nav-item">
                <a href="/home">Home</a>
                <a href="/service">Service</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;