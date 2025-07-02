import React from "react";
import employeeMSImage from "../assets/nwss.png";
import bookMSImage from "../assets/barkle.png";

const projects = [
  {
    id: 1,
    name: "NWS – Fitness Planner",
    technologies: ["React Native", "Firebase", "Redux", "CodePush"],
    image: employeeMSImage,
    github: "https://play.google.com/store/apps/details?id=com.nws&hl=en_GB&pli=1",
  },
  {
    id: 2,
    name: "Barkle – Fitness Challenge App",
    technologies: ["React Native", "Firebase", "Redux", "Native Modules"],
    image: bookMSImage,
    github: "https://play.google.com/store/apps/details?id=com.Barkle.subscription&hl=en_GB",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="w-52 h-96 mx-auto bg-black rounded-[2rem] border-[10px] border-gray-300 shadow-inner relative overflow-hidden">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-400 rounded-full z-10" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-5 py-2 rounded-full transition duration-300"
                >
                  View on Play Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
