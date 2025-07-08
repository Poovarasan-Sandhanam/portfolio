import React from 'react';
import { FaLinkedin, FaGithub, FaBriefcase, FaGlobeEurope, FaPlaneDeparture } from 'react-icons/fa';
import HeroImage from '../assets/aboutme-image.png';  // Update path as needed
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero" aria-label="Hero Section Introduction">
      <div className="hero-img-wrapper">
        <img src={HeroImage} alt="Poovarasan Sandhanam" className="hero-img" />
      </div>
      <h1 className="hero-heading">
        I'm{' '}
        <span className="hero-name-gradient">Poovarasan Sandhanam</span>
        <br />
        <span className="hero-role-gradient">Full-Stack Developer</span>
      </h1>


      {/* New Availability Section */}
      <div className="hero-availability" aria-label="Work availability status">
        <div className="availability-item">
          <FaBriefcase className="availability-icon" aria-hidden="true" />
          <span>Open to Work</span>
        </div>
        <div className="availability-item">
         <span className="availability-icon" role="img" aria-label="UK Flag">🇬🇧</span>

          <span>Eligible to Work in UK</span>
        </div>
        <div className="availability-item">
          <FaPlaneDeparture className="availability-icon" aria-hidden="true" />
          <span>Ready to Relocate</span>
        </div>
      </div>

      <div className="hero-social">
        <a
          href="https://www.linkedin.com/in/poovarasan-sandhanam-aa29481b0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Poovarasan-Sandhanam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
      </div>

      <p className="hero-subtext">
       I build fast, scalable, and user-friendly applications for web and mobile.
      </p>

      <div className="hero-buttons">
        <a href="https://www.linkedin.com/in/poovarasan-sandhanam-aa29481b0" aria-label="Contact me section">
          <button className="btn btn-primary">Connect Me</button>
        </a>

        <a
          href="https://drive.google.com/file/d/14V1q0BjL2ZO_YUejOTjwzqIrqYVrqZhJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume"
        >
          <button className="btn btn-secondary">Download Resume</button>
        </a>
      </div>

    </section>
  );
};

export default Hero;
