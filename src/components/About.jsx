import { personalInfo, skills } from '../data';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-20 bg-darkBlack border-t border-cyberGreen/10" id="about" aria-label="About Me Section">
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
            About Me
          </h2>
          <p className="text-xs sm:text-sm font-mono text-cyberGreen mt-1">&gt; poovarasan --profile --detailed</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Custom macOS Terminal Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex-shrink-0"
          >
            <div className="w-full rounded-2xl overflow-hidden border border-gray-800 bg-darkBlack/70 backdrop-blur-md shadow-neon font-mono text-xs sm:text-sm text-gray-300">
              
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-darkCard border-b border-gray-800/80">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-gray-500 text-[11px] sm:text-xs">zsh - poovarasan@portfolio</div>
                <div className="w-10"></div>
              </div>
              
              {/* Terminal content */}
              <div className="p-5 space-y-4 font-mono text-left select-none">
                <div>
                  <span className="text-cyberGreen">poovarasan ~ % </span>
                  <span className="text-white">whoami</span>
                  <p className="text-gray-400 mt-1">poovarasansandhanam</p>
                </div>
                
                <div>
                  <span className="text-cyberGreen">poovarasan ~ % </span>
                  <span className="text-white">cat details.json</span>
                  <pre className="text-cyberGreen/90 mt-1 overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`{
  "role": "Senior Software Engineer",
  "location": "London, United Kingdom",
  "experience": "5 Years",
  "focus": "Mobile & Full-Stack",
  "status": "Open to Work"
}`}
                  </pre>
                </div>

                <div>
                  <span className="text-cyberGreen">poovarasan ~ % </span>
                  <span className="text-white">ping -c 1 relocation-status</span>
                  <p className="text-gray-400 mt-1">64 bytes from relocation: icmp_seq=1 ttl=64 time=0.042ms</p>
                  <p className="text-cyberGreen font-semibold mt-1">--- RELOCATION STATUS: READY TO GO ✈️ ---</p>
                </div>

                <div className="flex items-center">
                  <span className="text-cyberGreen">poovarasan ~ % </span>
                  <span className="w-2 h-4 bg-cyberGreen ml-2 animate-[pulse_1s_infinite]"></span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Details Column */}
          <div className="w-full lg:w-7/12">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 font-sans"
            >
              {personalInfo.profileSummary}
            </motion.p>

            {/* Skills grid */}
            <div className="mb-12 sm:mb-16">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-wide flex items-center gap-2">
                <span className="text-cyberGreen font-mono">&gt;</span> Technical Arsenal
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                aria-label="Skills Icons"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center p-3 sm:p-4 bg-darkCard rounded-xl border border-gray-800/80 hover:border-cyberGreen/40 hover:bg-cyberGreen/5 transition-all duration-300 group shadow-lg"
                  >
                    <skill.icon
                      className="text-3xl sm:text-4xl text-gray-500 group-hover:text-cyberGreen transition-colors mb-2.5 sm:mb-3 filter group-hover:drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]"
                      title={skill.name}
                    />
                    <span className="text-[10px] sm:text-xs font-mono font-medium text-gray-400 text-center group-hover:text-white transition-colors leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6" role="list" aria-label="Statistics">
              {personalInfo.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col p-4 sm:p-6 bg-gradient-to-br from-darkCard to-darkBlack rounded-xl border-l-4 border-cyberGreen shadow-lg text-center"
                  role="listitem"
                >
                  <h4 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-1 glow-text">{stat.value}</h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
