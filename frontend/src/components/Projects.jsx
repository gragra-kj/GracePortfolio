//import React from 'react'

import { useState, useEffect } from "react";
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
    <section className="py-16 bg-gray-900" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold
                text-white"
          >
            Projects
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden
                    shadow-sm hover:shadow-lg hover:scale-105
                    transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover hover:opacity-90
                        transition-opacity duration-300"
              />
              <div className="p-4">
                <h3
                  className="text-lg font-semibold
                            text-white group-hover:text-primary transition-colors"
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                    {project.technology}
                  </span>
                </div>
                <div className="flex gap-3 mt-5">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-primary rounded text-white text-sm hover:opacity-90"
                  >
                    GitHub
                  </a>

                  {project.live_demo && (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 border border-primary rounded text-primary text-sm hover:bg-primary hover:text-white"
                    >
                      Live Demo
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
