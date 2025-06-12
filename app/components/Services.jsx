import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a frontend developer from california, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 font-semibold text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-white/80">
              {description}
            </p>
            <div className="flex items-center gap-2 text-sm mt-5">
              <a href={link}>Read more</a>
              <Image src={assets.right_arrow} alt="arrow" className="w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
