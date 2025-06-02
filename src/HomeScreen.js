import React, { useState } from "react";
import "./All.css";
import myImage from './images/main.jpg';
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImg from './images/perfil.png';

const HomeScreen = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOpenResumePopup = () => {
    setShowResumeModal(true);
  };

  const handleCloseResumePopup = () => {
    setShowResumeModal(false);
  };

  return (
    <div className="home-layout">
      <header className="top-header">
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="main-content">
        <section className="content-section">
          <div className="name-layer-container">
            <h1 className="name-back">FRONTEND DEVELOPER.</h1>
            <h2 className="name-front">I'm Vishnu Reddy.</h2>

            <div className="home-buttons">
              <button className="btn btn-primary" onClick={handleOpenResumePopup}>
                View Resume
              </button>
              <Link to="/contact">
                <button className="btn btn-primary">Contact</button>
              </Link>
            </div>
          </div>

          <div className="home__img">
            <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image className="home__blob-img" x="50" y="60" href={profileImg} />
              </g>
            </svg>
          </div>
        </section>
      </main>

      {/* Contact Section */}
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

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="modal-overlay" onClick={handleCloseResumePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseResumePopup}>X</button>
            <iframe
              src="https://drive.google.com/file/d/1zAPwYQwRdussoCFEZ_ZgjDQNSzr216Fb/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
