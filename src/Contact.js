import React, { useState } from "react";
import { Link } from "react-router-dom";
import './All.css'; // General/global styles if needed

const Contact = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-layout">
      <header className="top-header">
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          {/* <a href="#features">Education</a>
          <a href="#services">Skills</a>
          <a href="#projects">Work</a> */}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <div className="contact-layer-container">
        <h1 className="contact-back">GET IN TOUCH WITH VISHNU.</h1>
<h2 className="contact-front"><div className="content-section contact-container">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="form-input"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="form-textarea"
              ></textarea>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div></h2>
        
      </div>
    </div>
  );
};

export default Contact;
