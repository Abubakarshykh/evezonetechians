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
    <div className="relative w-full mb-8 pl-4 md:pl-12">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-16 md:py-24 text-white min-h-screen">
        {/* Left Content */}
        <div className="w-full md:w-[50%] space-y-6 text-center md:text-left z-20">
          <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight">
            {headingText.map((text, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </h1>
          
          <div className="flex flex-col md:flex-row items-center md:items-start pt-6 space-y-4 md:space-y-0 md:space-x-8">
            {/* About Us Button */}
            <a href="/aboutus" className="no-underline">
              <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#222222] to-[#FFAD00] hover:from-[#FFAD00] hover:to-[#222222] transition-all duration-300 shadow-md">
                About Us
              </button>
            </a>

            {/* Portfolio Button */}
            <a href="/portfolio" className="no-underline">
              <button className="px-8 py-3 text-white rounded-xl font-semibold bg-gradient-to-r from-[#222222] to-[#FFAD00] hover:from-[#FFAD00] hover:to-[#222222] transition-all duration-300 shadow-md">
                Portfolio
              </button>
            </a>
          </div>
        </div>

        {/* Right Content - SVG and Image */}
        <div className="hidden md:block absolute inset-0 md:right-0 w-full md:w-auto h-full flex justify-center md:justify-end items-center">
          {/* Background SVG for smaller screens */}
          <div className="absolute md:inset-0 w-full h-full md:hidden">
            <CutShapeSvg className="w-full h-full sm:w-auto sm:h-auto object-contain" />
          </div>
          
          {/* Full-width SVG for medium screens */}
          <div className="hidden md:block absolute top-0 right-0 w-full md:w-auto h-full z-10">
            <CutShapeSvg className="w-full md:w-auto h-full" />
          </div>
          
          {/* Main Image */}
          <Image
            src="/images/Header_img.png"
            alt="Warrior"
            width={600}
            height={500}
            className="absolute top-10 md:top-20 right-10 h-full z-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
