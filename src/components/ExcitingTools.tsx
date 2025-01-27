import Image from "next/image";
import toolsIcon1 from "../../public/toolsIcons/toolsIcon1.png";
import toolsIcon2 from "../../public/toolsIcons/toolsIcon2.png";
import toolsIcon3 from "../../public/toolsIcons/toolsIcon3.png";
import toolsIcon4 from "../../public/toolsIcons/toolsIcon4.png";
import toolsIcon5 from "../../public/toolsIcons/toolsIcon5.png";
import toolsIcon6 from "../../public/toolsIcons/toolsIcon6.png";
import toolsIcon7 from "../../public/toolsIcons/toolsIcon7.png";
import toolsIcon8 from "../../public/toolsIcons/toolsIcon8.png";
import Link from "next/link";

const ExcitingTools = () => {
  return (
    <div className="text-center">
      <h1 className="text-white text-[26px] lg:text-[36px] md:text[36px] font-semibold leading-tight mb-10">
        54 exciting writing tools
      </h1>
      <p className="mb-12 text-[12px] lg:text-[14px] md:text-[14px]">
        AI engines take information from various sources and read <br /> them
        like a human would do.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 justify-center gap-10">
        <div className="w-80 p-4 bg-[#282A37] rounded-xl shadow-md text-white">
          <div className="flex items-center mb-2">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={toolsIcon1} alt="Icon" width={32} height={48} />
            </div>
            {/* Title */}
            <h3 className="ml-4 text-lg font-semibold">Blog Headlines</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 ms-14 text-left">
            Write a better blog title with our A.I tool.
          </p>
        </div>
        <div className="w-80 p-4 bg-[#282A37] rounded-xl shadow-md text-white">
          <div className="flex items-center mb-2">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={toolsIcon2} alt="Icon" width={32} height={48} />
            </div>
            {/* Title */}
            <h3 className="ml-4 text-lg font-semibold">Blog Intros</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 ms-14 text-left">
            Generate a paragraph of blog content using Blog Intros tool
          </p>
        </div>
        <div className="w-80 p-4 bg-[#282A37] rounded-xl shadow-md text-white">
          <div className="flex items-center mb-2">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={toolsIcon3} alt="Icon" width={32} height={48} />
            </div>
            {/* Title */}
            <h3 className="ml-4 text-lg font-semibold">Blog Outline</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 ms-14 text-left">
            Need an attention-grabbing headline for your article?
          </p>
        </div>
        <div className="w-80 p-4 bg-[#282A37] rounded-xl shadow-md text-white">
          <div className="flex items-center mb-2">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={toolsIcon4} alt="Icon" width={32} height={48} />
            </div>
            {/* Title */}
            <h3 className="ml-4 text-lg font-semibold">Blog Conclusions</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 ms-14 text-left">
            Write a better conclusions with AI writing tool.
          </p>
        </div>
        <div className="w-80 p-4 bg-[#282A37] rounded-xl shadow-md text-white">
          <div className="flex items-center mb-2">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={toolsIcon5} alt="Icon" width={32} height={48} />
            </div>
            {/* Title */}
            <h3 className="ml-4 text-lg font-semibold">Content Rewriter</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 ms-14 text-left">
            Get AI writer to rewrite your sentence in a different way.
          </p>
        </div>
        <div className="w-80 p-4 bg-[#282A37] rounded-xl shadow-md text-white">
          <div className="flex items-center mb-2">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={toolsIcon6} alt="Icon" width={32} height={48} />
            </div>
            {/* Title */}
            <h3 className="ml-4 text-lg font-semibold">Product Description</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 ms-14 text-left">
            Need an attention-grabbing headline for your article?
          </p>
        </div>
        <div className="w-80 p-4 bg-[#282A37] rounded-xl shadow-md text-white">
          <div className="flex items-center mb-2">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={toolsIcon7} alt="Icon" width={32} height={48} />
            </div>
            {/* Title */}
            <h3 className="ml-4 text-lg font-semibold">
              PAS Copywriting Formula
            </h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 ms-14 text-left">
            Get AI writer to rewrite your sentence in a different way.
          </p>
        </div>
        <div className="w-80 p-4 bg-[#282A37] rounded-xl shadow-md text-white">
          <div className="flex items-center mb-2">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={toolsIcon8} alt="Icon" width={32} height={48} />
            </div>
            {/* Title */}
            <h3 className="ml-4 text-lg font-semibold">Company About Us</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 ms-14 text-left">
            Write a better blog title with our AI tool.
          </p>
        </div>
      </div>
      <div className="mt-16 pb-20 text-center">
        <Link href="" className="text-white">
          See all 54 available tools
        </Link>
        <hr className="bg-[#252835] border-1 border-[#252835] mt-20"/>
      </div>
    </div>
  );
};

export default ExcitingTools;
