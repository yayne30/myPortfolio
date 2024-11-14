import {
  FigmaLogoIcon,
  SketchLogoIcon,
  GitHubLogoIcon,
  CodeIcon
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={70} height={70} className="text-[#3a3939] " />,
  <CodeIcon width={70} height={70} className="text-[#3a3939]" />,
  <SketchLogoIcon width={70} height={70} className=" text-[#3a3939]" />,
  <GitHubLogoIcon width={70} height={70} className="text-[#3a3939]" />,
  <CodeIcon width={70} height={70} className="text-[#3a3939]" />,
  <SketchLogoIcon width={70} height={70} className=" text-[#3a3939]" />,
  <GitHubLogoIcon width={70} height={70} className="text-[#3a3939]" />,
  <CodeIcon width={70} height={70} className="text-[#3a3939]" />,
  <SketchLogoIcon width={70} height={70} className=" text-[#3a3939]" />,
  <GitHubLogoIcon width={70} height={70} className="text-[#3a3939]" />,

];

const ToolKit = () => {
  return (
    <div className="h-max pb-10 mt-20">
      <div className="flex flex-col  items-center gap-5 mb-20 max-lg:mb-5 ">
        <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-[25pt] max-md:text-[20pt]"> My Development Tools </h1>
        <p className="font-light text-[15pt] max-md:text-[10pt] max-md:w-[100vw] text-center">
          Showcasing the <strong className="text-[#241fa4] font-extrabold">tools</strong> I use to build innovative solutions
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
