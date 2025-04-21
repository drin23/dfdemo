import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    // If already on the homepage, scroll to the section
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to the homepage
      navigate('/');
      // Optional: Add logic here to scroll after navigation if needed,
      // but it's often simpler to handle scrolling only when already on the page.
      // A common pattern is to use state or URL hash after navigation.
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* Use Link for the logo to navigate to home */}
        <Link to="/" className="logo">Aura Structures</Link>
        <nav>
          <ul>
            {/* Use onClick handlers for navigation/scrolling */}
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
            <li><a href="#products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>Products</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Us</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
