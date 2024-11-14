import { DownloadIcon } from "@radix-ui/react-icons";
import profile from "../../assets/profile.png";
const Header = () => {
  return (
   
    <div className="flex pl-3 pt-1 w-[100vw] items-center justify-between my-2 mx-1 rounded-lg md:border-b-2 bg-[#f7f4f4] shadow-inner md:shadow-[#dde1e3] ">
      <div className='flex items-center justify-center gap-2 '>

     <div className="h-[50px] w-[50px] rounded-full bg-[#d8d8d8] border-2 border-[#323232] ">
          <img
            className="h-[100%] w-[100%] rounded-full object-cover animate-wiggle"
            src={profile}
            alt="Profile"
          />
        </div>
        <h1 className='font-extrabold text-[15pt] max-sm:hidden '>Eyerusalem</h1>
        </div>

      
  <nav className="flex justify-center space-x-3 text-[11pt]  font-bold max-sm:hidden max-md:space-x-5">
      <a href='#about' className='border-x-2 border-transparent px-2 hover:font-extrabold  hover:text-[#1a61bf]   hover:border-x-[#1a61bf]  hover:rounded-md'>About</a>
      <a href='#projects'  className='border-x-2 px-2 border-transparent hover:font-extrabold  hover:text-[#1a61bf]   hover:border-x-[#1a61bf]  hover:rounded-md'>Projects</a>
      <a href='#toolKit'  className='border-x-2 px-2 border-transparent hover:font-extrabold  hover:text-[#1a61bf]   hover:border-x-[#1a61bf]  hover:rounded-md'> Tools </a>
      <a href='#rules'  className='border-x-2 px-2 border-transparent hover:font-extrabold  hover:text-[#1a61bf]   hover:border-x-[#1a61bf]  hover:rounded-md'> Principles </a>

   </nav>
   <a href="https://drive.google.com/file/d/17wt91bGjOw9CHTp04QsXQmRmnGA6ZQ3f/view?usp=sharing" download="Eyerusalem'sCV.pdf" className="group hover:bg-[#3638b6] max-md:px-1 hover:text-white hover:border-transparent mr-20 max-md:mr-2 border-2 border-[#323232] px-3 py-1 rounded-lg text-[#323232] font-bold text-[11pt] flex items-center">
    Download CV
    <DownloadIcon className="text-black group-hover:text-white ml-2" />
</a>

    </div>
  )
}

export default Header