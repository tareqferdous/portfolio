import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="inline-flex items-center space-x-1">
          <div className="flex items-center justify-center bg-lime-600 p-2 w-8 h-8 rounded-full shadow-sm text-lg md:text-2xl text-white font-bold">
            T
          </div>
          {isDarkMode ? (
            <h1 className="bg-gradient-to-r from-white via-white to-rose-600 text-lg md:text-3xl font-semibold tracking-wide bg-clip-text text-transparent">
              areq.
            </h1>
          ) : (
            <h1 className="bg-gradient-to-r from-black via-black  text-lg md:text-3xl font-semibold tracking-wide bg-clip-text text-transparent">
              areq.
            </h1>
          )}
        </div>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          tarekferdos@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Tareq Ferdous. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/tareqferdous">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/tareqferdous">
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/TareqFerdous17">
              X(Twitter)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
