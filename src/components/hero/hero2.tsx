import Lottie from "lottie-react";
import animation from "../../assets/uiAnimation.json";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div className="relative h-screen overflow-hidden w-[100vw]">
      <svg
    className="absolute z-0 top-0 bg-transparent opacity-40"
    width="100%"
    height="80%"
    viewBox="0 0 800 200"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#706cd4", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#9b8df5", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    <path
      d="M0,600 C200,100 600,400 800,200 L800,400 L0,400 Z"
      fill="url(#grad1)"
    >
      <animate
        attributeName="d"
        values="
          M0,600 C200,100 600,400 800,200 L800,400 L0,400 Z;
          M0,500 C300,200 500,300 800,100 L800,400 L0,400 Z;
          M0,600 C200,100 600,400 800,200 L800,400 L0,400 Z"
        dur="10s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
      <div className="bubble bubble-1 bg-blue-100 opacity-60 animate-float w-16 h-16 rounded-full absolute top-[30%] left-[25%] shadow-lg"></div>
      <div className="bubble bubble-2 bg-blue-800 opacity-5 animate-float w-24 h-24 rounded-full absolute top-[60%] left-[10%] animate-delay-2s shadow-xl"></div>
      <div className="bubble bubble-3 bg-blue-200 opacity-70 animate-float w-12 h-12 rounded-full absolute top-[80%] left-[50%] animate-delay-1s shadow-md"></div>
      <div className="bubble bubble-4 bg-blue-100 opacity-50 animate-float w-18 h-18 rounded-full absolute top-[100px] left-[40%] animate-delay-3s shadow-sm"></div>
      <div className="bubble bubble-5 bg-blue-300 opacity-20 animate-float w-20 h-20 rounded-full absolute top-[2%] left-[5%] animate-delay-4s shadow-2xl"></div>

      <div className="h-screen flex  text-[#323232] z-10 relative">
        <div className="flex flex-col gap-3 sm:w-[60%] pt-16 md:ml-24 max-md:ml-5">
        <h1 className="self-start text-[13pt] font px-5 text-white py-1 rounded-lg bg-[#433ed5]">
  Hi all! <span className="inline-block  emoji-wave">😊</span> I’m
</h1>

          <h1 className="text-[45pt] max-lg:text-[30pt]  font-extrabold text-[#241fa4]">
            Eyerusalem Abate
          </h1>
          <h1 className="font-bold text-[20pt] max-lg:text-[18pt]">
            <strong className="text-[#241fa4]">UI/UX designer</strong> & Frontend Developer
          </h1>
          <p className="text-[14pt] font-[510] md:w-[80%] max-md:w-[100%] max-md:text-[450]">
            Passionate about creating user-centered experiences that solve
            real-world problems through intuitive and impactful design, focused
            on enhancing daily life and delivering lasting value.
          </p>
          <div className="flex mt-2 gap-4 ml-28 max-lg:ml-6">
            <a href="https://github.com">
              <FaGithub
                size={30}
                className="text-[#311c9d] hover:text-[#ababab] transition-colors"
              />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin
                size={30}
                className="text-[#311c9d] hover:text-[#ababab] transition-colors"
              />
            </a>
            <a href="https://twitter.com">
              <FaTelegram
                size={30}
                className="text-[#311c9d] hover:text-[#ababab] transition-colors"
              />
            </a>
            <a href="https://instagram.com">
              <FaInstagram
                size={30}
                className="text-[#311c9d] hover:text-[#ababab] transition-colors"
              />
            </a>
            <a></a>
          </div>
        </div>

        <div className="w-[50%] h-[80%]">
          <Lottie className="h-full w-full max-sm:hidden" animationData={animation} />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
