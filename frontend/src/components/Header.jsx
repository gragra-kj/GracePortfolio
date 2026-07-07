import  { useState } from 'react'
import {Menu, X} from 'lucide-react'

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
            <nav className='hidden md:flex items-center gap-10'>
                <ul className='flex gap-8'>
                    {menuItems.map((item)=>(
                        <li key={item.name}>
                            <button onClick={()=> scrollToSection(item.href)} className='text-gray-300 hover:text-white text-base font-medium transition-colors'>
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={()=>scrollToSection('#contact')} className='bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-base font-semibold transition-all'>
                    Contact
                </button>
            </nav>
            {/*Mobile Menu */}
            <button className='md:hidden text-white' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={32}/> : <Menu size={32}/>}
            </button>

        </div>
        {isMenuOpen && (
            <div className='fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden' onClick={()=>setIsMenuOpen(false)}></div>

        )}
        <div className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } p-8 flex flex-col`}>
            <button className='self-end text-white mb-10' onClick={()=>setIsMenuOpen(false)}>
                <X size={32}/>
            </button>
            <ul className='flex flex-col gap-8'>
                {menuItems.map((item)=>(
                    <li key={item.name}>
                        <button onClick={()=> scrollToSection(item.href)} className='text-white  text-xl font-semibold hover:text-primary transition-colors'>
                            {item.name}
                        </button>
                    </li>
                ))}
                <li className='pt-6'>
                    <button onClick={()=> scrollToSection('#contact')} className='w-full bg-primary text-white py-4 rounded-xl text-lg font-bold'></button>
                </li>
            </ul>
        </div>

    </header>
  );
};

export default Header;