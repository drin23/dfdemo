import React from 'react';
import './ProductPage.css'; // Shared styles

function FriggebodPage() {
  // Use friggebod.jpg from public folder for all models
  const friggebodImageUrl = '/friggebod.jpg';

  return (
    <div className="product-page container">
      <h1>Modern Friggebod</h1>
      <p>Explore the features and options for our compact and stylish friggebodar.</p>

      <section id="model-a" className="product-section fade-in">
        <h2>Model A</h2>
        <p>Details about Model A design, size, and architectural style.</p>
        <div className="photo-gallery">
          <img src={friggebodImageUrl} alt="Friggebod" className="product-image-placeholder" />
        </div>
      </section>

      <section id="model-b" className="product-section fade-in">
        <h2>Model B</h2>
        <p>Details about Model B materials and construction.</p>
         <div className="photo-gallery">
          <img src={friggebodImageUrl} alt="Friggebod" className="product-image-placeholder" />
        </div>
      </section>

      <section id="model-c" className="product-section fade-in">
        <h2>Model C</h2>
        <p>Details about Model C customization and add-ons.</p>
         <div className="photo-gallery">
          <img src={friggebodImageUrl} alt="Friggebod" className="product-image-placeholder" />
        </div>
      </section>
    </div>
  );
}

export default FriggebodPage;
