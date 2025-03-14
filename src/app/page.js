"use client"; // Marks this as a client-side component

import { useState, useEffect } from "react";
import Preloader from "@/Components/Preloader"; 
import Header from "@/Components/Header";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";
import OurProjects from "@/Components/OurProjects";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000); // Preloader for 3 sec
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : ( */}
        <div className="bg-[#222222]">
          <Header />
          <Services />
          <Testimonials />
          <OurProjects />
        </div> 
      {/* )} */}
    </>
  );
}
