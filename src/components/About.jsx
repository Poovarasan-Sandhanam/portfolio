import AboutImage from '../assets/aboutme-image.png';
import { personalInfo, skills } from '../data';

const About = () => {
  return (
    <section className="py-12 sm:py-16 bg-netflixBlack" id="about" aria-label="About Me Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 tracking-wide">About Me</h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Profile Image — hidden on very small screens, shown as banner on small */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative rounded-lg overflow-hidden border-2 border-gray-800 shadow-2xl group max-w-[280px] mx-auto md:max-w-none">
              <img
                src={AboutImage}
                alt={personalInfo.name}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack to-transparent opacity-60"></div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 sm:mb-10">
              {personalInfo.profileSummary}
            </p>

            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Technical Arsenal</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4" aria-label="Skills Icons">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 sm:p-4 bg-netflixDark rounded-lg border border-gray-800 hover:border-netflixRed hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <skill.icon
                      className="text-2xl sm:text-4xl text-gray-400 group-hover:text-netflixRed transition-colors mb-2 sm:mb-3"
                      title={skill.name}
                    />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-300 text-center group-hover:text-white transition-colors leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6" role="list" aria-label="Statistics">
              {personalInfo.stats.map((stat, index) => (
                <div
                  className="flex flex-col p-3 sm:p-4 bg-gradient-to-br from-gray-900 to-black rounded-lg border-l-4 border-netflixRed shadow-lg text-center transform transition-transform hover:scale-105"
                  role="listitem"
                  key={index}
                >
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
