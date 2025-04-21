//pages/Contact.jsx
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us with any questions or concerns.</p>

      {isSubmitted ? (
        <div className="success-message">
          Thank you for your message! The team will contact you shortly.
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email address" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Write your message here" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
