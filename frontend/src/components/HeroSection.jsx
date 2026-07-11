// import {useEffect,useState} from 'react'
// import api from '../api/portfolioApi'
// import {Download} from "lucide-react"



// const HeroSection = () => {

//   const [profile,setProfile]=useState(null);

//  useEffect(() => {
//   const fetchProfile = async () => {
//     try {
//       const response = await api.get("profile/");
//       console.log("Response:", response);
//       console.log("Data:", response.data);

//       setProfile(response.data[0]);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   fetchProfile();
// }, []);
//   if(!profile){
//     return <div className='flex justify-center items-center h-screen text-white'>Loading....</div>
//   }


//   return (
//     <section className="relative w-full" data-aos="zoom-in-up">
//       <div className="absolute top-0 inset-x-0 h-64 flex items-start">
//         <div className="h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl invisible opacity-40"></div>
//         <div className="h-20 w-3/4 bg-linear-to-br from-[#289eff] opacity-40 blur-2xl "></div>
//       </div>
//       <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">
//         <div
//           className="grid lg:grid-cols-2 gap-10 xl:gap-14 
//             relative pt-24 lg:max-w-none max-w-2xl 
//             md:max-w-3xl mx-auto"
//         >
//           <div className="lg:py-6">
//             <div className="text-center lg:text-left">
//               <h1
//                 className="pt-4 text-white font-bold
//                         text-4xl md:text-5xl lg:text-6xl"
//               >
//                 Hey, I'm{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
//                   {profile.fullname}
//                 </span>
//                 👋
//               </h1>
//             </div>
//             <p
//               className="text-slate-300 pt-8 text-center
//             lg:text-left mx-auto max-w-xl"
//             >
//               {profile.bio}

              
//             </p>
//             <div className='flex items-center gap-3 pt-9 
//             flex-col sm:flex-row sm:w-max lg:mx-0'>
//               <button className='px-6 md:px-7 py-3 
//               rounded-full relative group w-full sm:w-max flex justify-center'>
//                 <span className='absolute inset-0 rounded-3xl group-hover:scale-105
//                 origin-center transition-all ease-in-out bg-primary border-2 border-transparent'>

//                 </span>
//                 <span className='relative flex items-center
//                 justify-center text-white'>
//                   Hire Me
//                 </span>
//               </button>
//               <button className='border border-primary px-6 md:px-7 py-3 rounded-full
//               relative group w-full sm:w-max flex justify-center'>
//                 <div className='hover:scale-105
//                 transition-all ease-in-out flex justify-center items-center relative'>
//                   <div className='svg-container'>
//                     <Download size={18} className='text-primary'/>
//                     <div className='download-loader text-white hidden'></div>

//                   </div>
//                   <a href={profile.resume} download="resume.pdf" className='pl-2 text-primary'>
//                   Download Resume
                  
//                   </a>

//                 </div>

//               </button>
//             </div>
//           </div>
//           <div className='lg:h-full md:flex'>
//             <div className='flex w-full h-96 min-h-96
//             lg:min-h-[none] lg:w-full lg:h-full items-center
//             relative'>
//               <div className='absolute z-0 top-1/2
//               -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)]
//               bg-linear-to-r opacity-25 from-[#0c64ac]
//               to-primary blur-2xl'>
//               </div>
//               <div className='absolute h-full z-10 p-2
//               -translate-y-1/2 top-1/2 lg:right-3
//               md:right-40 sm:right-16
//               rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
//               shadow-lg border border-primary'>
//                 <img src={profile.profile_image} alt={profile.fullname}
//                 width="500"
//                 height="auto"
//                 loading='lazy'
//                 className='w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
//                 object-cover'  
                
//                 />

//               </div>
//             </div> 

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import api from "../api/portfolioApi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("profile/");
        setProfile(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen text-slate-300">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-0 w-[500px] h-[500px] bg-primary opacity-20 blur-[120px] rounded-full"></div>

        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-secondary opacity-20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* LEFT */}
          <div data-aos="fade-right">
            <p className="uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Backend Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {profile.fullname}
              </span>
              👋
            </h1>

            <p className="mt-8 text-slate-300 leading-8 text-lg max-w-xl">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button
                className="px-7 py-3 rounded-xl
                bg-primary hover:bg-secondary
                transition-all duration-300
                shadow-lg hover:shadow-[0_10px_40px_rgba(99,102,241,0.35)]
                text-white font-semibold"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Hire Me
              </button>

              <a
                href={profile.resume}
                download="Grace_Muthui_Resume.pdf"
                className="px-7 py-3 rounded-xl
                border border-primary
                text-primary
                hover:bg-primary hover:text-white
                transition-all duration-300
                flex items-center gap-2"
              >
                <Download size={18} data-aos="fade-up" data-aos-delay="300" />
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="flex justify-center lg:justify-end"
            data-aos="fade-right"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[40px]
                bg-gradient-to-br
                from-primary
                to-secondary
                blur-3xl
                opacity-30
                scale-110"
              ></div>

              {/* Card */}
              <div
                className="relative
                w-[320px]
                md:w-[380px]
                rounded-[40px]
                overflow-hidden
                border border-slate-700
                bg-surface
                p-3
                backdrop-blur-md
                shadow-2xl"
              >
                <img
                  src={profile.profile_image}
                  alt={profile.fullname}
                  className="w-full h-full object-cover rounded-[30px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;