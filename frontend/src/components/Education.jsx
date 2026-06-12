import React from 'react'
import educ from '../assets/education.jpeg'
const Education = () => {
    const educationData=[
        {
            id:1,
            degree:'Bachelors of Computer Science',
            institution:'Catholic University of Eastern Africa',
            duratio:'2019-2023',
            details:'Second Class Honors, Lower Divison'
        },
        {
            id:2,
            degree:'Bachelors of Computer Science',
            institution:'Catholic University of Eastern Africa',
            duratio:'2019-2023',
            details:'Second Class Honors, Lower Divison'
        }
    ]
  return (
    <section className='text-white py-20 overflow-hidden' id='education'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                    Learning Path
                </p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white'>

                    Education
                </h2>

            </div>
            <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className='w-full lg:w-5/12 flex justify-center lg:justify-start' data-aos='fade-right'>
                    <div className='absolute h-full w-full
                    z-0 p-2 translate-w-4 translate-y-4 
                    rounded-2xl shadow-lg border border-cyan-500'></div>
                    <div className='relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden
                    border border-[#1f1641]'>
                        <img src={educ} alt="education pic" className='w-64 h-64
                        md:w-94 md:h-120 object-cover transform transition-transform duration-500
                        hover:scale-110'/>
                    </div>
                    <div className='absolute -top-4 -left-4 bg-primary/20 w-16 h-16
                    rounded-full blur-2xl'></div>

                </div>

            </div>
            <div className='w-full lg:w-7/12'>

            </div>
        </div>

    </section>
  )
}

export default Education