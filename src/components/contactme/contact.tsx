import profile from "../../assets/profile.png";
const ContactMe = () => {
  return (
    <div className="bg-slate-100 w-screen h-[60vh] flex max-md:flex-col px-10 py-5">
      <div className="w-[60%] max-md:w-[100%]  flex gap-10 items-center ">
        <div className="h-[200px] w-[200px] rounded-full bg-[#d8d8d8] border-4 border-[#323232] ">
          <img
            className="h-[100%] w-[100%] rounded-full object-cover animate-wiggle"
            src={profile}
            alt="Profile"
          />
        </div>
        <div className="w-[60%] flex flex-col gap-2">
          <h1 className="text-[12pt] font-extrabold"> About me</h1>
        <p className="w-[100%]">
          I'm Eyerusalem Abate, a UI/UX Designer and Frontend Developer
          passionate about creating intuitive, user-centered digital
          experiences. I focus on building modern, engaging interfaces that
          solve real-world problems through thoughtful design and clean code.
        </p>
          </div>
       
      </div>
      <div className="w-[40%] max-md:hidden ">
        <div className="flex flex-col w-full  items-center gap-5  ">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="font-extrabold text-[20pt]"> Contact Me </h1>
          </div>
          <input
            type="email"
            className="w-[60%] bg-transparent border-2 px-3 "
            placeholder="abcdefg@gmail.com"
          ></input>
          <input
            type="text"
            className="w-[60%] h-[10rem] bg-transparent border-2"
            
          ></input>
          <button className="border-2 px-7 py-1 bg-[#2c68ea] text-white"> Send </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
