import React, { useState } from "react";
import "./All.css";
import { Link } from "react-router-dom";
import myImage from './images/2.jpg';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
const AboutPage = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };  
  return (
    <div className="home-layout">
          <header className="top-header">
            {/* <div className="logo">Vishnu Reddy</div> */}
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <Link to="/home">Home</Link>            
              <Link to="/about">About</Link>
              {/* <a href="#features">Education</a>
              <a href="#services">Skills</a>
              <a href="#projects">Work</a> */}
               <Link to="/contact">Contact</Link>
            </nav>       
          </header>
          <main className="main-content">
          <section className="content-section">
          <div className="about-layer-container">
          <h1 className="about-back">ABOUT ME.</h1>
          <h1 className="about-front">ABOUT ME.</h1>
        <div className="page-content">
          <div className="page-text">
            <h1>Hi, I'm Vishnu</h1>
            <p>
              A highly motivated and results-driven Software Engineer with a strong background in front-end and full-stack development.
              Proficient in designing, developing, and optimizing dynamic user interfaces using React and Angular.
              Adept at collaborating with cross-functional teams to deliver scalable, high-performance web applications.
              Passionate about cybersecurity, cloud computing, and modern software architectures.
              Committed to continuous learning and staying updated with the latest industry trends and technologies.
            </p>
          </div>
          <div className="page-image">
          <img className="home-image" src={myImage} alt="Vishnu Reddy" />
          </div>
        </div>
      </div>
      </section>
      </main>
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
  );
};
export default AboutPage;
