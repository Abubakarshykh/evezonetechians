  "use client";
  import { motion } from "framer-motion";
  import { useEffect, useState } from "react";

  export default function Services() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    return (
      <div className="relative py-12 max-w-full">
        {/* Title Section */}
        <div className="text-center text-white">
          <h1 className="text-[#CACACA] text-4xl md:text-5xl font-bold my-6">
            SERVICES <span className="text-[#ffffff]">WE PROVIDE</span>
          </h1>
          <p className="text-gray-300 text-md md:text-lg">
            Delivering excellence through innovation, strategy, and unwavering <br className="hidden md:block" /> commitment.
          </p>
        </div>

        {/* SVG Curved Line */}
        <div className="absolute hidden md:block top-1/2 left-0 w-full -translate-y-1/2">
          <svg className="w-full h-[120px] md:h-[180px]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#FFAD00" strokeWidth="30" d="M0,160 C360,100 720,200 1440,120" />
          </svg>
        </div>

        {/* Service Circles - Always in a Row */}
        <div className="relative w-full max-w-screen-lg mx-auto grid grid-cols-3 md:grid-cols-5 justify-center gap-6 md:gap-10 mt-10">
          {[
            { name: "FUNCTIONAL TESTING", icon: "/images/G_1.png" },
            { name: "TEST AUTOMATION", icon: "/images/G_2.png" },
            { name: "API TESTING", icon: "/images/G_3.png" },
            { name: "SAP TESTING", icon: "/images/G_4.png" },
            { name: "PERFORMANCE TESTING", icon: "/images/G_5.png" }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ y: 30 }}
              animate={{ y: [0, -5, 0], x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: index * 0.2 }}
            >
              <div
                className="w-28 h-28 md:w-36 md:h-36 bg-[#222222] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-[#DF9700]"
                style={{ boxShadow: "3px 8px 10px 10px rgba(0,0,0,0.3)" }}
              >
                <img src={service.icon} alt={service.name} className="w-[80%] h-[80%] object-contain rounded-full" />
              </div>
              <p className="text-white text-xs md:text-sm font-medium mt-2 text-center">{service.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Second Curved Line */}
        <div className="absolute hidden md:block top-[76%] left-0 w-full -translate-y-1/2">
          <svg className="w-full h-[120px] md:h-[180px]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#FFAD00" strokeWidth="30" d="M0,200 C360,160 720,240 1440,180" />
          </svg>
        </div>

        {/* Second Row of Services */}
        <div className="relative w-full max-w-screen-lg mx-auto grid grid-cols-3 md:grid-cols-5 justify-center gap-6 md:gap-10 mt-10">
          {[
            { name: "MOBILE APP TESTING", icon: "/images/G_6.png" },
            { name: "SECURITY TESTING", icon: "/images/G_7.png" },
            { name: "ACCESSIBILITY TESTING", icon: "/images/G_8.png" },
            { name: "AGILE TESTING", icon: "/images/G_9.png" },
            { name: "ERP TESTING", icon: "/images/G_10.png" }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ y: 30 }}
              animate={{ y: [0, -5, 0], x : [0 , 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: index * 0.2 }}
            >
              <div
                className="w-28 h-28 md:w-36 md:h-36 bg-[#222222] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-[#DF9700]"
                style={{ boxShadow: "3px 8px 10px 10px rgba(0,0,0,0.3)" }}
              >
                <img src={service.icon} alt={service.name} className="w-[80%] h-[80%] object-contain rounded-full" />
              </div>
              <p className="text-white text-xs md:text-sm font-medium mt-2 text-center">{service.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
