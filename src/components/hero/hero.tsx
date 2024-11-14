import profile from "../../assets/profile.png";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Lottie  from "lottie-react";
import animation from "../../assets/uiAnimation.json"
const Hero = () => {
  return (
    <div className="relative w-[100vw]">
      <div className="absolute top-[20%] left-[10%] rounded-full h-[100px] w-[100px] bg-[#323232] opacity-10 shadow-xl shadow-[#323232]"></div>
      <div className="absolute top-[20%] left-[70%] rounded-full h-[100px] w-[100px] bg-[#323232] opacity-10 shadow-2xl shadow-[#323232]"></div>
      <div className="absolute top-[50%] left-[25%] rounded-full h-[80px] w-[80px] bg-[#323232] opacity-20 shadow-xl shadow-[#323232]"></div>
      <div className="absolute top-[30%] left-[60%] rounded-full h-[120px] w-[120px] bg-[#323232] opacity-15 shadow-lg shadow-[#323232]"></div>
      <div className="absolute top-[70%] left-[10%] rounded-full h-[150px] w-[150px] bg-[#323232] opacity-5 shadow-xl shadow-[#323232]"></div>
      <div className="  h-screen flex flex-col text-[#323232]  items-center pt-14 gap-8">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[40pt] font-extrabold"> Eyerusalem Abate </h1>
          <h1 className="font-bold text-[20pt]">
            <strong className="text-[#4b7bba]">UI/UX designer</strong> & Frontend Developer
          </h1>
          <p className="text-[14pt] font-light w-[50%] text-center">
            Passionate about creating user-centered experiences that solve
            real-world problems through intuitive and impactful design, focused
            on enhancing daily life and delivering lasting value.
          </p>
          <div>
            <Lottie className="h-[200px] w-[200px]" animationData={animation}/>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="h-[200px] w-[200px] rounded-full bg-[#d8d8d8] border-4 border-[#323232] ">
            <img
              className="h-[100%] w-[100%] rounded-full object-cover animate-wiggle"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://github.com">
              <FaGithub
                size={30}
                className="text-[#323232] hover:text-blue-400 transition-colors"
              />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin
                size={30}
                className="text-[#323232] hover:text-blue-400 transition-colors"
              />
            </a>
            <a href="https://twitter.com">
              <FaTwitter
                size={30}
                className="text-[#323232] hover:text-blue-400 transition-colors"
              />
            </a>
            <a href="https://instagram.com">
              <FaInstagram
                size={30}
                className="text-[#323232] hover:text-pink-400 transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;












