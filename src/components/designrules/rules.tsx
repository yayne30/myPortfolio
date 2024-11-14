import ui from '../../assets/ui.png';
import ux from '../../assets/ux.png';
import mobile from '../../assets/mobileDesign.png';
import desktop from '../../assets/desktopDesign.png';
const Rules = () => {
  return (
    <div className="h-max pb-10 flex flex-col gap-10 px-5 mt-10 ">
     <div className="flex flex-col  items-center gap-5 mb-20 max-lg:mb-5 ">
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
      <div className="flex self-center w-[80vw] gap-10 mt-10 max-lg:flex-col max-lg:mt-0">
        <div className=" lg:w-[50%] max-sm:w-[100vw] h-max flex max-lg:flex-col gap-5">
          <div className="flex flex-col items-center gap-5  max-lg:gap-1 max-lg:items-start">
            <h1 className="w-max max-lg:rotate-0 rotate-90 text-[12pt] font-extralight text-blue-900">
              {" "}
              My Skills
            </h1>
            <div className="w-[3px] h-[70px] max-lg:w-[70px] max-lg:h-[1px] bg-[#6c84af]"></div>
          </div>
          <div className="flex flex-col gap-3 ">
            <h1 className="text-[26pt] text-[#043c80] font-extrabold max-lg:text-[18pt] ">
              {" "}
              What my design skills include
            </h1>
            <p className="text-[12pt] text-[#565c64] font-[550] max-lg:text-[10pt]">
              {" "}
              I believe that the best designs are often the simplest ones. A
              simple design reduces cognitive overload and improves the user
              experience, making it easier for users to understand and interact
              with the content.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[11pt] font-semibold">User experience</p>
              <input
                id="range"
                type="range"
                value="80"
                className="range-input w-[80%] h-[0.3rem]  bg-[#7986d5] rounded-lg "
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[11pt] font-semibold">User Interface</p>
              <input
                id="range"
                type="range"
                value="90"
                className="range-input w-[80%] h-[0.3rem]  bg-[#1937f9] rounded-lg "
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[11pt] font-semibold">Web Design</p>
              <input
                id="range"
                type="range"
                value="73"
                className="range-input w-[80%] h-[0.3rem]  bg-[#1937f9] rounded-lg "
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[11pt] font-semibold">Mobile Design</p>
              <input
                id="range"
                type="range"
                value="70"
                className="range-input w-[80%] h-[0.3rem]  bg-[#1937f9] rounded-lg "
              />
            </div>
          </div>
        </div>

        <div className=" lg:w-[50%] max-lg:w-[100vw] h-max flex  gap-20 max-sm:gap-7 justify-center">
          <div className="flex flex-col gap-14 max-lg:gap-7 ">
            <div className="shadow-inner shadow-[#c8d5d6] gap-3 bg-[#dff2fb] rounded-lg w-[11rem] h-[11rem] max-lg:w-max max-lg:h-max max-sm:h-[7rem] max-sm:w-[8rem]  flex lg:flex-col max-lg:p-5 items-center justify-center ">
            <img className="h-14 w-14" src={ui}/>
              <h1 className="font-bold text-[#242348] max-sm:text-[7pt]"> User Interface</h1>
            </div>
            <div className="shadow-inner shadow-[#d7dbdb] gap-3 max-lg:w-max max-lg:h-max max-sm:h-[7rem] max-sm:w-[8rem]  rounded-lg w-[11rem] h-[11rem] flex lg:flex-col max-lg:p-5 items-center justify-center ">
            <img className="h-14 w-14" src={ux}/>
              <h1 className="font-bold text-[#242348] max-sm:text-[7pt]"> User Experience</h1>
            </div>
          </div>
          <div className="flex  flex-col gap-14 max-lg:gap-7  ">
            <div className="shadow-inner shadow-[#bec8c9] gap-3 rounded-lg max-lg:w-max max-lg:h-max max-sm:h-[7rem] max-sm:w-[8rem] w-[11rem] h-[11rem]  mt-0 flex lg:flex-col max-lg:p-5 items-center justify-center ">
            <img className="h-14 w-14" src={mobile}/>

              <h1 className="font-bold text-[#242348] max-sm:text-[7pt]"> Mobile Design</h1>
            </div>
            <div className="shadow-inner shadow-[#c8d5d6] max-lg:w-max max-lg:h-max max-sm:h-[7rem] max-sm:w-[8rem] gap-3 bg-[#dff2fb]  rounded-lg w-[11rem] h-[11rem] flex lg:flex-col max-lg:p-5 items-center justify-center  ">
            <img className="h-14 w-14" src={desktop}/>

              <h1 className="font-bold text-[#242348] max-sm:text-[7pt]"> Web Design</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
