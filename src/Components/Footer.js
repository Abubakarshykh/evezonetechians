import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-6 text-white bg-[#FFAD00] border-t-4 border-[#F9E68C] text-lg font-bold text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center w-full h-full brightness-20" 
     style={{ backgroundImage: "url('/images/footerS.jpg')" }}>
</div>
      {/* Footer Content Grid */}
      <div className="max-w-8xl mx-auto px-12 md:px-[10rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-8 items-center relative z-10">
        {/* Left-aligned Column */}
        <div className="text-left w-full">
          <Image 
            src="/images/Vector 1.png" 
            width={200} 
            height={200} 
            alt="Footer_Vector" 
            className="w-32 md:w-48" 
          />
          <p className="mt-4 text-md sm:text-md">
            Simplify, Organize, and Beautify with Evzone Tech.
          </p>
        </div>

        {/* Company & Support Section */}
        <div className="col-span-1 flex md:justify-end w-full">
          <div className="grid grid-cols-2 gap-10 sm:gap-20 border-l-2 border-white pl-6 sm:pl-20">
            {/* Company Section */}
            <div className="text-left">
              <h3 className="font-boldest mb-2 text-2xl">Company</h3>
              <ul className="space-y-2 text-md font-medium leading-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/aboutus">About Us</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="text-left">
              <h3 className="font-boldest mb-2 text-2xl">Support</h3>
              <ul className="space-y-2 text-md font-medium leading-6">
                <li><Link href="/Contact">ContactUs</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Subscribe Section */}
        <div className="text-right w-full">
          <div className="">
            <h3 className="font-bold mb-4 text-3xl">Follow Us</h3>
            <div className="flex justify-end space-x-4 mb-4 pb-2">
              <a href="#" className="text-white text-2xl hover:text-blue-800"><FaFacebookF /></a>
              <a href="#" className="text-white text-2xl hover:text-purple-600"><FaInstagram /></a>
              <a href="#" className="text-white text-2xl hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-white text-2xl hover:text-blue-900"><FaLinkedinIn /></a>
              <a href="#" className="text-white text-2xl hover:text-gray-900"><FaGithub /></a>
            </div>
            <a href="mailto:queries@evzonetech.com"
              className="inline-block w-[50%]  text-center hover:bg-white text-black font-bold py-2 px-4 rounded-xl bg-[#FFAD00] transition duration-300">
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="grid grid-cols-3 gap-x-2 mt-10 pt-10 items-center text-center">
        <div className="border border-white rounded-full w-full z-10"></div>
        <div className="font-bold text-sm sm:text-lg z-10">
          &copy; 2023 | Evzone Tech Support. All rights reserved
        </div>
        <div className="border border-white rounded-full w-full bg-[#222222] z-10"></div>
      </div>
    </footer>
  );
}
