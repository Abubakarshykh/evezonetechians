import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-6 bg-[#FFAD00] border-t-4 border-[#F9E68C] text-lg font-bold text-center">
      {/* Background Image (Remains Visible) */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url('/images/footer.png')" }}
      ></div>

      {/* Right-Side Background Image (Responsive) */}
      <Image
        src="/images/footer_bg.png"
        width={300}
        height={412}
        alt="Background Image"
        className="absolute right-5 bottom-10 opacity-100 mix-blend-normal pointer-events-none hidden sm:block w-[200px] md:w-[300px]"
      />

      {/* Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-12 md:px-[10rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center relative">
        {/* Left-aligned Column */}
        <div className="text-left w-full">
          <Image 
            src="/images/Vector 1_black.png" 
            width={200} 
            height={200} 
            alt="Footer_Vector" 
            className="w-32 md:w-48" 
          />
          <p className="mt-4 text-gray-700 text-md sm:text-md">
            Simplify, Organize, and Beautify with Evzone Tech.
          </p>
        </div>

        {/* Company & Support Section */}
        <div className="col-span-2 flex md:justify-end  w-full">
          <div className="grid grid-cols-2 gap-10 sm:gap-20 text-[#222222] border-l-2 border-[#222222] pl-6 sm:pl-20">
            {/* Company Section */}
            <div className="text-left">
              <h3 className="font-bold mb-2 text-lg">Company</h3>
              <ul className="space-y-1 text-md font-medium leading-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/aboutus">About Us</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="text-left">
              <h3 className="font-bold mb-2 text-lg">Support</h3>
              <ul className="space-y-1 text-md font-medium leading-6">
                <li>Contact Us</li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="grid grid-cols-3 gap-x-2 mt-10 pt-10 items-center text-center">
        <div className="border border-[#222222] rounded-full w-full z-10"></div>
        <div className="text-[#222222] font-bold text-sm sm:text-lg z-10">
          &copy; 2023 | Evzone Tech Support. All rights reserved
        </div>
        <div className="border border-[#222222] rounded-full w-full bg-[#222222] z-10"></div>
      </div>
    </footer>
  );
}
