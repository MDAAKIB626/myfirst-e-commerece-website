import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Please fill out the form below.</p>

      <form className="contact-form">
        <div className="form-group">
      
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
      
          <input type="email" id="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group">
   
          <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
