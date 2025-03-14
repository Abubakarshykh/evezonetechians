"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative py-6">
      {/* Title Section */}
      <div className="text-center text-white">
        <h1 className="text-[#CACACA] text-5xl font-bold my-6">
          SERVICES <span className="text-[#ffffff]">WE PROVIDE</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Delivering excellence through innovation, strategy, and unwavering <br /> commitment.
        </p>
      </div>

      {/* SVG Curved Line */}
      <div className="absolute top-[45%] left-0 w-full -translate-y-1/2">
        <svg className="w-full h-[14rem]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#FFAD00" strokeWidth="40" d="M0,200 C130,200 140,240 660,160 C1280,220 1100,160 1440,220" />
        </svg>
      </div>

      {/* Services Positioned Along the Curve */}
      <div className="relative w-full h-[18rem]">
        {[
          { name: "FUNCTIONAL TESTING", icon: "/images/G_1.png", position: "top-[120px] left-[10%]" },
          { name: "TEST AUTOMATION", icon: "/images/G_2.png", position: "top-[110px] left-[28%]" },
          { name: "API TESTING", icon: "/images/G_3.png", position: "top-[80px] left-[45%]" },
          { name: "SAP TESTING", icon: "/images/G_4.png", position: "top-[100px] left-[62%]" },
          { name: "PERFORMANCE TESTING", icon: "/images/G_5.png", position: "top-[110px] left-[77%]" }
        ].map((service, index) => (
          <motion.div
          key={index}
          className={`absolute ${service.position} flex flex-col items-center`}
          initial={{ y: 50 }} // Remove opacity
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }} // Only wavy motion
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: index * 0.2 }}
        >
        
            <div
              className="w-40 h-40 bg-[#222222] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-[#222222] hover:to-[#FFAD00]"
              style={{ boxShadow: "3px 10px 12px 5px rgb(8, 8, 8)" }}
            >
              <img src={service.icon} alt={service.name} className="w-[80%] h-[80%] object-contain rounded-full" />
            </div>
            <p className="text-white text-sm font-medium mt-2 text-center">{service.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Second Curved Line */}
      <div className="absolute top-[77%] left-0 w-full -translate-y-1/2">
        <svg className="w-full h-[14rem]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#FFAD00" strokeWidth="50" d="M0,200 C130,200 140,240 660,160 C1280,220 1100,160 1440,220" />
        </svg>
      </div>

      {/* Second Row Services */}
      <div className="relative w-full h-[18rem]">
        {[
          { name: "MOBILE APP TESTING", icon: "/images/G_6.png", position: "top-[110px] left-[10%]" },
          { name: "SECURITY TESTING", icon: "/images/G_7.png", position: "top-[100px] left-[28%]" },
          { name: "ACCESSIBILITY TESTING", icon: "/images/G_8.png", position: "top-[70px] left-[44%]" },
          { name: "AGILE TESTING", icon: "/images/G_9.png", position: "top-[100px] left-[63%]" },
          { name: "ERP TESTING", icon: "/images/G_10.png", position: "top-[110px] left-[80%]" }
        ].map((service, index) => (
          <motion.div
          key={index}
          className={`absolute ${service.position} flex flex-col items-center`}
          initial={{ y: 50 }} // Remove opacity
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }} // Only wavy motion
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: index * 0.2 }}
        >
            <div
              className="w-40 h-40 bg-[#222222] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-[#222222] hover:to-[#FFAD00]"
              style={{ boxShadow: "3px 10px 12px 5px rgb(8, 8, 8)" }}
            >
              <img src={service.icon} alt={service.name} className="w-[80%] h-[80%] object-contain rounded-full" />
            </div>
            <p className="text-white text-sm font-medium mt-2 text-center">{service.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
