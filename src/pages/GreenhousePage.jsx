import React from 'react';
import './ProductPage.css'; // Shared styles

function GreenhousePage() {
  // Use the actual greenhouse image provided
  const greenhouseImageUrl = '/greenhouse.jpg'; // Ensure this matches the saved image path

  return (
    <div className="product-page container">
      <h1>Elegant Greenhouse</h1>
      <p>Discover our durable and beautiful greenhouses, perfect for gardening enthusiasts.</p>

      <section id="model-a" className="product-section fade-in">
        <h2>Model A</h2>
        <p>Details on Model A styles and sizes.</p>
         <div className="photo-gallery">
          {/* Display a single placeholder image */}
          <img src={greenhouseImageUrl} alt="Greenhouse" className="product-image-placeholder" />
        </div>
      </section>

      <section id="model-b" className="product-section fade-in">
        <h2>Model B</h2>
        <p>Information about Model B glazing and ventilation.</p>
         <div className="photo-gallery">
          {/* Display a single placeholder image */}
          <img src={greenhouseImageUrl} alt="Greenhouse" className="product-image-placeholder" />
        </div>
      </section>

      <section id="model-c" className="product-section fade-in">
        <h2>Model C</h2>
        <p>Options for Model C accessories and foundations.</p>
         <div className="photo-gallery">
          {/* Display a single placeholder image */}
          <img src={greenhouseImageUrl} alt="Greenhouse" className="product-image-placeholder" />
        </div>
      </section>

      {/* Optional: Add a contact/inquiry form specific to this product */}
    </div>
  );
}

export default GreenhousePage;
