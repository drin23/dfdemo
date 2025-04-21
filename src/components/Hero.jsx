import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero fade-in">
      <div className="container hero-content">
        <h1>Beautifully Crafted Structures</h1>
        <p>Discover bespoke friggebodar, attefallshus, and greenhouses designed for your space.</p>
        <a href="#products" className="cta-button">Explore Our Designs</a>
      </div>
      {/* Optional: Add a background image/video via CSS */}
    </section>
  );
}

export default Hero;
