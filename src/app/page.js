"use client"; // Marks this as a client-side component

import { useState, useEffect } from "react";
import Preloader from "@/Components/Preloader"; 
import Header from "@/Components/Header";
import Services from "@/Components/Services";
import TestimonialsN from "@/Components/TestimonialsN";
import OurProjects from "@/Components/OurProjects";
import InfiniteMovingCards from "@/Components/TestimonialsN";

export default function Home() {
  const testimonials = [
    {
      image: "/images/test_1.png",
      quote: "DevNest delivered a top-notch website—visually stunning, user-friendly, and on time. Their seamless collaboration and commitment to excellence set them apart in web development.",
      name: "Mike Torello"
      // title: "CEO, Company A",
    },
    {
      image: "/images/test_L.png",
      quote: "DevNest delivered a top-notch website—visually stunning, user-friendly, and on time. Their seamless collaboration and commitment to excellence set them apart in web development.",
      name: "Rick Wright"
      // title: "Marketing Director, Company B",
    },
    {
      image: "/images/test_R.png",
      quote: "DevNest delivered a top-notch website—visually stunning, user-friendly, and on time. Their seamless collaboration and commitment to excellence set them apart in web development.",
      name: "Devon Miles"
      // title: "Freelancer",
    },
    {
      image: "/images/test_1.png",
      quote: "DevNest delivered a top-notch website—visually stunning, user-friendly, and on time. Their seamless collaboration and commitment to excellence set them apart in web development.",
      name: "Mike Torello"
      // title: "CEO, Company A",
    },
    {
      image: "/images/test_L.png",
      quote: "DevNest delivered a top-notch website—visually stunning, user-friendly, and on time. Their seamless collaboration and commitment to excellence set them apart in web development.",
      name: "Rick Wright"
    },
    {
      image: "/images/test_R.png",
      quote: "DevNest delivered a top-notch website—visually stunning, user-friendly, and on time. Their seamless collaboration and commitment to excellence set them apart in web development.",
      name: "Devon Miles"
    },
  ];
  

  return (
    <>
      {/* {loading ? (
      ) : ( */}
        <div className="bg-[#222222]">
          <Header />
          <Services />
          <InfiniteMovingCards items={testimonials} speed="normal" direction="left" />
          <OurProjects />
        </div> 
      {/* )} */}
    </>
  );
}
