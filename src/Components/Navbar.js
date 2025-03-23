"use client"; // Required for React state handling in Next.js App Router

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for open/close menu

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current path

  // Define default color scheme
  const pageColors = {
    "/": { bgColor: "", textColor: "text-white font-bold", hoverColor: "hover:text-[#FFAD00]", activeColor: "text-white font-bold" },
    "/aboutus": { bgColor: "", textColor: "text-white", hoverColor: "hover:text-[#FFAD00]", activeColor: "text-white font-bold" },
    "/portfolio": { bgColor: "", textColor: "text-white", hoverColor: "hover:text-[#FFAD00]", activeColor: "text-white font-bold" },
    "/privacy": { bgColor: "", textColor: "text-white", hoverColor: "hover:text-[#FFAD00]", activeColor: "text-white font-bold" },
  };

  // Get current page color scheme or default to home
  let { bgColor, textColor, hoverColor, activeColor } = pageColors[pathname] || pageColors["/"];

  // Change text color when scrolling or on mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply white text when scrolling down or on small screens
  if (pathname !== "/") {
    textColor = isScrolled || isMobileMenuOpen ? "text-white backdrop-blur-xl" : textColor;
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/aboutus" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <nav
      className={`flex flex-col items-center py-4 fixed w-full top-0 z-50 transition-all duration-300 
        ${bgColor} ${isScrolled ? "backdrop-blur-xl bg-opacity-80 bg-white/10 shadow-md" : ""}`}
    >
      <div className="flex justify-between items-center w-full max-w-[85%]">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2">
          <Link href="/">
            <Image src="/images/Vector 1.png" alt="Logo" width={80} height={80} className="cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-14 font-semibold">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`relative cursor-pointer transition-colors duration-300 ${textColor} ${hoverColor} ${
                  pathname === link.path ? activeColor : ""
                }`}
              >
                {link.name}
                {/* Underline effect */}
                <span
                  className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-300 ${
                    pathname === link.path ? "scale-x-100" : "hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <a href="/Contact" className="no-underline">
          <button className="hidden md:block cursor-pointer px-4 py-2 h-[36px] w-[135px] rounded-[16px] text-[#222222] z-50 font-semibold bg-white">
            Contact Us
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 text-white backdrop-blur-lg py-6 transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 font-semibold">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`cursor-pointer transition-colors duration-300 text-white hover:text-gray-300 ${
                    pathname === link.path ? "text-yellow-400 font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <a href="/contact" className="no-underline">
              <button className="cursor-pointer px-4 py-2 h-[36px] w-[135px] rounded-[16px] text-black font-semibold bg-white">
                Contact Us
              </button>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
