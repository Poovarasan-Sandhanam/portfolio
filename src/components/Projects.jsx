import { projects } from "../../data/projects";
import Tag from "../common/Tag";

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map(({ id, name, technologies, image, link }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
            >
              <div className="w-52 h-96 mx-auto bg-black rounded-[2rem] border-[10px] border-gray-300 relative overflow-hidden shadow-inner">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-400 rounded-full z-10" />
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech, i) => (
                    <Tag key={i}>{tech}</Tag>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-5 py-2 rounded-full transition"
                >
                  View on Play Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
