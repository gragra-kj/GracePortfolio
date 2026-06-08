import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative w-full' data-aos='zoom-in-up'>
        <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
            <div className='h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl invisible opacity-40'></div>
            <div className='h-20 w-3/4 bg-linear-to-br from-[#289eff] opacity-40 blur-2xl '></div>
        </div>
        <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative'>
            <div className='grid lg:grid-cols-2 gap-10 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto'>
                <div></div>
            </div>
        </div>
    </section>
   
  )
}

export default HeroSection