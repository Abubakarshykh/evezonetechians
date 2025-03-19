"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CutShapeSvg from "./CutShapeSvg";

export default function Header() {
  const headingText = [
    "Quality Assurance",
    "<br /> Quality Control",
    " and",
    "<br /> Testing &mdash; the",
    "Basics<br /> of Software",
    " Quality<br /> Management"
  ];

  return (
    <div className="relative w-full mb-30 md:mb-8 px-0 md:px-0">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-0 py-16 md:py-0 text-white min-h-screen">
        {/* Left Content */}
        <div className="w-full md:w-[50%] space-y-6 text-center md:text-left z-20 md:pl-30 md:pt-30 pt-15">
          <h1 className="text-4xl md:text-5xl text-white orbitron-text font-bold leading-tight">
            {headingText.map((text, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </h1>

          <div className="flex md:flex-row items-center md:items-start pt-2 space-y-0 space-x-6 justify-center md:space-y-0 md:space-x-8">
            {/* About Us Button */}
            <a href="/aboutus" className="no-underline">
              <button className="px-8 py-3 orbitron-text rounded-xl cursor-pointer font-semibold bg-[#FFAD00] hover:text-[#222222] duration-500 shadow-xl transform transition-transform hover:scale-110 hover:shadow-2xl"
                style={{ boxShadow: "2px 3px 3px 2px rgb(8, 8, 8)" }}>
                About Us
              </button>
            </a>

            {/* Portfolio Button */}
            <a href="/portfolio" className="no-underline">
              <button className="px-8 py-3 text-white rounded-xl cursor-pointer font-semibold bg-[#FFAD00] hover:text-[#222222] duration-500 shadow-md transform transition-transform hover:scale-110 hover:shadow-2xl"
                style={{ boxShadow: "2px 3px 3px 2px rgb(8, 8, 8)" }}>
                Portfolio
              </button>
            </a>
          </div>
        </div>

        {/* Right Content - Image & SVG */}
        <div className="relative md:block w-full md:w-auto h-full flex justify-center md:justify-end items-center">
          {/* Hide SVG on small screens */}
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-full md:w-auto h-full z-10">
            <CutShapeSvg className="w-full md:w-auto h-full" />
          </div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            className="mt-20 md:mt-0 absolute md:relative z-10"
          >
            <Image
              src="/images/Header_img.png"
              alt="Warrior"
              width={600}
              height={500}
              className="w-[63%] sm:w-[60%] md:w-[700px] lg:w-[800px] h-auto object-contain max-w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
