import React from 'react';
import '../styles/Navbar.css'; // External CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Poovarasan</div>
        <div className="navbar-links">
          <a href="#hero">Home</a>
          <a href="#about">About Me</a>
          <a href="#project">Projects</a>
           <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
