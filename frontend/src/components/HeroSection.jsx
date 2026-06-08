import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative w-full" data-aos="zoom-in-up">
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl invisible opacity-40"></div>
        <div className="h-20 w-3/4 bg-linear-to-br from-[#289eff] opacity-40 blur-2xl "></div>
      </div>
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">
        <div
          className="grid lg:grid-cols-2 gap-10 xl:gap-14 
            relative pt-24 lg:max-w-none max-w-2xl 
            md:max-w-3xl mx-auto"
        >
          <div className="lg:py-6">
            <div className="text-center lg:text-left">
              <h1
                className="pt-4 text-white font-bold
                        text-4xl md:text-5xl lg:text-6xl"
              >
                Hey, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06a2c2] to-cyan-200">
                  Grace
                </span>
                👋
              </h1>
            </div>
            <p
              className="text-gray-300 pt-8 text-center
            lg:text-left mx-auto max-w-xl"
            >
                I am a Computer Science graduate and backend developer
                passionate about building reliable, scalable, and efficient
                server-side applications. I specialize in working with Django
                and REST APIs to design and develop robust backend systems that
                power modern web applications. I enjoy solving complex logic
                problems, working with databases, and creating clean,
                maintainable architectures. I am continuously improving my
                skills in backend development and cloud technologies, with the
                goal of becoming a strong backend engineer.
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection