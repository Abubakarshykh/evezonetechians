import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full pt-[5rem] pb-10 bg-[#FFAD00] border-t-4 border-[#F9E68C] p-6 text-lg font-bold text-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/footer.png')" }}
      ></div>

      {/* Background Image Positioned to the Right */}
      <Image 
        src="/images/footer_bg.png" 
        width={300}
        height={412}
        alt="Background Image"
        className="absolute right-5 bottom-10 opacity-100 mix-blend-normal pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-[10rem] grid grid-cols-3 gap-8 items-center relative">
        {/* Left-aligned Column */}
        <div className="text-left w-[496px] h-[150px]">
          <Image src="/images/Vector 1_black.png" width={200} height={200} alt="Footer_Vector" />
          <p className="mt-4 text-gray-700">Simplify, Organize, and Beautify with Evzone Tech.</p>
        </div>

        {/* Company & Support Section */}
        <div className="col-span-2 flex justify-end w-full" dir="ltr">
          <div className="grid grid-cols-2 gap-20 pl-20 text-[#222222] border-l-2 border-[#222222]">
            
            {/* Company Section */}
            <div className="text-left">
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-1 text-sm font-medium leading-6">
                <li><Link href="/aboutus">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="text-left">
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-1 text-sm font-medium leading-6">
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center grid grid-cols-3 gap-x-2 mt-10 pt-20">
        <div className="border border-[#222222] rounded-full w-full"></div>
        <div className="flex items-center justify-center font-normal text-[#222222]">&copy; 2023 | Evzone Tech Support. All rights reserved</div>
        <div className="border border-[#222222] rounded-full w-full bg-[#222222]"></div>
      </div>



    </footer>
  );
}
