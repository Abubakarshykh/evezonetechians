"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  // Handle scrolling but disable when menu is open
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobileMenuOpen) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Toggle menu & disable scrolling
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/aboutus" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 px-6 md:px-30 py-4 flex justify-between items-center  ${isMobileMenuOpen ? "bg-black" : isScrolled ? "backdrop-blur-xl bg-opacity-80 bg-white/10 shadow-md" : "bg-transparent"}`}
    >
      {/* ✅ Logo - Adjusted to Stay Properly Aligned */}
      <Link href="/" className="flex items-center">
        <Image src="/images/Vector 1.png" alt="Logo" width={80} height={80} className="cursor-pointer" />
      </Link>

      {/* ✅ Desktop Menu */}
      <ul className="hidden md:flex space-x-14 font-semibold">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`relative cursor-pointer transition-colors duration-300 text-white hover:text-[#FFAD00] ${
                pathname === link.path ? "text-yellow-400 font-bold" : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-300 ${
                  pathname === link.path ? "scale-x-100" : "hover:scale-x-100"
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* ✅ Contact Button (Desktop) */}
      <a href="/Contact" className="hidden md:block">
        <button className="px-4 py-2 h-[36px] w-[135px] rounded-[16px] text-[#222222] font-semibold bg-white">
          Contact Us
        </button>
      </a>

      {/* ✅ Mobile Menu Button (Positioned Correctly) */}
      <button
        className="md:hidden text-white z-50 relative flex items-center justify-center w-10 h-10"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* ✅ Fullscreen Mobile Menu with Background Image */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50 transition-all duration-300">
          {/* Background Overlay for Click Outside to Close */}
          <div className="absolute inset-0" onClick={toggleMobileMenu}></div>

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/footerS.jpg')" }}
          ></div>

          {/* Menu Content (Ref for Click Outside) */}
          <div ref={menuRef} className="relative text-white w-[90%] max-w-[400px] rounded-xl p-6 text-center">
            {/* ✅ Close Button (Same Position as Menu Button) */}
            <button
              className="absolute top-4 right-4 text-white text-2xl flex items-center justify-center w-10 h-10"
              onClick={toggleMobileMenu}
            >
              <X size={30} />
            </button>

            {/* ✅ Menu Links */}
            <ul className="flex flex-col space-y-6 text-lg font-semibold">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="block transition-colors duration-300 text-white hover:text-yellow-400"
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ✅ Contact Button */}
            <a href="/contact" className="mt-6 inline-block">
              <button className="cursor-pointer px-4 py-2 h-[36px] w-[135px] rounded-[16px] text-black font-semibold bg-white">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
