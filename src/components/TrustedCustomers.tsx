import Image from "next/image";
import logoIcon1 from "../../public/icons/Logo.png";
import logoIcon2 from "../../public/icons/Logo (1).png";
import logoIcon3 from "../../public/icons/Logo (2).png";
import logoIcon4 from "../../public/icons/Logo (3).png";
import logoIcon5 from "../../public/icons/Logo (4).png";
import logoIcon6 from "../../public/icons/Logo (5).png";
import logoIcon7 from "../../public/icons/Logo (6).png";
import logoIcon8 from "../../public/icons/Logo (7).png";

const TrustedCustomers = () => {
  return (
    <div className="text-center pb-16">
      <h1 className="text-white text-[24px] mb-16 lg:my-16">Trusted by nearly 5000+ paying customers</h1>
      <div className="grid gap-8 lg:space-y-8">
        <div className="grid gap-8 lg:flex md:flex justify-center lg:gap-16 md:gap-16 opacity-50">
          <Image src={logoIcon1} alt="logo-icon" />
          <Image src={logoIcon2} alt="logo-icon" />
          <Image src={logoIcon3} alt="logo-icon" />
          <Image src={logoIcon4} alt="logo-icon" />
        </div>
        <div className="grid gap-8 lg:flex md:flex justify-center lg:gap-28 md:gap-28 opacity-50">
          <Image src={logoIcon5} alt="logo-icon" />
          <Image src={logoIcon6} alt="logo-icon" />
          <Image src={logoIcon7} alt="logo-icon" />
          <Image src={logoIcon8} alt="logo-icon" />
        </div>
      </div>
    </div>
  );
};

export default TrustedCustomers;
