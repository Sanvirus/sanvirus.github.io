import React from 'react';
import './ContactStyleForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <form
          action="https://formspree.io/f/mdkoejdy"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="_replyto" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
