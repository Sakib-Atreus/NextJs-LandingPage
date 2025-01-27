import Image from "next/image";
import resultFrame from "../../public/images/Frame1.png";
import ButtonGradient from "./Buttons/Button";
import card from "../../public/images/Card1.png";

const Section = () => {
  return (
    <div>
      {/* First Section */}
      <div className="grid lg:grid-cols-4 justify-center items-center max-w-[80%] mx-auto pb-12">
        <div className="col-span-2 lg:me-48 md:me-48 pt-20">
          <div className="bg-white rounded-lg p-4 text-black">
            <h1>Results</h1>
            <p className="text-[#818488] mb-5 mt-1">
              Here{"'"}s what our AI came up with.
            </p>
            <div className="h-[345px] overflow-y-clip">
              <div className="bg-slate-100 rounded-lg p-4 mb-4 text-sm">
                <p>
                  Pain: You are an e-commerce business, and you want to sell
                  your products all over the country, but you are confused about
                  how to handle sales tax.
                </p>
                <br />
                <p>
                  Agitate: You have no idea how much sales tax to charge your
                  customers in each state.
                </p>
                <br />
                <p>
                  Solution: Use TaxSol, our full stack sales tax solution, to
                  manage your sales tax for you!
                </p>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 text-sm">
                <p>
                  Pain: You are an e-commerce business, and you want to sell
                  your products all over the country, but you are confused about
                  how to handle sales tax.
                </p>
                <br />
                <p>
                  Agitate: You have no idea how much sales tax to charge your
                  customers in each state.
                </p>
                <br />
                <p>
                  Solution: Use TaxSol, our full stack sales tax solution, to
                  manage your sales tax for you!
                </p>
              </div>
              <Image
                className="relative -mt-[390px] -mx-28 lg:-mt-96 md:-mt-96 lg:ms-48 md:ms-48"
                src={resultFrame}
                alt="image"
              />
            </div>
          </div>
        </div>
        {/* second */}
        <div className="col-span-2 grid justify-center pt-16 lg:pt-16 md:pt-16">
          <h1 className="text-white text-[26px] lg:text-[36px] md:text[36px] font-semibold leading-tight mb-10">
            Create content efficiently <br /> and quickly with great AI <br />{" "}
            writing tools
          </h1>
          <p className="mb-12 text-[12px] lg:text-[14px] md:text-[14px]">
            150k+ users. No Credit Card Required. Pro designs and <br /> writing
            at no cost. Start for free. Ai Writer Tool | Generate <br /> text
            for ecom, social media, website, sales, blogs etc.
          </p>
          <ButtonGradient text="Start 14 Days Free Trial" />
        </div>
      </div>
      {/* Second Section */}
      <div className="grid  lg:grid-cols-4 md:grid-cols-4 justify-center items-center max-w-[80%] mx-auto pb-12">
        {/* second */}
        <div className="block lg:hidden md:hidden col-span-2 py-20">
          <Image src={card} alt="card"/>
        </div>
        {/*first */}
        <div className="col-span-2 grid justify-start">
          <h1 className="text-white text-[26px] lg:text-[36px] md:text[36px] font-semibold leading-tight mb-10">
          Write what you want to <br /> convey through clear, & <br /> authentic writing
          </h1>
          <p className="mb-12 text-[12px] lg:text-[14px] md:text-[14px]">
          AI-Writer is the most accurate content generation <br /> platform and writing tool that helps you transform <br /> your text into a completely personalized.
          </p>
          <ButtonGradient text="Start 14 Days Free Trial" />
        </div>
        {/* second */}
        <div className="hidden lg:block md:block col-span-2 py-20">
          <Image src={card} alt="card"/>
        </div>
      </div>
    </div>
  );
};

export default Section;
