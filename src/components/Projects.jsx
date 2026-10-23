import { FaPlay, FaApple } from "react-icons/fa";
import { projects } from "../data";
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="py-20 bg-darkBlack border-t border-cyberGreen/10" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 tech-grid-header p-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
            Production Apps
          </h2>
          <p className="text-xs sm:text-sm font-mono text-cyberGreen mt-1">&gt; poovarasan --list-projects --production</p>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-darkCard rounded-xl overflow-hidden border border-gray-800 hover:border-cyberGreen/30 shadow-lg hover:shadow-neon transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-gray-800 bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkCard/90 via-transparent to-transparent opacity-60"></div>
                {project.domain && (
                  <span className="absolute top-3 right-3 bg-darkBlack/90 backdrop-blur-md text-cyberGreen text-xs font-mono font-medium px-2.5 py-1 rounded border border-cyberGreen/20 shadow-sm">
                    {project.domain}
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyberGreen transition-colors tracking-tight">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 font-sans">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span className="bg-darkBlack/50 text-gray-300 px-2.5 py-1 text-xs rounded-md border border-gray-800 font-mono font-medium text-[10px] sm:text-xs" key={idx}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-gray-500 text-xs px-2.5 py-1 font-mono">+{project.technologies.length - 4} more</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50 font-mono">
                    {project.playstore && (
                      <a
                        href={project.playstore}
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-cyberGreen transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPlay className="text-[10px]" /> Play Store
                      </a>
                    )}
                    {project.appstore && (
                      <a
                        href={project.appstore}
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-cyberGreen transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaApple className="text-sm" /> App Store
                      </a>
                    )}
                    {!project.playstore && !project.appstore && (
                      <span className="text-xs font-semibold text-gray-600 italic">Core Tech Demo</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
