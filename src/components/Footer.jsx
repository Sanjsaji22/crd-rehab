// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>© {new Date().getFullYear()} Centre For Rehabilitation Of The Disabled (CRD). All rights reserved.</p>
            <p>An institution of the CSI South Kerala Diocese.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: 'var(--text-dark)', 
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: '40px',
    fontSize: '0.9em',
};

// <--- THIS IS THE CRITICAL LINE!
export default Footer;