import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <div className='footer'>
            <p><small >copyright @ {year} </small></p>
            </div>
        </footer>
    );
};

export default Footer;