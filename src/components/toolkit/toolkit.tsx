import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={70} height={70} className="text-[#3a3939] " />,
  <FramerLogoIcon width={70} height={70} className="text-[#3a3939]" />,
  <SketchLogoIcon width={70} height={70} className=" text-[#3a3939]" />,
  <GitHubLogoIcon width={70} height={70} className="text-[#3a3939]" />,
  <FramerLogoIcon width={70} height={70} className="text-[#3a3939]" />,
  <SketchLogoIcon width={70} height={70} className=" text-[#3a3939]" />,
  <GitHubLogoIcon width={70} height={70} className="text-[#3a3939]" />,
  <FramerLogoIcon width={70} height={70} className="text-[#3a3939]" />,
  <SketchLogoIcon width={70} height={70} className=" text-[#3a3939]" />,
  <GitHubLogoIcon width={70} height={70} className="text-[#3a3939]" />,
];

const ToolKit = () => {
  return (
    <div className="h-max pb-10 mt-20">
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
        <div className="flex flex-col items-center gap-10">
          <div className="relative m-auto w-[60vw] max-lg:w-[90vw] h-max p-1 overflow-hidden rounded-2xl bg-[#d3e3fc]">
            <div className="animate-infinite-slider flex  h-full gap-10">
              {LOGOS.map((logo, index) => (
                <div
                  className="slide  flex w-[60px] items-center justify-center"
                  key={index}
                >
                  {logo}
                </div>
              ))}

              {LOGOS.map((logo, index) => (
                <div
                  className="slide flex w-[60px] items-center justify-center"
                  key={index}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ToolKit;
