const Footer = () => {
  return (
    <div>
      <div className="grid lg:flex md:flex justify-between items-center bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] p-6 rounded-lg lg:px-12 md:px-12">
        <h1 className="text-white text-xl lg:text-2xl md:text-2xl font-semibold pb-2">
          It will help you improve your writing <br /> & bring ideas more c
          learly.
        </h1>
        <button className="btn border-none hover:bg-white hover-text-[#12141D] font-normal bg-white text-[#12141D]">
          Free 14 Days Trial
        </button>
      </div>

      <footer className="footer p-10 text-white mt-16">
        <nav className="space-y-2">
          <h6 className="font-semibold pb-3">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Works</a>
          <a className="link link-hover">Career</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="font-semibold pb-3">Help</h6>
          <a className="link link-hover">Customer Support</a>
          <a className="link link-hover">Delivery Details</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="font-semibold  pb-3">Resources</h6>
          <a className="link link-hover">Free eBooks</a>
          <a className="link link-hover">Development Tutorial</a>
          <a className="link link-hover">How to - Blog</a>
          <a className="link link-hover">Youtube Playlist</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="font-semibold pb-3">Links</h6>
          <a className="link link-hover">Free eBooks</a>
          <a className="link link-hover">Development Tutorial</a>
          <a className="link link-hover">How to - Blog</a>
          <a className="link link-hover">Youtube Playlist</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
