import { Cpu, Layout, Terminal } from 'lucide-react'
import React from 'react'

const Experience = () => {
    const skills=[
        {
            id:1,
            name:'Django',
            width:'85%',
            icon:Layout
        },
        {
            id:2,
            name:'Django',
            width:'85%',
            icon:Cpu
        },
        {
            id:3,
            name:'Django',
            width:'85%',
            icon:Terminal
        },
        {
            id:4,
            name:'Django',
            width:'85%',
            icon:Layout
        }

    ];
    const experiences=[
        {
            id:1,
            role:'Ict-Intern',
            company:'KMTC',
            date:'May 2022 - Sep 2022',

        },
        {
            id:2,
            role:'Ict-Intern',
            company:'KMTC',
            date:'May 2022 - Sep 2022',

        },
        {
            id:3,
            role:'Ict-Intern',
            company:'KMTC',
            date:'May 2022 - Sep 2022',

        },
    ]
  return (
    <section className="text-white py-20 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative  z-10">
        <div dat-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            Technical <span className="text-primary"> Skills</span>
          </h2>
          <div className="space-y-8">
            {skills.map((skill) => {
              const SkillIcon = skill.icon;
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
                      {skill.width}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-[#131d30] rounded-full">
                    <div
                      className="h-full rounded-full bg-linear-to-r
                                        from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]"
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience