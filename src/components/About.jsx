import React from 'react';
import AboutImage from '../assets/aboutme-image.png';
import '../styles/About.css';
import { personalInfo, skills } from '../data';

const About = () => {
  return (
    <section className="about-section" id="about" aria-label="About Me Section">
      <div className="container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <img
            src={AboutImage}
            alt={personalInfo.name}
            className="about-image"
          />

          <div className="about-text">
            <p>
              {personalInfo.profileSummary}
            </p>

            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-icons" aria-label="Skills Icons">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`skill-item ${skill.category} ${skill.name
                      .toLowerCase()
                      .replace(/[.\s()+]/g, '')}`}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10px" }}
                  >
                    <skill.icon
                      className="skill-icon"
                      title={skill.name}
                      style={{ fontSize: "40px" }}
                    />
                    <span className="skill-name" style={{ marginTop: "5px", textAlign: "center", fontSize: "14px" }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>


            <div className="stats" role="list" aria-label="Statistics">
              {personalInfo.stats.map((stat, index) => (
                <div className="stat-box" role="listitem" key={index}>
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

