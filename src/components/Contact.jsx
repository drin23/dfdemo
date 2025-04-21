import React from 'react';
import './Contact.css';

function Contact() {
  // Basic form handler (no actual submission)
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! (Form submission not implemented yet)');
    event.target.reset();
  };

  return (
    <section id="contact" className="contact container fade-in">
      <h2>Get In Touch</h2>
      <p>Have questions or ready to start your project? Contact us today!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="contact-details">
        <p><strong>Email:</strong> info@aurastructures.se</p>
        <p><strong>Phone:</strong> +46 123 456 789</p>
        {/* Add address if needed */}
      </div>
    </section>
  );
}

export default Contact;
