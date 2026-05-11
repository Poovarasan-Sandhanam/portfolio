
import HeroImage from '../assets/about.png';
import { personalInfo } from '../data';
import { FaPaperPlane, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center pt-24 pb-12 sm:pt-32" id="hero" aria-label="Hero Section Introduction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <div className="flex-1 text-center md:text-left z-10 animate-fadeUp">
            <p className="text-netflixRed font-semibold mb-4 tracking-wider uppercase text-sm sm:text-base">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
              Hello, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mb-6 sm:mb-8">
              {personalInfo.role}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
              I build fast, scalable, and user-friendly applications for web and mobile. Let&apos;s create something beautifully immersive.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 sm:mb-10">
              <a href="https://www.linkedin.com/in/poovarasan-sandhanam-aa29481b0" aria-label="Contact me section">
                <button className="flex items-center gap-2 bg-netflixRed text-white px-6 sm:px-8 py-3 rounded-md hover:bg-netflixHover transition-all font-semibold text-sm sm:text-base active:scale-95 shadow-lg shadow-netflixRed/20">
                  <FaPaperPlane className="text-sm" /> Connect With Me
                </button>
              </a>

              <a
                href="https://drive.google.com/file/d/1ajJfYguxhJQbFYuDCvtAtBDIF45p5YBQ/view"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
              >
                <button className="flex items-center gap-2 bg-transparent border-2 border-gray-600 text-white px-6 sm:px-8 py-3 rounded-md hover:border-white transition-all font-semibold text-sm sm:text-base active:scale-95">
                  <FaFileDownload className="text-lg" /> View Resume
                </button>
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 text-gray-400">
              {personalInfo.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label={`${social.name} Profile`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end animate-fadeIn relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-netflixRed/20 rounded-full blur-3xl z-0"></div>
              <img
                src={HeroImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top rounded-2xl shadow-2xl border border-gray-800 z-10 relative bg-netflixDark"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
