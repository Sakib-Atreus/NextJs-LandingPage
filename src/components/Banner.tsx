import Image from "next/image";
import ButtonGradient from "./Buttons/Button";
import videoPlay from "../../public/images/videoPlay.png";

const Banner = () => {
  return (
    <div className="text-center h-[522px]">
      <h1 className="text-white text-4xl lg:text-6xl md:text-5xl font-medium my-8 lg:my-12 md:my-12 mt-28 lg:mt-44 md:mt-32">
        Write better <br />
        content for your <br />{" "}
        <span className="relative text-transparent bg-clip-text bg-gradient-to-l from-[#FFC947] to-[#FC6739]">
          Facebook Ads
          <span
            className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-l from-[#FFC947] to-[#FC6739]"
            style={{ content: '""' }}
          ></span>
        </span>
      </h1>
      <p className="text-[#FAFAFA] text-sm lg:text-md md:text-md opacity-70 font-light lg:mb-12 md:mb-12 mb-6">Artificial intelligence writting tool helps you create blogs, <br /> social media websites and much more.</p>
      <ButtonGradient text="Start 14 Days Free Trial"/>
      <div className="flex gap-2 justify-center mt-6">
        <Image height={16} width={24} src={videoPlay} alt="video-play"/>
        <p>Watch A Demo</p>
      </div>
      <hr className="bg-[#252835] border-1 border-[#252835] mt-24"/>
    </div>
  );
};

export default Banner;
