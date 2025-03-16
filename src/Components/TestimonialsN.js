"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty("--animation-duration", speedMap[speed]);
    }
  };

  return (
    <>
      <div className="text-white w-full py-6 my-6 md:my-10 bg-[linear-gradient(114.53deg,#222222_0%,#FFAD00_122.58%)]">
      <div className="text-center space-y-6">
        <h3 className="text-xl font-semibold tracking-wider uppercase opacity-90">
          Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
      </div>
        <div
          ref={containerRef}
          className={cn(
            "relative max-w-full h-full pb-20 items-center flex overflow-hidden  ",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex min-w-full shrink-0 gap-10 pt-20 w-max flex-nowrap",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                className="relative w-[350px] sm:max-w-[350px] md:max-w-[650px] max-w-full rounded-4xl border border-white backdrop-blur-lg px-6 py-10  md:w-[450px] text-white"
              >
                <div className="">
                  
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                  />
                </div>
                <blockquote className="mt-8 text-center">
                  <p className="text-md leading-[1.6] tracking-wider">{item.quote}</p>
                  <div className="mt-4 flex flex-col">
                    <span className="text-xl font-bold text-white">{item.name}</span>
                    <span className="text-xs text-white">{item.title}</span>
                  </div>
                </blockquote>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfiniteMovingCards;
