import { achievements } from '../data';
import { FaTrophy, FaUsers, FaServer, FaChartLine } from 'react-icons/fa';

const iconMap = {
    0: FaTrophy,
    1: FaUsers,
    2: FaServer,
    3: FaChartLine
};

const Achievements = () => {
    return (
        <section className="py-10 sm:py-12 bg-netflixBlack" id="achievements" aria-label="Key Achievements Section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-wide drop-shadow-sm">Key Achievements</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {achievements.map((item, index) => {
                        const Icon = iconMap[index] || FaTrophy;
                        return (
                            <div
                                className="bg-netflixDark p-4 sm:p-6 rounded-lg shadow-lg border border-gray-800 hover:border-netflixRed/50 transition-all duration-300 transform hover:scale-[1.02] group flex sm:flex-col items-start sm:items-start gap-4 sm:gap-0"
                                key={index}
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center sm:mb-5 group-hover:bg-netflixRed transition-colors flex-shrink-0">
                                    <Icon className="text-lg sm:text-2xl text-gray-400 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-3 group-hover:text-red-50 transition-colors">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
