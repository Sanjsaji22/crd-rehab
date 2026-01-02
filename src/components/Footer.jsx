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
{/* WhatsApp & Call */}
<div>
  <h3 style={{ marginBottom: '15px' }}>Get in Touch</h3>

  {/* WhatsApp */}
  <a
    href="https://wa.me/+919061766293"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-action-btn whatsapp-btn"
  >
    WhatsApp Us
  </a>

  {/* Call */}
  <a
    href="tel:+91 9061766293"
    className="footer-action-btn call-btn"
  >
    Call Now
  </a>
</div>

// <--- THIS IS THE CRITICAL LINE!
export default Footer;