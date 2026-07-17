import { useState, useEffect } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import api from "../api/portfolioApi";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("project/");
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of projects demonstrating my experience in backend
            development, cloud computing and REST API development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              className="group flex flex-col rounded-3xl overflow-hidden
              bg-surface border border-border
              hover:border-primary/40
              hover:-translate-y-2
              transition-all duration-300
              hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 p-2 rounded-xl backdrop-blur">
                    <Code2 size={18} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technology */}
                <div className="mt-5">
                  <span
                    className="inline-flex items-center
                    rounded-full bg-primary/10
                    border border-primary/20
                    px-3 py-1 text-xs font-medium
                    text-primary"
                  >
                    {project.technology}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-6">
                  {project.live_demo ? (
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2
                        rounded-xl bg-primary
                        px-4 py-3
                        text-white text-sm font-medium
                        hover:brightness-110 transition"
                      >
                        <FaGithub size={18} />
                        GitHub
                      </a>

                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2
                        rounded-xl border border-primary/30
                        bg-background
                        px-4 py-3
                        text-primary text-sm font-medium
                        hover:bg-primary hover:text-white
                        transition"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  ) : (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2
                      rounded-xl bg-primary
                      px-4 py-3
                      text-white text-sm font-medium
                      hover:brightness-110 transition"
                    >
                      <FaGithub size={18} />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;