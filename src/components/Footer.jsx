import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Aura Structures. All rights reserved.</p>
        {/* Optional: Add social media links or other footer content */}
      </div>
    </footer>
  );
}

export default Footer;
