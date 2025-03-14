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
    <>
      <div className="relative w-full mb-[2rem] pl-12">
        {/* Hero Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-between px-10 py-24 text-white min-h-screen">
          {/* Left Content */}
          <div className="w-[50%] space-y-6">
            <h1 className="text-5xl text-white pt-30 font-bold leading-tight">
              {headingText.map((text, index) => (
                <span key={index} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
            </h1>

            <div className="flex pt-6 space-x-8 pl-10 relative z-10">
              {/* About Us Button */}
              <a href="/aboutus" className="no-underline">
                <button
                  className="px-10 py-3 rounded-xl font-semibold cursor-pointer bg-gradient-to-r from-[#222222] to-[#FFAD00] 
                  hover:from-[#FFAD00] hover:to-[#222222] transition-all duration-300"
                  style={{ boxShadow: "2px 3px 3px 2px rgb(8, 8, 8)" }}
                >
                  About Us
                </button>
              </a>

              {/* Portfolio Button */}
              <a href="/portfolio" className="no-underline">
                <button
                  className="px-10 py-3 text-white rounded-xl cursor-pointer font-semibold bg-gradient-to-r from-[#222222] to-[#FFAD00] 
                  hover:from-[#FFAD00] hover:to-[#222222] transition-all duration-300"
                  style={{ boxShadow: "2px 3px 3px 2px rgb(8, 8, 8)" }}
                >
                  Portfolio
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Cut Shape + Image */}
          <div className="w-full h-full absolute right-0 flex justify-end items-center">
            <CutShapeSvg className="top-0 right-0 w-full h-full z-10" />

            <Image
              src="/images/Header_img.png"
              alt="Warrior"
              width={600}
              height={500}
              layout="intrinsic"
              className="absolute top-20 right-20 h-full z-10 object-contain"
            />

            {/* Floating Elements */}
            <div className="absolute top-0 left-10 bg-white p-2 rounded-full shadow-lg flex items-center">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full">X</span>
            </div>
            <div className="absolute top-10 right-50 bg-white p-2 rounded-full shadow-lg flex items-center">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full">Y</span>
              <img src="/path/to/avatar.png" alt="Avatar" className="w-6 h-6 rounded-full ml-2" />
            </div>
            <div className="absolute bottom-5 right-20 bg-white p-2 rounded-full shadow-lg flex items-center">
              <span className="bg-pink-600 text-white px-3 py-1 rounded-full">Z</span>
              <img src="/path/to/avatar2.png" alt="Avatar" className="w-6 h-6 rounded-full ml-2" />
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full">A</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
