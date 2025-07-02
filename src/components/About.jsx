import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const skills = [
  {
    name: "HTML & CSS",
    level: "90%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "React Native",
    level: "95%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Express JS",
    level: "85%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "JavaScript & TypeScript",
    level: "90%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node JS",
    level: "85%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
];

const About = () => {
  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            About Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-xl">
          <img
            src={AboutImage}
            alt="Poovarasan Sandhanam"
            className="w-72 h-80 rounded-3xl object-cover shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-500"
          />

          <div className="flex-1">
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-300">
              I’m Poovarasan Sandhanam, a full-stack mobile developer with over 2 years of
              experience. I specialize in building beautiful, performant, and scalable
              cross-platform apps using React Native, Firebase, Node.js, and modern cloud tools.
              I focus on creating delightful user experiences and robust backend systems with
              clean, maintainable code.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex items-center space-x-3 mb-1">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                    <span className="text-base font-medium text-gray-200">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-16 flex justify-around text-center">
              <div>
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  2+
                </h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
