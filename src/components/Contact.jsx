import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("❗ Please fill out all fields.");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwbUvE0702VoBCn9P8stpjFWOnLXNhVtlo9W-6Lhm3v6pyy86xCPW9PAT2qfoV136Nd/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setFormData({ name: "", email: "", message: "" });
      setStatus("✅ Message sent successfully!");
    } catch (error) {
      console.error("Form error:", error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2 className="contact-heading">Get in Touch</h2>

          <div className="contact-details">
            <div className="detail">
              <FaEnvelope className="icon" />
              <a href="mailto:poovarasansandhanam@gmail.com">poovarasansandhanam@gmail.com</a>
            </div>
            <div className="detail">
              <FaPhone className="icon" />
              <span>+44 07909810485</span>
            </div>
            <div className="detail">
              <FaMapMarkedAlt className="icon" />
              <span>Aberdeen, Scotland, UK</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="send-button">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
