import {
  Briefcase,
  Building,
  Calendar,
  Cpu,
  Layout,
  Terminal,
} from "lucide-react";
//import React from "react";
import { useState, useEffect } from "react";
import api from "../api/portfolioApi";

const Experience = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsResponse, experienceResponse] = await Promise.all([
          api.get("skills/"),
          api.get("experience/"),
        ]);
        setSkills(skillsResponse.data);
        setExperience(experienceResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const iconMap = {
    Layout,
    Terminal,
    Cpu,
  };

  return (
    <section className="text-white py-20 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative  z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
              Technical <span className="text-primary"> Skills</span>
            </h2>
            <div className="space-y-8">
              {skills.map((skill) => {
                const SkillIcon = iconMap[skill.icon] || Layout;
                return (
                  <div key={skill.id} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 bg-[#111a3e] rounded-lg
                                          group-hover:bg-primary transition-colors duration-300"
                        >
                          <SkillIcon
                            size={20}
                            className="
                                              text-primary group-hover:text-white"
                          />
                        </div>
                        <span className="font-medium tracking-wide">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary font-bold">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#131d30] rounded-full">
                      <div
                        className="h-full rounded-full bg-linear-to-r
                                          from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
              Work <span className="text-primary">Experience</span>
            </h2>

            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="group relative p-6 rounded-2xl
        bg-[#1f1641] hover:border-primary/50
        transition-all duration-300"
                >
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div
                        className="p-3 bg-[#050816] rounded-xl border
              border-gray-800 group-hover:border-primary transition-colors"
                      >
                        <Briefcase className="text-primary" size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center gap-2 mt-2 text-gray-300">
                        <Building size={16} className="text-primary" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Dates */}
                      <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                        <Calendar size={16} className="text-primary" />
                        <span>
                          {exp.start_date} - {exp.end_date || "Present"}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
