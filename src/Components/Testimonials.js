"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mike Torello",
    image: "/images/test_R.png",
    feedback:
      "DevNest delivered a top-notch website—visually stunning, user-friendly, and on time. Their seamless collaboration and commitment",
  },
  {
    name: "Rick Wright",
    image: "/images/test_1.png",
    feedback:
      "The professionalism and expertise of DevNest were outstanding. They transformed our vision into reality with precision and creativity.",
  },
  {
    name: "Devon Miles",
    image: "/images/test_R.png",
    feedback:
      "We were impressed by DevNest’s commitment to quality. Their solutions were innovative.They transformed our vision into reality",
  },
  {
    name: "Sophia Lee",
    image: "/images/test_L.png",
    feedback:
      "DevNest’s team exceeded our expectations. Their attention to detail and dedication made our project a success.",
  },
  {
    name: "Jake Carter",
    image: "/images/test_1.png",
    feedback:
      "A fantastic experience! DevNest delivered exceptional results on time and with top-notch quality.",
  },
  {
    name: "Anastasia grey",
    image: "/images/test_1.png",
    feedback:
      "A fantastic experience! DevNest delivered exceptional results on time and with top-notch quality.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] py-10 my-10 px-6 bg-[linear-gradient(114.53deg,#222222_0%,#FFAD00_122.58%)] text-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h3 className="text-lg font-semibold tracking-wide uppercase opacity-70">
          Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
      </div>

      {/* Testimonials Wrapper */}
      <div className="relative flex justify-center items-center overflow-hidden">
        <motion.div
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative flex gap-6 w-full max-w-6xl overflow-hidden"
        >
          {testimonials.slice(index * 3, index * 3 + 3).map((testimonial, i) => (
            <div
              key={i}
              className="relative bg-white/10 border border-white backdrop-blur-lg  rounded-2xl shadow-lg w-1/3 h-[270px] text-center"
            >
             
              <div className="absolute bottom-45 left-1/2 transform -translate-x-1/2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full border-4 border-yellow-500 object-cover"
                />
              </div>
             
              <p className="text-md text-gray-300 mt-25 px-2">{testimonial.feedback}</p>
              
              <h4 className="mt-14 text-xl font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </motion.div>

       
      </div>
      <div className="relative flex items-center justify-center gap-0 space-x-10 py-10">
  {/* Navigation Buttons */}
  <button
    onClick={prevTestimonial}
    className="bg-white/20 p-3 rounded-full backdrop-blur-md hover:bg-white/30 transition border-1 border-[#DCDCDC] backdrop-blur-[64px]"
    style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"}}
  >
    <ChevronLeft className="w-8 h-8 text-white" />
  </button>
  <button
    onClick={nextTestimonial}
    className="bg-white/20 p-3 rounded-full backdrop-blur-md hover:bg-white/30 transition border-1 border-[#DCDCDC] backdrop-blur-[64px]"
    style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"}}
  >
    <ChevronRight className="w-8 h-8 text-white" />
  </button>
</div>

      
    </div>
  );
}