import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false)

    const menuItems=[
        {name:'Education',href:'#education'},
        {name:'Certificate',href:'#certificate'},
        {name:'About Me',href:'#about'},
        {name:'Skills',href:'#skills'},
        {name:'Projects',href:'#projects'},

    ];
    const scrollToSection=(href)=>{
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({
            behavior:'smooth'
        })
    }
  return (
    <header className='relative z-50 px-6 py-7'>
        <div className='max-rw-7x1 mx-auto flex justify-between items-center'>
            <div className='text-white text-3x1 font-black cursor-pointer'>
                PORTFOLIO<span className='text-primary'>.</span>

            </div>

        </div>

    </header>
  )
}

export default Header