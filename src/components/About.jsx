import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGithub, FaGithubAlt
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiVisualstudiocode, SiTypescript,
  SiFirebase, SiRedux, SiGraphql, SiAmazonaws, SiJest,
  SiPostman, SiTrello, SiNextdotjs,
  SiExpo
} from 'react-icons/si';
import AboutImage from '../assets/aboutme-image.png'; // Ensure the image path is correct
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
              Hi, I'm <strong>Poovarasan Sandhanam</strong> — a passionate Full-Stack Developer
              who specializes in crafting fast, scalable, and beautiful web and mobile applications.
              I have a strong foundation in JavaScript, TypeScript, React, React Native, Node.js, Express.js,
              MongoDB, and cloud tools like AWS and Firebase. I enjoy turning complex problems into elegant,
              high-performance solutions.
            </p>

            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-icons" aria-label="Skills Icons">
                <FaJsSquare className="skill-icon js" title="JavaScript" />
                <SiTypescript className="skill-icon ts" title="TypeScript" />
                <FaReact className="skill-icon react" title="React / React Native" />
                <SiExpo className="skill-icon next" title="Expo" />
                <SiNextdotjs className="skill-icon next" title="Next.js" />
                <SiRedux className="skill-icon redux" title="Redux" />
                <FaNodeJs className="skill-icon node" title="Node.js" />
                <SiExpress className="skill-icon express" title="Express.js" />
                <SiMongodb className="skill-icon mongo" title="MongoDB" />
                <SiGraphql className="skill-icon graphql" title="GraphQL" />
                <SiFirebase className="skill-icon firebase" title="Firebase" />
                <SiAmazonaws className="skill-icon aws" title="AWS (S3, EC2, Amplify)" />
                <FaGithub className="skill-icon github" title="GitHub" />
                <SiPostman className="skill-icon postman" title="Postman" />
                <SiJest className="skill-icon jest" title="Jest" />
                <SiTrello className="skill-icon trello" title="Trello / JIRA" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
