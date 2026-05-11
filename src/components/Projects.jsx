import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 bg-netflixBlack" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-wide">
            Featured <span className="text-netflixRed">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            Here are some of my recent works. These projects demonstrate my expertise in building scalable web and mobile applications using modern technologies.
          </p>
        </div>

        {/* CSS Grid for professional layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-netflixDark rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-netflixRed/5 group"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-gray-800 bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {project.domain && (
                  <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-netflixRed text-xs font-semibold px-2 py-1 rounded border border-netflixRed/30">
                    {project.domain}
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-netflixRed transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span className="bg-gray-800/50 text-gray-300 px-2.5 py-1 text-xs rounded-md border border-gray-700/50 font-medium" key={idx}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-gray-500 text-xs px-2.5 py-1 font-medium">+{project.technologies.length - 4} more</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50">
                    {project.playstore && (
                      <a
                        href={project.playstore}
                        className="flex items-center gap-2 text-sm font-semibold text-white hover:text-netflixRed transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-xs" /> Play Store
                      </a>
                    )}
                    {project.appstore && (
                      <a
                        href={project.appstore}
                        className="flex items-center gap-2 text-sm font-semibold text-white hover:text-netflixRed transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-xs" /> App Store
                      </a>
                    )}
                    {!project.playstore && !project.appstore && (
                      <span className="text-sm font-semibold text-gray-500 italic"></span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
