import React, { useState } from "react";
import "../styles/Projects.css";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { projects } from "../data";

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
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span className="tech-badge" key={index}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-badge">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="project-actions">
                  {project.playstore && (
                    <a
                      href={project.playstore}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open Play Store link for ${project.name}`}
                    >
                      Play Store <FaExternalLinkAlt className="external-icon" />
                    </a>
                  )}
                  {project.appstore && (
                    <a
                      href={project.appstore}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open App Store link for ${project.name}`}
                    >
                      App Store <FaExternalLinkAlt className="external-icon" />
                    </a>
                  )}

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

