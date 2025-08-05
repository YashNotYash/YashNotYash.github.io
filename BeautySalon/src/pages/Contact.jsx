import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Please reach out with any questions or to book an appointment.
      </p>
      <div className="contact-info">
        <div><strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a></div>
        <div><strong>Email:</strong> <a href="mailto:info@maabeautycare.com">info@maabeautycare.com</a></div>
        <div><strong>Address:</strong> 123 Beauty Lane, Glamour City, Country</div>
      </div>
      <button className="contact-button" onClick={() => window.location.href = 'mailto:info@maabeautycare.com'}>
        Email Us
      </button>
    </div>
  );
}

export default Contact;