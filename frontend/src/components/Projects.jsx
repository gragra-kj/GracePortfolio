import { useState, useEffect } from "react";
// import { Github, ExternalLink, Code2 } from "lucide-react";
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
        <div className="mb-16 text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              className="group bg-surface border border-border rounded-3xl overflow-hidden
  transition-all duration-300 hover:border-primary/50
  hover:-translate-y-2 hover:shadow-2xl
  flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t
                  from-background via-transparent to-transparent"
                ></div>

                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 backdrop-blur-md p-2 rounded-xl">
                    <Code2 size={18} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[260px]">
                <h3
                  className="text-xl font-bold text-white
                  group-hover:text-primary transition-colors"
                >
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mt-3 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
                  {/* Technology */}
                  <div className="mt-5">
                    <span
                      className="inline-flex items-center rounded-full
      bg-primary/10 border border-primary/20
      px-3 py-1 text-xs text-primary font-medium"
                    >
                      {project.technology}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2
                              rounded-xl bg-primary px-4 py-3 text-sm font-medium
      text-white transition-all hover:brightness-110"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>

                    {project.live_demo && (
                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2
        rounded-xl border border-primary/30
        bg-background text-primary px-4 py-3 text-sm
        font-medium transition-all
        hover:bg-primary hover:text-white"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Technology */}
                {/* <div className="mt-5">
                  <span
                    className="inline-flex items-center rounded-full
                    bg-primary/10 border border-primary/20
                    px-3 py-1 text-xs text-primary font-medium"
                  >
                    {project.technology}
                  </span>
                </div>

                {/* Buttons */}
                {/* <div className="flex gap-3 mt-6">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2
                    rounded-xl bg-primary px-4 py-3 text-sm font-medium
                    text-white transition-all hover:brightness-110"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {project.live_demo && (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2
                      rounded-xl border border-primary/30
                      bg-background text-primary px-4 py-3 text-sm
                      font-medium transition-all
                      hover:bg-primary hover:text-white"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
