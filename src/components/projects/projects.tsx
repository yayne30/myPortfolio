// import profile from '../../assets/tutorHome.png'
import 'aos/dist/aos.css';  // Import AOS styles
import AOS  from 'aos'
import tutor from "../../assets/tutorPc.png"
import bakery from "../../assets/bakery.png";
import ShopOps from "../../assets/shopOps.png"
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,  // Animation duration in milliseconds
      once: false       // Whether animation should happen only once
    });
  }, []);
  return ( 
    <div className="h-max pb-10 text-black bg-[#e9f2f6] rounded-t-lg w-[100vw] px-5 mt-8">
      <div className="flex flex-col  items-center gap-5 mb-20 max-md:mb-5">
        <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-[30pt] max-md:text-[20pt]"> Featured Projects </h1>
        <p className="font-light text-[16pt] max-md:text-[10pt] max-md:w-[100vw] text-center">
          Showcasing My Work: <strong className="text-[#241fa4] font-extrabold">Innovative Solutions</strong> and <strong className="text-[#241fa4] font-extrabold">Creative Projects</strong>
        </p>
        </div>
        <div className="flex gap-4">
          <div className="w-[40vw] border-t-2 max-md:w-[40vw] border-[#636381] "></div>
          <div className="w-[40vw] border-t-2 max-md:w-[40vw] border-dashed border-[#636381] "></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 ">
        
        <div data-aos="zoom-in" className="w-[70vw]  h-[20rem]  p-5 flex max-md:flex-col max-md:h-max max-md:w-[90vw] items-center gap-3 max-md:gap-2 bg-gradient-to-r from-[#ffffff] to-[#c1d3f7]  rounded-xl  shadow-md shadow-[#c0c1c6]">
          <img src={tutor} className='h-[90%] max-lg:h-[60%] max-sm:h-[40%] '></img>
          <div className='flex flex-col gap-5'>
          <h1 className="text-[15pt] max-lg:text-[13pt] max-md:text-[10pt]  font-bold">
             Tutor Platform UI Design
             </h1>
             <p className="text-[13pt] max-lg:text-[10pt] max-md:text-[8pt] font-light">An intuitive platform that connects tutors, students, and parents, making it easy to book sessions and track progress. Designed for a seamless and effective learning experience, it simplifies communication and enhances the educational journey.</p>
             <button className=" text-[12pt] max-md:text-[8pt] font-medium bg-[#4f84ff] pb-2 px-5 py-1 text-center rounded-lg flex items-center justify-center"> Figma Design</button>

       
            
          </div>
          
        </div>
        <div data-aos="zoom-in" className="w-[70vw] h-[20rem]  p-5 flex max-md:flex-col max-md:h-max max-md:w-[90vw] items-center gap-3 max-md:gap-2 bg-gradient-to-r from-[#ffffff] to-[#c1d3f7]  rounded-xl  shadow-md shadow-[#c0c1c6]">
          <img src={bakery} className='h-[90%] max-lg:h-[60%] max-sm:h-[40%] '></img>
          <div className='flex flex-col gap-5'>
          <h1 className="text-[15pt] font-bold max-lg:text-[13pt] max-md:text-[10pt]">
             Tutor Platform UI Design
             </h1>
             <p className="text-[13pt] font-light max-lg:text-[10pt] max-md:text-[8pt]">An intuitive platform that connects tutors, students, and parents, making it easy to book sessions and track progress. Designed for a seamless and effective learning experience, it simplifies communication and enhances the educational journey.</p>
             <button className=" text-[12pt] font-medium bg-[#9c728b] pb-2 px-5 py-1 text-center rounded-lg flex items-center justify-center"> Figma Design</button>

       
            
          </div>
          
        </div>
        <div data-aos="zoom-in" className="w-[70vw] h-[20rem]  p-5 flex max-md:flex-col max-md:h-max max-md:w-[90vw] items-center gap-3 max-md:gap-2 bg-gradient-to-r from-[#ffffff] to-[#c1d3f7]  rounded-xl  shadow-md shadow-[#c0c1c6]">
          <img src={ShopOps} className='h-[90%]  max-lg:h-[60%] max-sm:h-[40%]'></img>
          <div className='flex flex-col gap-5'>
          <h1 className="text-[15pt] font-bold max-lg:text-[13pt] max-md:text-[10pt]">
             Tutor Platform UI Design
             </h1>
             <p className="text-[13pt] font-light max-lg:text-[10pt] max-md:text-[8pt]">An intuitive platform that connects tutors, students, and parents, making it easy to book sessions and track progress. Designed for a seamless and effective learning experience, it simplifies communication and enhances the educational journey.</p>
             <button className=" text-[12pt] font-medium bg-[#43f3b8]  pb-2 px-5 py-1 text-center rounded-lg flex items-center justify-center"> Figma Design</button>

       
            
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default Projects;
