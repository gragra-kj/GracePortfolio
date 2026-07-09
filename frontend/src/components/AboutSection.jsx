//import React from 'react'
import { useEffect,useState } from "react";
const AboutSection = () => {
  return (
    <section className="text-white mt-20 relative overflow-hidden" id="about">
      <div
        className="max-w-7xl mx-auto px-4 md:grid-cols-2
        gap-12 items-center py-16 xl:px-16 relative z-10"
      >
        <div data-aos="fade-right">
          <h2
            className="text-4xl md:text-5xl font-extrabold
                text-white mb-6"
          >
            More <span className="text-primary">About</span> Me
          </h2>
          <p className='text-gray-400 text-base lg:text-lg
          mb-10 leading-relaxed'>
            Detail-oriented IT Support Technician with experience
            troubleshooting hardware, software, and network issues. Skilled in
            technical support, system maintenance, and user support.
            <br/><br/>
            Knowledgeable in Python, Django, Django REST Framework, AWS, and
            data analysis. Passionate about solving technical problems, building
            practical technology solutions, and continuously expanding my skill
          </p>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection