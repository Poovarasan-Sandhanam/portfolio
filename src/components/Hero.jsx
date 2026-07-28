import HeroImage from '../assets/aboutme-image.png';
import { personalInfo } from '../data';
import { FaPaperPlane, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center pt-28 pb-16 sm:pt-36 overflow-hidden" id="hero" aria-label="Hero Section">
      {/* Visual cyber glow lines */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyberGreen/5 rounded-full filter blur-3xl pointer-events-none animate-pulseGlow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 sm:gap-16">

          {/* Left Text Column */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-cyberGreen/10 border border-cyberGreen/20 px-3 py-1.5 rounded-full text-cyberGreen font-mono text-xs sm:text-sm mb-6 tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-cyberGreen animate-ping"></span>
              {personalInfo.availability[0]?.label || "Available for Opportunities"}
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight"
            >
              Hello, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-cyberGreen">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-mono text-cyberGreen mb-6"
            >
              &gt; {personalInfo.role}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0 font-sans"
            >
              I build fast, scalable, and user-friendly applications for web and mobile. Specializing in high-performance React Native architecture and clean full-stack systems.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10"
            >
              <a 
                href="https://www.linkedin.com/in/poovarasan-sandhanam-aa29481b0" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact me section"
              >
                <button className="flex items-center gap-2 bg-cyberGreen text-darkBlack hover:bg-cyberGreenHover px-6 sm:px-8 py-3 rounded-md transition-all font-bold text-sm sm:text-base active:scale-95 shadow-neon hover:shadow-neonHover">
                  <FaPaperPlane className="text-sm" /> Connect With Me
                </button>
              </a>

              <a
                href="https://drive.google.com/file/d/1ajJfYguxhJQbFYuDCvtAtBDIF45p5YBQ/view"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
              >
                <button className="flex items-center gap-2 bg-transparent border border-gray-700 text-gray-300 hover:text-white hover:border-cyberGreen px-6 sm:px-8 py-3 rounded-md transition-all font-semibold text-sm sm:text-base active:scale-95 hover:bg-cyberGreen/5">
                  <FaFileDownload className="text-lg" /> View Resume
                </button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-6 text-gray-500"
            >
              {personalInfo.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-cyberGreen hover:scale-110 transition-all duration-300"
                  aria-label={`${social.name} Profile`}
                >
                  <social.icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Pulsing neon frame background */}
              <div className="absolute inset-0 bg-cyberGreen/10 rounded-2xl blur-3xl z-0 animate-pulseGlow"></div>
              
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyberGreen z-20"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyberGreen z-20"></div>
              
              <img
                src={HeroImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top rounded-2xl shadow-neon border border-cyberGreen/20 z-10 relative bg-darkGray transition-all duration-500 hover:border-cyberGreen/80 hover:shadow-neonHover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
