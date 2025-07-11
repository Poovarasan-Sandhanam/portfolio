import React, { useState } from "react";
import "../styles/Projects.css";
import nwsImage from "../assets/nws.png";
import barkleImage from "../assets/barkle.png";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

const projects = [
 
  {
    id: 1,
    name: "NWS – Fitness Planner",
    technologies: ["React Native", "Firebase", "Redux", "Native Modules"],
    image: nwsImage,
    playstore: "https://play.google.com/store/apps/details?id=com.nws&hl=en_GB&pli=1",
    appstore: "https://apps.apple.com/gb/app/nourish-with-sim/id1547388267",
    description:
    "Developed core features including authentication, UI components, API integration, and pagination. Refactored legacy class components to modern functional components. Fixed bugs, optimized performance, and helped implement new functionalities with native module support. Integrated Razorpay payment gateway to enable secure and seamless payment processing within the app."


  },
  {
  id: 2,
  name: "Barkle – Fitness Challenge App",
  technologies: ["React Native", "Redux", "Native Modules"],
  image: barkleImage,
  playstore: "https://play.google.com/store/apps/details?id=com.Barkle.subscription&hl=en_GB",
  appstore: "https://apps.apple.com/ai/app/barkle/id6463427532",
  description:
   "Led the development of core app features, including custom chart components for tracking user progress and fitness challenges. Integrated and optimized REST APIs for seamless data syncing between frontend and backend services. Enhanced the UI/UX for improved user engagement and accessibility. Managed global state with Redux, implemented Firebase modules (Authentication, Firestore, Cloud Messaging, Analytics), integrated in-app purchase functionality to enable premium features and subscriptions, and debugged native modules across platforms. Worked closely with cross-functional teams to ensure smooth CI/CD, performance optimization, and successful app store deployments on both iOS and Android."

}



];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section className="projects-section" id="project">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id} tabIndex={0}>
              <div className="project-image-frame">
                <div className="notch-bar"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  loading="lazy"
                />
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tech" aria-label="Technologies used">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-badge" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.playstore}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open Play Store link for ${project.name}`}
                  >
                    Play Store <FaExternalLinkAlt className="external-icon" />
                  </a>
                  <a
                    href={project.appstore}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open Play Store link for ${project.name}`}
                  >
                    App Store <FaExternalLinkAlt className="external-icon" />
                  </a>

                  <button
                    className="project-details-button"
                    onClick={() => openModal(project)}
                    aria-haspopup="dialog"
                    aria-controls="project-modal"
                  >
                    View Details <FaInfoCircle className="info-icon" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {activeProject && (
          <aside
            className="modal-overlay"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            id="project-modal"
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
            >
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
              <h3 id="modal-title">{activeProject.name}</h3>
              <p>{activeProject.description}</p>
              <div className="modal-tags">
                {activeProject.technologies.map((tech, idx) => (
                  <span className="modal-tag" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
};

export default Projects;
