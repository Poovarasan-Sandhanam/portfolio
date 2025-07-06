import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGithubAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiVisualstudiocode } from 'react-icons/si';
import AboutImage from '../assets/aboutme-image.png'; // Update path accordingly
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section" id="about" aria-label="About Me Section">
      <div className="container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <img
            src={AboutImage}
            alt="Poovarasan Sandhanam"
            className="about-image"
          />

          <div className="about-text">
            <p>
              I'm Poovarasan Sandhanam, a passionate Full-Stack Developer specializing in crafting fast, scalable, and beautiful web and mobile applications.
              With a strong foundation in JavaScript, React, Node.js, and modern backend technologies, I love turning complex problems into elegant solutions.
            </p>

            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-icons" aria-label="Skills Icons">
                <FaHtml5 className="skill-icon html" title="HTML5" />
                <FaCss3Alt className="skill-icon css" title="CSS3" />
                <FaJsSquare className="skill-icon js" title="JavaScript" />
                <FaReact className="skill-icon react" title="React" />
                <FaNodeJs className="skill-icon node" title="Node.js" />
                <SiExpress className="skill-icon express" title="Express.js" />
                <SiMongodb className="skill-icon mongo" title="MongoDB" />
                <FaGithub className="skill-icon github" title="GitHub" />
                <SiVisualstudiocode className="skill-icon vscode" title="VS Code" />
              </div>
            </div>

            <div className="stats" role="list" aria-label="Statistics">
              <div className="stat-box" role="listitem">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-box" role="listitem">
                <h4>5+</h4>
                <p>Projects Completed</p>
              </div>
              {/* <div className="stat-box" role="listitem">
                <h4>10+</h4>
                <p>Clients Served</p>
              </div> */}
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
