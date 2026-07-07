//import React from 'react'
import projc1 from '../assets/projc1.jpeg'

const Projects = () => {
    const projects=[
        {
            id:1,
            image:projc1,
            title:'Tracker',
            desc:'JJNNJ',
            tech:['React','Node.js','mysql'],
        },
        {
            id:2,
            image:projc1,
            title:'Tracker',
            desc:'JJNNJ',
            tech:['React','Node.js','mysql'],
        },
        {
            id:3,
            image:projc1,
            title:'Tracker',
            desc:'JJNNJ',
            tech:['React','Node.js','mysql'],
        },
        

    ]
  return (
    <section className='py-16 bg-gray-900' id='projects' >
        <div className='container mx-auto px-4 max-w-7xl'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl md:text-5xl font-extrabold
                text-white'>
                    Projects
                </h2>
                <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'>
                </div>

            </div>
            <div className='gird grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-5'>
                {projects.map((project)=>(
                    <div key={project.id}
                    className='bg-gray-800 rounded-lg overflow-hidden
                    shadow-sm hover:shadow-lg hover:scale-105
                    transition-all duration-300'>
                        <img src={project.image} alt={project.title}
                        className='w-full h-44 onject-cover hover:opacity-90
                        transition-opacity duration-300'/>
                        <div className='p-4'>
                            <h3 className='text-lg font-semibold
                            text-white group-hover:text-primary transition-colors'>
                                {project.title}

                            </h3>
                            <p className='text-gray-400 text-sm mt-1'>
                                {project.desc}
                            </p>
                            <div className='flex flex-wrap gap-1.5 mt-3'>
                                {project.tech.map((tec,idx)=>(
                                    <span key={idx} className='text-xs px-2 py-0.5
                                    bg-gray-700 text-gray-300 rounded hover:bg-primary
                                    hover:text-white transition-colors duration-300'>
                                        {tec}

                                    </span>
                                ))}

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>

    </section>
  )
}

export default Projects