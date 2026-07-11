// import  { useEffect,useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { GraduationCap, Calendar, CheckCircle } from "lucide-react";
// import educ from "../assets/education.jpeg";
// import api from "../api/portfolioApi";


// const Education = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

// const [educationData,setEducationData]=useState([]);
// useEffect(()=>{
//   const fetchEducation= async ()=>{
//     try{
//       const response=await api.get("education/");
//       setEducationData(response.data);

//     }catch(error){
//       console.error(error)
//     }
//   };
//   fetchEducation();
// },[]);

//   return (
//     <section className="text-white py-20 overflow-hidden" id="education">
//       <div className="max-w-7xl mx-auto px-6 lg:px-16">
//         {/* HEADER */}
//         <div className="mb-16">
//           <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
//             Learning Path
//           </p>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white">
//             Education
//           </h2>
//         </div>

//         {/* FLEX CONTAINER (FIX IS HERE) */}
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* LEFT IMAGE */}
//           <div
//             className="w-full lg:w-5/12 flex justify-center lg:justify-start"
//             data-aos="fade-right"
//           >
//             <div className="relative">
//               <div className="absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-2xl shadow-lg border border-primary"></div>

//               <div className="relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border border-[#1f1641]">
//                 <img
//                   src={educ}
//                   alt="education"
//                   className="w-64 h-64 md:w-94 md:h-120 object-cover transform transition-transform duration-500 hover:scale-110"
//                 />
//               </div>

//               <div className="absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl"></div>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="w-full lg:w-7/12 space-y-6" data-aos="fade-left">
//             {educationData.map((edu) => (
//               <div
//                 key={edu.id}
//                 className="group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] transition-all duration-300 hover:border-primary/50"
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-background rounded-lg border border-primary/20 group-hover:border-primary transition-colors">
//                       <GraduationCap className="text-primary" size={24} />
//                     </div>

//                     <div>
//                       <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
//                         {edu.degree}
//                       </h3>
//                       <p className="text-gray-400 text-sm">{edu.institution}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2 text-xs font-medium bg-background px-3 py-1 rounded-full border border-gray-700 w-fit">
//                     <Calendar size={12} className="text-primary" />
//                     {edu.start_year} - {edu.end_year}
//                   </div>
//                 </div>

//                 <p className="text-gray-400 text-sm leading-relaxed mb-4">
//                   {edu.details}
//                 </p>

//                 <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary font-bold">
//                   <CheckCircle size={12} />
//                   Academic Excellence
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GraduationCap, Calendar, CheckCircle } from "lucide-react";
import educ from "../assets/education.jpeg";
import api from "../api/portfolioApi";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchEducation = async () => {
      try {
        const response = await api.get("education/");
        setEducationData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <section className="py-20 text-white overflow-hidden" id="education">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-primary uppercase tracking-[0.25em] text-sm font-semibold mb-2">
            Learning Path
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Education
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Image */}
          <div
            className="w-full lg:w-5/12 flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative">

              {/* Decorative border */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4
                rounded-3xl border border-primary/40"
              ></div>

              {/* Glow */}
              <div
                className="absolute inset-0
                bg-gradient-to-br
                from-primary
                to-secondary
                blur-3xl
                opacity-20
                rounded-3xl"
              ></div>

              {/* Image */}
              <div
                className="relative z-10 bg-surface rounded-3xl
                overflow-hidden border border-slate-700 shadow-xl"
              >
                <img
                  src={educ}
                  alt="Education"
                  className="w-72 md:w-96 h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>
          </div>

          {/* Right */}
          <div
            className="w-full lg:w-7/12 space-y-6"
            data-aos="fade-left"
          >
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="
                  group
                  bg-surface
                  border border-slate-700
                  rounded-3xl
                  p-6
                  transition-all duration-300
                  hover:border-primary
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]
                "
              >

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-5">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                      p-3
                      rounded-xl
                      bg-background
                      border border-primary/30
                      group-hover:bg-primary
                      group-hover:border-primary
                      transition-all duration-300"
                    >
                      <GraduationCap
                        size={24}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>

                    <div>
                      <h3
                        className="
                        text-xl
                        font-bold
                        group-hover:text-primary
                        transition-colors"
                      >
                        {edu.degree}
                      </h3>

                      <p className="text-slate-400 text-sm">
                        {edu.institution}
                      </p>
                    </div>

                  </div>

                  {/* Date Badge */}
                  <div
                    className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-background
                    border border-slate-600
                    text-slate-300
                    text-xs
                    font-medium
                    w-fit"
                  >
                    <Calendar size={14} className="text-primary" />

                    {edu.start_year} - {edu.end_year}
                  </div>

                </div>

                {/* Description */}
                <p className="text-slate-300 leading-7 mb-5">
                  {edu.details}
                </p>

                {/* Badge */}
                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-primary/10
                  text-primary
                  text-xs
                  font-semibold"
                >
                  <CheckCircle size={14} />

                  Academic Excellence
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
