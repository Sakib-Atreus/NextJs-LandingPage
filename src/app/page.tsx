import Banner from "@/components/Banner";
import ExcitingTools from "@/components/ExcitingTools";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PremiumPurchase from "@/components/PremiumPurchase";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import TrustedCustomers from "@/components/TrustedCustomers";

const HomePage = () => {
  return (
    <div className="max-w-full mx-auto bg-gradient-to-l from-[#12141D] via-[#1d0f29b2] to-[#12141D] bg-opacity-70 lg:px-32">
      <Navbar/>
      <Banner/>
      <TrustedCustomers/>
      <Section/>
      <ExcitingTools/>
      <Testimonials/>
      <PremiumPurchase/>
      <Footer/>
    </div>
  );
};

export default HomePage;