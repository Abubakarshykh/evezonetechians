"use client";
import Image from "next/image";

export default function GlassmorphismGrid() {
  const tools = [
    { name: "Playwright", img: "/Svgs/Svg_1.svg" },
    { name: "Rest Assured", img: "/Svgs/Svg_2.svg" },
    { name: "GitHub", img: "/Svgs/Svg_3.svg" },
    { name: "Selenium", img: "/Svgs/Svg_4.svg" },
    { name: "Test Rigor", img: "/Svgs/Svg_5.svg" },
    { name: "Jira", img: "/Svgs/Svg_6.svg" },
    { name: "Protractor", img: "/Svgs/Svg_7.svg" },
    { name: "Katalon", img: "/Svgs/Svg_8.svg" },
    { name: "Jenkins", img: "/Svgs/Svg_9.svg" },
    { name: "Gherkins", img: "/Svgs/Svg_10.svg" },
    { name: "TypeScript", img: "/Svgs/Svg_11.svg" },
    { name: "Postman", img: "/Svgs/Svg_12.svg" },
    { name: "JavaScript", img: "/Svgs/Svg_13.svg" },
    { name: "Python", img: "/Svgs/Svg_14.svg" },
    { name: "Cypress", img: "/Svgs/Svg_15.svg" },
    { name: "Appium", img: "/Svgs/Svg_17.svg" }
  ];

  return (
    <section className="w-full py-16 px-6 flex justify-center">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:max-w-6xl">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="md:w-[276px] md:h-[157px] transition-all duration-300 
                      bg-white/10 border-white backdrop-blur-lg border-3 
                      rounded-lg flex flex-col items-center justify-center p-4 
                      shadow-lg cursor-pointer 
                      hover:bg-[#FFAD00] hover:shadow-xl"
          >
            <Image
  src={tool.img}
  alt={tool.name}
  width={80}
  height={80}
  className="object-contain transition-all duration-300 
             brightness-0 invert-[54%] sepia-[10%] saturate-[800%] hue-rotate-[0deg]
             hover:filter-none"
/>

            <p className="text-white mt-2 font-semibold">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
