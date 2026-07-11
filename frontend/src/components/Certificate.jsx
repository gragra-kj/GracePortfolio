// // import React from 'react'
// // import Aos from 'aos';
// import {useEffect,useState} from 'react'
// import "aos/dist/aos.css";
// import { Award ,ShieldCheck,Calendar, ExternalLink} from 'lucide-react';
// import api from '../api/portfolioApi';

// const Certificate = () => {
//   const [certification,setCertification]=useState([]);
//   useEffect(()=>{
//     const fetchCertificates=async()=>{
//         try {
//             const response=await api.get("certificates/");
//             setCertification(response.data);
//         }catch(error){
//             console.error(error)
//         }
//     };
//     fetchCertificates();
//   },[])



//   return (
//     <section className="text-white py-20" id="certificate">
//       <div className="max-w-7xl mx-auto lg:px-16">
//         <div className="mb-16">
//             <p className='text-primary text-sm uppercase
//             tracking-widest mb-2 font-semibold'> Achievements</p>
//             <h2 className='text-4xl md:text-5xl font-extrabold
//             text-white'>Certifications</h2>
//         </div>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//             {certification.map((cert)=>(
//                 <div key={cert.id} data-aos='zoom-in'
//                 className='group relative bg-surface
//                 border border-[#1f1641] p-6 rounded-2xl
//                 transition-all duration-300
//                 hover:border-primary/50 
//                 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0,0.2)]'>
//                     <div className='absolute -top-4 -right-4
//                     bg-primary p-3 rounded-xl shadow-lg transform
//                     group-hover:rotate-12
//                     transition-transform'>
//                         <Award className='text-white' size={14}/>

//                     </div>
//                     <div className='flex items-center gap-4 mb-4
//                     text-xs text-gray-400'>
//                         <span className='flex items-center gap-1'>
//                             <ShieldCheck size={14} className='text-primary'/>
//                             {cert.issuer}

//                         </span>
//                         <span className='flex items-center gap-1'>
//                             <Calendar size={14}/>
//                             {cert.date}

//                         </span>

//                     </div>
//                     <h3 className='text-xl font-bold mb-3 group-hover:text-primary
//                     transition-colors'>
//                         {cert.title}

//                     </h3>
//                     <p className='text-gray-400 text-sm mb-6
//                     line-clamp-2'>
//                         {cert.desc}
//                     </p>
//                     <a href={cert.link} 
//                     className='inline-flex items-center gap-2
//                     text-sm font-medium text-primary hover:text-white transition-colors
//                     border-b border-transparent hover:border-white pb-1'
//                     target='blank'
//                     rel='noopener noreferrer'>
//                         View Certificate<ExternalLink size={14}/>


//                     </a>

//                 </div>
//             ))}


//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certificate
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Award, ShieldCheck, Calendar, ExternalLink } from "lucide-react";
import api from "../api/portfolioApi";

const Certificate = () => {
  const [certification, setCertification] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchCertificates = async () => {
      try {
        const response = await api.get("certificates/");
        setCertification(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section className="py-20 text-white" id="certificate">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="mb-16">
          <p
            className="
            text-primary
            uppercase
            tracking-[0.25em]
            text-sm
            font-semibold
            mb-2"
          >
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Certifications
          </h2>
        </div>


        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8"
        >

          {certification.map((cert) => (

            <div
              key={cert.id}
              data-aos="zoom-in"
              className="
              group
              relative
              bg-surface
              border
              border-slate-700
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-primary
              hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]
              "
            >

              {/* Award Icon */}
              <div
                className="
                absolute
                -top-5
                -right-5
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-primary
                to-secondary
                flex
                items-center
                justify-center
                shadow-xl
                transition-all
                duration-300
                group-hover:rotate-12
                group-hover:scale-110
                "
              >
                <Award
                  className="text-white"
                  size={24}
                />
              </div>


              {/* Issuer + Date */}
              <div
                className="
                flex
                flex-col
                gap-3
                mb-5
                text-sm
                text-slate-400"
              >

                <span className="flex items-center gap-2">
                  <ShieldCheck
                    size={16}
                    className="text-primary"
                  />

                  {cert.issuer}
                </span>


                <span className="flex items-center gap-2">
                  <Calendar
                    size={16}
                    className="text-primary"
                  />

                  {cert.date}
                </span>

              </div>



              {/* Title */}
              <h3
                className="
                text-xl
                font-bold
                leading-7
                mb-3
                text-white
                group-hover:text-primary
                transition-colors"
              >
                {cert.title}
              </h3>



              {/* Description */}
              <p
                className="
                text-slate-300
                leading-7
                text-sm
                mb-6
                line-clamp-3"
              >
                {cert.description}
              </p>



              {/* Button */}
              <a
                href={cert.credential_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                bg-background
                border
                border-primary/30
                text-primary
                text-sm
                font-medium
                hover:bg-primary
                hover:text-white
                transition-all
                duration-300"
              >
                View Certificate

                <ExternalLink size={15} />

              </a>


            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificate;