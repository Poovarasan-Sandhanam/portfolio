import { education } from '../data';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="py-20 bg-darkBlack border-t border-cyberGreen/10" id="education" aria-label="Education Section">
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
            Education
          </h2>
          <p className="text-xs sm:text-sm font-mono text-cyberGreen mt-1">&gt; poovarasan --list-education</p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-gray-800 ml-4 md:ml-6 pl-6 sm:pl-8 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: 'spring', stiffness: 80, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-darkBlack border border-gray-700 group-hover:border-cyberGreen group-hover:bg-cyberGreen flex items-center justify-center transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-darkBlack transition-colors"></span>
              </div>

              {/* Glowing hover dot overlay */}
              <div className="absolute -left-[37px] md:-left-[45px] top-0 w-7 h-7 rounded-full bg-cyberGreen/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse"></div>

              {/* Card Container */}
              <motion.div 
                whileHover={{ x: 6 }}
                className="bg-darkCard p-6 sm:p-8 rounded-xl border border-gray-800/80 hover:border-cyberGreen/30 hover:shadow-neon shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform origin-center flex-shrink-0 mt-0.5">🎓</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyberGreen transition-colors leading-tight">
                        {item.degree}
                      </h3>
                      <div className="text-sm sm:text-base font-semibold text-gray-300 mt-1">
                        {item.institution}
                      </div>
                    </div>
                  </div>
                  
                  {/* Date badge */}
                  <span className="inline-flex max-w-fit text-xs font-mono font-semibold text-cyberGreen bg-cyberGreen/10 px-3 py-1.5 rounded-md border border-cyberGreen/20">
                    [{item.year}]
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4 ml-0 sm:ml-12">
                  <span className="text-xs text-gray-500 font-mono">{item.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans ml-0 sm:ml-12">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
