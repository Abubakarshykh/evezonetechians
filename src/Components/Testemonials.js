"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Mike Torello", image: "/images/test_1.png", feedback: "DevNest delivered a top-notch website." },
  { name: "Rick Wright", image: "/images/test_2.png", feedback: "They transformed our vision into reality." },
  { name: "Sophia Lee", image: "/images/test_3.png", feedback: "Exceeded our expectations with dedication." },
  { name: "Jake Carter", image: "/images/test_4.png", feedback: "A fantastic experience!" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => nextTestimonial(), 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] py-10 my-10 px-6 bg-gray-900 text-white">
      <div className="text-center mb-10">
        <h3 className="text-lg font-semibold tracking-wide uppercase opacity-70">Testimonials</h3>
        <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
      </div>

      <div className="relative flex justify-center items-center overflow-hidden">
        <motion.div
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative flex gap-6 w-full max-w-6xl overflow-hidden"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`relative bg-white/10 border border-white backdrop-blur-lg rounded-2xl shadow-lg h-[270px] text-center transition-transform ${
                i === index ? "w-[40%] scale-105 z-10" : "w-[30%] scale-95 opacity-50"
              }`}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full border-4 border-yellow-500 object-cover"
                />
              </div>
              <p className="text-md text-gray-300 mt-12 px-2">{testimonial.feedback}</p>
              <h4 className="mt-6 text-xl font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center gap-6 py-10">
        <button
          onClick={prevTestimonial}
          className="bg-white/20 p-3 rounded-full backdrop-blur-md hover:bg-white/30 transition border border-gray-500"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-white/20 p-3 rounded-full backdrop-blur-md hover:bg-white/30 transition border border-gray-500"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
}
