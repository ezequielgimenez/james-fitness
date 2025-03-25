import { useState } from "react";
import logo from "../../assets/logo-gym.png";
import "../../index.css";
import menu from "../../assets/menu.png";

export default function HeaderComponent() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <header className="flex items-center justify-between px-8 py-2">
        <div className="cursor-pointer">
          <img className="w-[100px] h-[90px]" src={logo} alt="Logo-header" />
        </div>

        <div onClick={openNav} className="block cursor-pointer lg:hidden ">
          <img className="w-[30px] h-[30px]" src={menu} alt="" />
        </div>

        <div
          className={`${
            showNav ? "flex" : "hidden"
          } inset-0 h-screen flex-col items-center gap-y-8 fixed top-0 left-0 opacity-90 bg-[#252525] z-50`}
        >
          <div className="flex w-full justify-end pr-4 pt-4">
            <button onClick={openNav}>🗙</button>
          </div>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Qualifications</a>
          <a href="">Services</a>
          <a href="">F&Q</a>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-8 ">
          <a href="">Home</a>
          <a href="#aboutme">About</a>
          <a href="#qualification">Qualifications</a>
          <a href="#services">Services</a>
          <a href="#question">F&Q</a>
          <a href="#started">
            <button className="cursor-pointer bg-[#BF3131] p-2 text-white rounded-[12px] hover:bg-[#d77f7f] transition-all duration-500 ease-in-out">
              Get Started
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
