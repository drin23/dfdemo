import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about container fade-in">
      <h2>About Aura Structures</h2>
      <div className="about-content">
        <img src="/aura-structure.jpg" alt="Aura Structure" className="about-image" />
        <div>
          <p>
            At Aura Structures, we specialize in designing and building high-quality, sustainable small structures. From functional friggebodar and versatile attefallshus to beautiful greenhouses, we bring your vision to life with craftsmanship and attention to detail.
          </p>
          <p>
            Our mission is to create spaces that enhance your property and lifestyle, using durable materials and modern construction techniques. We are passionate about design and dedicated to customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
