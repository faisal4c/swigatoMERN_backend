import React from 'react';
import './Footer.css';
import wwo2 from '../images/wwo2.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={wwo2} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <p className="contact-details">
          <h4>Contact us:</h4>
          <p className="email">faisal4c@gmail.com</p>
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/faisal001/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/faisal4c?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
