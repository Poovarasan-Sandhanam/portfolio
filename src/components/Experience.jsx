import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience" aria-label="Experience Section">
      <h2 className="experience-heading">Experience</h2>
      

      <div className="experience-timeline">

         <div className="experience-item">
          <div className="experience-role">Full Stack App Developer( Web & Mobile )</div>
          <div className="experience-company">Freelance</div>
          <div className="experience-duration">1.5+ Years</div>
          <p className="experience-description">
            Developed and maintained responsive web applications using React, Node.js, and MongoDB.
            Collaborated with designers to implement clean UI/UX and ensured performance optimization across browsers.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-role">Mobile App Developer</div>
          <div className="experience-company">Made By Fire</div>
          <div className="experience-duration">7 Months</div>
          <p className="experience-description">
            Developed and maintained responsive web applications using React, Node.js, and MongoDB.
            Collaborated with designers to implement clean UI/UX and ensured performance optimization across browsers.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-role">Mobile Application Associate</div>
          <div className="experience-company">Siam Computing</div>
          <div className="experience-duration">1 Year 3 Months</div>
          <p className="experience-description">
            Assisted in building interactive components using React and Tailwind CSS.
            Gained hands-on experience with REST APIs and Git workflows in an agile team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
