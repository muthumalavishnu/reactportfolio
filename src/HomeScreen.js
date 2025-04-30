import React, { useState } from "react";
import "./All.css";
import myImage from './images/main.jpg';
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const HomeScreen = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOpenResumePopup = () => {
    window.open(
      'https://drive.google.com/file/d/1zAPwYQwRdussoCFEZ_ZgjDQNSzr216Fb/view?usp=sharing',
      'ResumeWindow',
      'width=800,height=600,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <div className="home-layout">
      <header className="top-header">
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/home">Home</Link>            
          <Link to="/about">About</Link>
          {/* <a href="#features">Education</a>
          <Link to="/skills">Skills</Link>
          <a href="#projects">Work</a> */}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="main-content">
        <section className="content-section">
          <div className="name-layer-container">
            <h1 className="name-back">FRONTEND DEVELOPER.</h1>
            <h2 className="name-front">I'm Vishnu Reddy .</h2>

            <div className="home-buttons">
            <button className="btn btn-primary" onClick={handleOpenResumePopup}>
                View Resume
              </button>
              <Link to="/contact">
                <button className="btn btn-primary">Contact</button>
              </Link>
              
            </div>
          </div>

          <div className="image-content">
            <img className="home-image" src={myImage} alt="Vishnu Reddy" />
          </div>
        </section>
      </main>

      <div className="home-layout">
        <div className="main-content" style={{ padding: '6rem 2rem' }}>
          <h2 className="header-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Get in Touch
          </h2>

          <div className="content-section" style={{ gap: '3rem', justifyContent: 'center' }}>
            <div style={{ flex: '1', maxWidth: '500px' }}>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" required className="form-input" />
                <input type="email" placeholder="Your Email" required className="form-input" />
                <textarea placeholder="Your Message" rows="5" required className="form-textarea"></textarea>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="home-footer">
          <div style={{ flex: '1', minWidth: '250px' }}>
            <p className="home-subtitle"><FaEnvelope /> example@email.com</p>
            <p className="home-subtitle"><FaPhone /> +123 456 7890</p>

            <div className="social-icons" style={{ marginTop: '2rem' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            </div>
          </div>
          © 2025 Vishnu Reddy. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomeScreen;
