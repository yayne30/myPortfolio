import { FigmaLogoIcon } from "@radix-ui/react-icons";
import profile from "../../assets/profile.png";
const ContactMe = () => {
  return (
    <div className="flex bg-slate-100 w-screen h-max pb-5 flex-col justify-center items-center">
    <div className=" flex max-lg:flex-col max-lg:gap-7 px-10 py-5 justify-center items-center">
      <div className="w-[60%] max-lg:w-[100%] max-lg:flex-col   flex gap-10 items-center ">
        <div className="h-[200px] w-[200px] rounded-full bg-[#d8d8d8] border-4 border-[#323232] ">
          <img
            className="h-[100%] w-[100%] rounded-full object-cover animate-wiggle"
            src={profile}
            alt="Profile"
          />
        </div>
        <div className="w-[60%] max-lg:w-[100%] text-center  flex flex-col gap-2">
          <h1 className="text-[12pt] font-extrabold"> About me</h1>
        <p className="w-[100%]">
          I'm Eyerusalem Abate, a UI/UX Designer and Frontend Developer
          passionate about creating intuitive, user-centered digital
          experiences. I focus on building modern, engaging interfaces that
          solve real-world problems through thoughtful design and clean code.
        </p>
          </div>
       
      </div>
      <div className="w-[40%] flex flex-col max-lg:w-[100%] gap-3 items-center justify-center">
        <h1>Feel Free to reach out</h1>
        <div>

        <div className="flex">
        <FigmaLogoIcon width={30} height={30} className="text-[#3a3939] " />
        <h1>eyerusabate@gmail.com</h1>
        </div>
        <div className="flex">
        <FigmaLogoIcon width={30} height={30} className="text-[#3a3939] " />
        <h1>+251916295287</h1>
        
      </div>
      <div className="flex">
        <FigmaLogoIcon width={30} height={30} className="text-[#3a3939] " />
        <h1>Telegram</h1>
        
      </div>

        </div>
        </div>
        
           
      </div>
      <div>
        @copyright 2024
      </div>
    </div>
  );
};

export default ContactMe;
