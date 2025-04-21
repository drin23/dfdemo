import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './ProductShowcase.css';

// Placeholder data - replace with real product info
const products = [
  {
    id: 1,
    name: 'Modern Friggebod',
    description: 'Compact and stylish, perfect for storage or a small office.',
    path: '/friggebod',
    image: '/friggebod.jpg', // Update with correct image if available
  },
  {
    id: 2,
    name: 'Spacious Attefallshus',
    description: 'Extend your living space with our versatile attefallshus designs.',
    path: '/attefallshus',
    image: '/attefallshus.jpg', // Update with correct image if available
  },
  {
    id: 3,
    name: 'Elegant Greenhouse',
    description: 'Grow your plants in style with our durable and beautiful greenhouses.',
    path: '/greenhouse',
    image: '/greenhouse.jpg', // Use the actual greenhouse image
  },
];

function ProductShowcase() {
  return (
    <section id="products" className="product-showcase container fade-in">
      <h2>Our Structures</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={product.path} key={product.id} className="product-card-link">
            <div className="product-card">
              {product.image ? (
                <img src={product.image} alt={product.name} className="product-image-placeholder" />
              ) : (
                <div className="placeholder-image">{product.name.split(' ')[1]}</div>
              )}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;
