"use client";

import Image from "next/image";

export default function MeetTheLeaders() {
  const leaders = [
    { name: "Yousuf Murad", role: "Polemarch", title: "War Leader", image: "/Aboutus/Yousuf.png" },
    { name: "Rizwan Waseem", role: "Strategos", title: "General", image: "/Aboutus/Rizwan.png" },
    { name: "Irtiza Sheikh", role: "Hipparch", title: "Cavalry Commander", image: "/Aboutus/Irtiza.png" },
  ];

  return (
    <section className="bg-transparent text-white py-16 px-6">
      <div className="text-center mb-20">
        <h1 className="text-[#CACACA] text-4xl md:text-5xl font-bold my-6">
          MEET <span className="text-[#ffffff]">THE LEADERS</span>
        </h1>
      </div>

      {/* Leader Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`p-3 sm:p-4 w-[260px] sm:w-[280px] md:w-[320px] text-center relative transition-all duration-300 rounded-lg shadow-lg ${
              index === 1 ? "md:mt-[-60px] lg:mt-[-80px] md:scale-105" : "mt-0"
            } hover:scale-110`}
            style={{
              background: `linear-gradient(114.55deg, rgba(255, 255, 255, 0.15) 2.13%, rgba(255, 255, 255, 0) 98.14%)`,
              backdropFilter: "blur(10px)",
              border: "0.5px solid rgba(216, 216, 216, 0.3)",
            }}
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg">
              <Image
                src={leader.image}
                alt={leader.name}
                width={240}
                height={280}
                className="w-full h-full object-contain grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-white mt-3 sm:mt-4">{leader.name}</h3>
            <p className="text-[#FFAD00] text-xs sm:text-sm font-bold">{leader.role}</p>
            <p className="text-white text-xs sm:text-sm font-bold">{leader.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
