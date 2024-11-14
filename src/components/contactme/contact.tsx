import { FaPhone, FaTelegram } from "react-icons/fa";import profile from "../../assets/profile.png";
import { AiFillMail } from "react-icons/ai";
const ContactMe = () => {
  const date = new Date();
  const year = date.getFullYear()
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
          <h1 className="text-[12pt] font-extrabold"> Little about me</h1>
        <p className="w-[100%]">
          I'm Eyerusalem Abate, a UI/UX Designer and Frontend Developer
          passionate about creating intuitive, user-centered digital
          experiences. I focus on building modern, engaging interfaces that
          solve real-world problems through thoughtful design and clean code.
        </p>
          </div>
       
      </div>
      <div className="w-[40%] flex flex-col max-lg:w-[100%] gap-3 items-center justify-center">
      <h1 className="text-[12pt] font-bold flex items-center">
        Feel Free to Reach Out{" "}
     
        <span
          role="img"
          aria-label="wink"
          className="text-[15pt] ml-2"
        >
          😉
        </span>
      </h1>
        <div className="font-bold">
    <div className="flex items-center gap-2">
      <AiFillMail width={30} height={30} className="text-[#3a3939]" />
      <a
        href="mailto:eyerusabate2@gmail.com"
        className="text-[#3a3939] hover:text-[#241fa4] transition-colors"
      >
        eyerusabate2@gmail.com
      </a>
    </div>
    <div className="flex items-center gap-2">
      <FaPhone width={30} height={30} className="text-[#3a3939]" />
      <a
        href="tel:+251916295287"
        className="text-[#3a3939] hover:text-[#241fa4] transition-colors"
      >
        +251916295287
      </a>
    </div>
    <div className="flex items-center gap-2">
      <FaTelegram width={30} height={30} className="text-[#3a3939]" />
      <a
        href="https://t.me/sost21"
        className="text-[#3a3939] hover:text-[#241fa4] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </a>
    </div>
  </div>
</div>

        
           
      </div>
      <div>
        @copyright {year}
      </div>
    </div>
  );
};

export default ContactMe;
