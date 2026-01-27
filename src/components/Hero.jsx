import React from 'react';
import HeroImage from '../assets/aboutme-image.png';
import '../styles/Hero.css';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section className="hero-section" id="hero" aria-label="Hero Section Introduction">
      <div className="hero-img-wrapper">
        <img src={HeroImage} alt={personalInfo.name} className="hero-img" />
      </div>
      <h1 className="hero-heading">
        I'm{' '}
        <span className="hero-name-gradient">{personalInfo.name}</span>
        <br />
        <span className="hero-role-gradient">{personalInfo.role}</span>
      </h1>

      <div className="hero-availability" aria-label="Work availability status">
        {personalInfo.availability.map((item, index) => (
          <div className="availability-item" key={index}>
            {typeof item.icon === 'string' ? (
              <span className="availability-icon" role="img" aria-label={item.label}>{item.icon}</span>
            ) : (
              <item.icon className="availability-icon" aria-hidden="true" />
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-social">
        {personalInfo.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.name} Profile`}
          >
            <social.icon />
          </a>
        ))}
      </div>

      <p className="hero-subtext">
        I build fast, scalable, and user-friendly applications for web and mobile.
      </p>

      <div className="hero-buttons">
        <a href={"https://www.linkedin.com/in/poovarasan-sandhanam-aa29481b0"} aria-label="Contact me section">
          <button className="btn btn-primary">Connect Me</button>
        </a>

        <a
          href="https://drive.google.com/file/d/14rqL0YVXt5jYcDpNL7bepqqJPtNPl_o9/view?usp=sharing"
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

