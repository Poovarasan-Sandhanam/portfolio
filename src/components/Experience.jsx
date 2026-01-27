import React from 'react';
import '../styles/Experience.css';
import { experience } from '../data';

const Experience = () => {
  return (
    <section className="experience-section" id="experience" aria-label="Experience Section">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-timeline">
        {experience.map((item, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-role">{item.role}</div>
            <div className="experience-company">{item.company}</div>
            <div className="experience-duration">{item.duration}</div>
            <p className="experience-description">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

