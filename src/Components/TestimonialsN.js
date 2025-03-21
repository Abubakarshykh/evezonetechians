"use client";

import { useRef } from "react";
import { cn } from "@/app/lib/utils";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons

const InfiniteMovingCards = ({ items, className }) => {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollerRef.current) {
      if (scrollerRef.current.scrollLeft === 0) {
        scrollerRef.current.scrollLeft = scrollerRef.current.scrollWidth;
      }
      scrollerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      if (
        scrollerRef.current.scrollLeft + scrollerRef.current.clientWidth >=
        scrollerRef.current.scrollWidth
      ) {
        scrollerRef.current.scrollLeft = 0;
      }
      scrollerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="text-white w-full pt-10 pb-10 my-6 md:my-10 bg-[linear-gradient(114.53deg,#222222_0%,#FFAD00_122.58%)]">
      <div className="text-center space-y-6 my-8">
        <h3 className="text-xl text-gray-400 font-semibold tracking-wider uppercase opacity-90">
          Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
      </div>
      <div className={cn("relative flex justify-center", className)}>
        <div ref={scrollerRef} className="flex overflow-x-hidden space-x-6 px-10 w-full max-w-full">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[350px] sm:max-w-[350px] md:max-w-[750px] max-w-full rounded-4xl border border-white bg-white/10 backdrop-blur-xl px-6 py-10 md:w-[450px] text-white flex-shrink-0"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <blockquote className="mt-12 text-center">
                <p className="text-md leading-[1.6] tracking-widest">{item.quote}</p>

                {/* Star Rating */}
                <div className="flex justify-center mt-4 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < item.rating ? (
                      <FaStar key={i} className="text-xl" /> // Filled star
                    ) : (
                      <FaRegStar key={i} className="text-xl" /> // Empty star
                    )
                  )}
                </div>

                {/* Name */}
                <div className="mt-4 flex flex-col">
                  <span className="text-xl font-bold text-white">{item.name}</span>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-20">
        <button
          className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white text-white rounded-full shadow-lg flex items-center justify-center"
          onClick={scrollLeft}
        >
          ◀
        </button>
        <button
          className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white text-white rounded-full shadow-lg flex items-center justify-center"
          onClick={scrollRight}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
