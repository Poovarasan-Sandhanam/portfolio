import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2 className="contact-heading">Get in Touch</h2>

          <div className="contact-details">
            <div className="detail">
              <FaEnvelope className="icon" />
              <a href="mailto:hello@example.com">poovarasansandhanam@gmail.com</a>
            </div>
            <div className="detail">
              <FaPhone className="icon" />
              <span>+44 07909810485</span>
            </div>
            <div className="detail">
              <FaMapMarkedAlt className="icon" />
              <span>Aberdeen, Stocland,UK</span>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your message..." rows="5" />
          </div>
          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
