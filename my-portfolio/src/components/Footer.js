import React from 'react';
import './Footer.css'; // Assuming you will style it in this CSS file

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'footer-dark' : 'footer-light'}`}>
      <div className="container">
        <p>© 2024 Copyright by Szymon</p>
      </div>
    </footer>
  );
}

export default Footer;
