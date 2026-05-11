import { experience } from '../data';

const Experience = () => {
  return (
    <section className="py-10 sm:py-12 bg-netflixBlack" id="experience" aria-label="Experience Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-wide drop-shadow-sm">Experience</h2>

        {/* Grid on desktop, stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {experience.map((item, index) => (
            <div
              className="bg-netflixDark p-5 sm:p-6 rounded-lg shadow-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
              key={index}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="text-base sm:text-xl font-bold text-white group-hover:text-netflixRed transition-colors leading-tight">{item.role}</div>
                  <div className="text-sm sm:text-lg font-semibold text-gray-300 mt-1">{item.company}</div>
                </div>
                <span className="text-xs text-netflixRed font-mono font-semibold bg-netflixRed/10 px-2 py-1 rounded whitespace-nowrap border border-netflixRed/20">
                  {item.duration}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-4 sm:line-clamp-none">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
