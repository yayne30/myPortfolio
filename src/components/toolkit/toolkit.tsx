import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={70} height={70} className="text-slate-800" />,
  <FramerLogoIcon width={70} height={70} className="text-slate-800" />,
  <SketchLogoIcon width={70} height={70} className=" text-slate-800" />,
  <GitHubLogoIcon width={70} height={70} className="text-slate-800" />,
  <FramerLogoIcon width={70} height={70} className="text-slate-800" />,
  <SketchLogoIcon width={70} height={70} className=" text-slate-800" />,
  <GitHubLogoIcon width={70} height={70} className="text-slate-800" />,
  <FramerLogoIcon width={70} height={70} className="text-slate-800" />,
  <SketchLogoIcon width={70} height={70} className=" text-slate-800" />,
  <GitHubLogoIcon width={70} height={70} className="text-slate-800" />,
];

const ToolKit = () => {
  return (
    <div className="h-max pb-10 mt-20">
      <div className="flex flex-col  items-center gap-5  mb-10">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-[30pt] max-md:text-[25pt]"> Featured Projects </h1>
          <p className="font-light text-[16pt] max-md:text-[12pt]">
            Showcasing My Work: Innovative Solutions and Creative Projects
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-[300px] border-t-2  border-[#17173b] max-md:w-[200px]"></div>
          <div className="w-[300px] border-t-2 border-dashed border-[#17173b]  max-md:w-[200px]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 ">
        <div className="flex flex-col items-center gap-10">
          <div className="relative m-auto w-[60vw] h-[125px] overflow-hidden rounded-2xl bg-[#d3f4f5]">
            <div className="animate-infinite-slider flex  h-full gap-10">
              {LOGOS.map((logo, index) => (
                <div
                  className="slide flex w-[60px] items-center justify-center"
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
    </div>
  );
};

export default ToolKit;
