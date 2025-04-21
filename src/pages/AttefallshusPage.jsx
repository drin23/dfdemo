import React from 'react';
import './ProductPage.css'; // Shared styles

function AttefallshusPage() {
  // Use the actual attefallshus image provided
  const attefallshusImageUrl = '/attefallshus.jpg'; // Ensure this matches the saved image path

  return (
    <div className="product-page container">
      <h1>Spacious Attefallshus</h1>
      <p>Learn more about our versatile attefallshus designs for expanding your living space.</p>

      <section id="model-a" className="product-section fade-in">
        <h2>Classic Attefall</h2>
        <p>A timeless design with modern comfort.</p>
        <div className="photo-gallery">
          <img src={attefallshusImageUrl} alt="Classic Attefall" className="product-image-placeholder" />
        </div>
      </section>

      <section id="model-b" className="product-section fade-in">
        <h2>Modern Attefall</h2>
        <p>Sleek lines and open spaces.</p>
        <div className="photo-gallery">
          <img src={attefallshusImageUrl} alt="Modern Attefall" className="product-image-placeholder" />
        </div>
      </section>

      <section id="model-c" className="product-section fade-in">
        <h2>Eco Attefall</h2>
        <p>Sustainable and energy-efficient.</p>
        <div className="photo-gallery">
          <img src={attefallshusImageUrl} alt="Eco Attefall" className="product-image-placeholder" />
        </div>
      </section>
    </div>
  );
}

export default AttefallshusPage;
