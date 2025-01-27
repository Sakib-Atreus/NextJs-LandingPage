import Image from "next/image";
import hotchpotch_logo from "../../public/images/hotchpotch.png";
import ButtonGradient from "./Buttons/Button";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-l from-[#12141D] via-[#1d0f29b2] to-[#12141D] bg-opacity-70 py-1">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-l from-[#12141D] via-[#1d0f29b2] to-[#12141D] bg-opacity-70 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Demos</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="text-xl">
          <Image
            src={hotchpotch_logo}
            width={78}
            height={42}
            alt="hotchpotch-logo"
          />
        </a>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-6">
            <li>
              <a>Demos</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn outline-none border-1 border-white text-white font-normal border-opacity-30">Sign in</button>
        <ButtonGradient text="Get Started Free"/>
      </div>
    </div>
  );
};

export default Navbar;
