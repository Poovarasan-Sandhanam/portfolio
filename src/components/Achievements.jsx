import { achievements } from '../data';
import { FaTrophy, FaUsers, FaServer, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMap = {
  0: FaTrophy,
  1: FaUsers,
  2: FaServer,
  3: FaChartLine
};

const Achievements = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-20 bg-darkBlack border-t border-cyberGreen/10" id="achievements" aria-label="Key Achievements Section">
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
            Key Achievements
          </h2>
          <p className="text-xs sm:text-sm font-mono text-cyberGreen mt-1">&gt; poovarasan --list-achievements</p>
        </motion.div>

        {/* Grid List */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((item, index) => {
            const Icon = iconMap[index] || FaTrophy;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="bg-darkCard p-6 rounded-xl border border-gray-800/80 hover:border-cyberGreen/30 hover:shadow-neon shadow-lg transition-all duration-300 flex flex-col items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-darkBlack border border-gray-850 flex items-center justify-center group-hover:bg-cyberGreen group-hover:border-cyberGreen transition-all duration-300 flex-shrink-0">
                  <Icon className="text-xl text-gray-500 group-hover:text-darkBlack transition-colors filter group-hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyberGreen transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
