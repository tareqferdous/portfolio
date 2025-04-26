"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MdOutlineComputer } from "react-icons/md";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="Gradient Background"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href="/" className="flex items-center space-x-2">
          <div className="inline-flex items-center gap-2">
            <div className="bg-rose-600 p-2 rounded-md shadow-sm">
              <MdOutlineComputer className="text-white text-xl" />
            </div>
            <h1 className="bg-gradient-to-r from-black via-black to-rose-600 text-lg md:text-3xl font-semibold tracking-tight bg-clip-text text-transparent">
              Tareq
            </h1>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm opacity-50">
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="moon" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} className="w-3" alt="Contact" />
          </a>

          <button onClick={openMenu} className="block md:hidden">
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="block md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          {/* Close mobile menu */}
          <div className="absolute right-6 top-6">
            <button onClick={closeMenu} className="block md:hidden">
              <Image src={assets.close_black} alt="close" className="w-5" />
            </button>
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li className="mt-1">
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li className="mt-1">
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li className="mt-1">
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li className="mt-1">
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
