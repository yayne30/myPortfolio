import profile from '../../assets/tutorHome.png'

const LOGOS = [
 <img src={profile}></img>,
 <img src={profile}></img>,
 <img src={profile}></img>,
 <img src={profile}></img>,
 <img src={profile}></img>,
 <img src={profile}></img>,
 <img src={profile}></img>,
];
const Projects = () => {
  return (
    <div className="h-max pb-10">
      <div className="flex flex-col  items-center gap-5 text-white mb-20">
        <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-[20pt]"> Featured Projects </h1>
        <p className="font-light text-[12pt]">
          Showcasing My Work: Innovative Solutions and Creative Projects
        </p>
        </div>
        <div className="flex gap-4">
          <div className="w-[300px] border-t-2 "></div>
          <div className="w-[300px] border-t-2 border-dashed border-[#d4d4f5] "></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 ">
        <div className="flex flex-col items-center gap-10">
        <div className="w-[50vw] text-white  p-5 flex flex-col items-start gap-3 bg-gradient-to-r from-slate-600 to-blue-950 h-[12rem] rounded-xl  shadow-inner shadow-white">
             <h1 className="text-[12pt] font-bold">
             Tutor Platform UI Design
             </h1>
             <p className="text-[12pt] font-light">An intuitive platform that connects tutors, students, and parents, making it easy to book sessions and track progress. Designed for a seamless and effective learning experience, it simplifies communication and enhances the educational journey.</p>
             <button className=" text-[12pt] font-medium bg-slate-500 pb-2 px-5 py-1 text-center rounded-lg flex items-center justify-center"> Figma</button>
          </div>
          
          <div className="relative m-auto w-[60vw] h-[150px] overflow-hidden glowing-ends">
      <div className="animate-infinite-slider flex  h-full">
      {[...Array(6)].map((_, index) => (
           <img  src={profile} className="slide w-[190px] bg-white ml-[10px] rounded-md " /> ))}

      {[...Array(6)].map((_, index) => (
        <img className="slide w-[190px] ml-[10px] bg-white rounded-md"  src={profile} />))}
        
      </div>
    </div>

    
        </div>
        <div className="flex flex-col items-center gap-10">
        <div className="w-[50vw] text-white  p-5 flex flex-col items-start gap-3 bg-gradient-to-r from-slate-600 to-blue-950 h-[12rem] rounded-xl  shadow-inner shadow-white">
             <h1 className="text-[12pt] font-bold">
             Tutor Platform UI Design
             </h1>
             <p className="text-[12pt] font-light">An intuitive platform that connects tutors, students, and parents, making it easy to book sessions and track progress. Designed for a seamless and effective learning experience, it simplifies communication and enhances the educational journey.</p>
             <button className=" text-[12pt] font-medium bg-slate-500 pb-2 px-5 py-1 text-center rounded-lg flex items-center justify-center"> Figma</button>
          </div>
          
          <div className="relative m-auto w-[60vw] h-[150px] overflow-hidden glowing-ends">
      <div className="animate-infinite-slider flex  h-full">
      {[...Array(6)].map((_, index) => (
           <img  src={profile} className="slide w-[190px] bg-white ml-[10px] rounded-md " /> ))}

      {[...Array(6)].map((_, index) => (
        <img className="slide w-[190px] ml-[10px] bg-white rounded-md"  src={profile} />))}
        
      </div>
    </div>

    
        </div>
      </div>
    </div>
  );
};

export default Projects;
