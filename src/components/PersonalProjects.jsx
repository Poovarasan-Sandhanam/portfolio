import { FaGithub } from "react-icons/fa";
import { personalProjects } from "../data";
import { motion } from 'framer-motion';

const statusStyles = {
  "Active": "text-cyberGreen border-cyberGreen/30",
  "Live API": "text-cyberGreen border-cyberGreen/30",
  "In Progress": "text-yellow-300 border-yellow-300/30",
  "Complete": "text-gray-300 border-gray-600",
};

const PersonalProjects = () => {
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
    <section className="py-20 bg-darkBlack border-t border-cyberGreen/10" id="personal-projects">
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
            Personal Projects
          </h2>
          <p className="text-xs sm:text-sm font-mono text-cyberGreen mt-1">&gt; poovarasan --list-projects --github</p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {personalProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-darkCard rounded-xl overflow-hidden border border-gray-800 hover:border-cyberGreen/30 shadow-lg hover:shadow-neon transition-all duration-300 group"
            >
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[10px] sm:text-xs">
                  <span className="text-cyberGreen bg-darkBlack/90 px-2.5 py-1 rounded border border-cyberGreen/20">
                    {project.domain}
                  </span>
                  <span className={`px-2.5 py-1 rounded border ${statusStyles[project.status] || statusStyles.Complete}`}>
                    {project.status} · {project.year}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyberGreen transition-colors tracking-tight">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-gray-500 mt-1 mb-4">{project.tagline}</p>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-sans">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-300 text-xs sm:text-sm leading-relaxed">
                      <span className="text-cyberGreen font-mono shrink-0">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span className="bg-darkBlack/50 text-gray-300 px-2.5 py-1 rounded-md border border-gray-800 font-mono font-medium text-[10px] sm:text-xs" key={idx}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-gray-500 text-xs px-2.5 py-1 font-mono">+{project.technologies.length - 5} more</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50 font-mono">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-cyberGreen transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-sm" /> {project.githubSecondary ? "App" : "Source"}
                    </a>
                    {project.githubSecondary && (
                      <a
                        href={project.githubSecondary.url}
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-cyberGreen transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-sm" /> {project.githubSecondary.label}
                      </a>
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

export default PersonalProjects;
