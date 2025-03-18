"use client";
import Image from "next/image";
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
              <button className="px-8 py-3 orbitron-text rounded-xl cursor-pointer font-semibold bg-gradient-to-r from-[#222222] to-[#FFAD00] hover:from-[#FFAD00] hover:to-[#222222] transition-all duration-300 shadow-xl"
              style={{ boxShadow: "2px 3px 3px 2px rgb(8, 8, 8)" }}>
                About Us
              </button>
            </a>

            {/* Portfolio Button */}
            <a href="/portfolio" className="no-underline">
              <button className="px-8 py-3 text-white rounded-xl cursor-pointer font-semibold bg-gradient-to-r from-[#222222] to-[#FFAD00] hover:from-[#FFAD00] hover:to-[#222222] transition-all duration-300 shadow-md"
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

          {/* Display Image Responsively */}
          <Image
            src="/images/Header_img.png"
            alt="Warrior"
            width={600}
            height={500}
            className="mt-20 md:mt-0 absolute md:relative w-[60%] sm:w-[60%] md:w-[700px] lg:w-[800px] h-auto z-10 object-contain max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
