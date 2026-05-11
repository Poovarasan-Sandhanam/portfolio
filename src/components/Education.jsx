import { education } from '../data';

const Education = () => {
    return (
        <section className="py-10 sm:py-12 bg-netflixBlack" id="education" aria-label="Education Section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-wide drop-shadow-sm">Education</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {education.map((item, index) => (
                        <div
                            className="bg-netflixDark p-5 sm:p-6 rounded-lg shadow-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
                            key={index}
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform origin-center flex-shrink-0 mt-1">🎓</div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-netflixRed transition-colors mb-1 leading-tight">{item.degree}</h3>
                                    <div className="text-sm sm:text-lg font-medium text-gray-300">{item.institution}</div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs text-gray-400">{item.location}</span>
                                        <span className="text-gray-600">•</span>
                                        <span className="text-xs text-netflixRed font-mono font-semibold">{item.year}</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-3">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
