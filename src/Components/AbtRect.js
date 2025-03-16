import Image from "next/image";

export default function ImageWithText() {
  return (
    <div className="relative flex items-center justify-center w-full md:h-[400px] px-4">
      {/* Custom Clipped Image with Shadow */}
      <div 
        className="relative w-full sm:w-[80%] md:w-[45%] h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden 
                   clip-path-custom"
      >
        <Image
          src="/Aboutus/rectangle (2).png"
          alt="Background"
          width={500}
          height={600}
          objectFit="cover"
          className="shadow-[0px_1px_20px_0px_#FFAD00] w-full h-full"
        />
        {/* Overlay Text with Glassmorphism */}
        <div
          className="absolute inset-18 flex flex-col items-center justify-center text-center
                     bg-opacity-0 backdrop-blur-none bg-white/10 shadow-[0px_4px_4px_6px_#0000008C] 
                     p-4 sm:p-6 rounded-lg"
        >
          <h2 className="text-white text-sm sm:text-lg font-semibold">
            Feeling weighed down by<br /> thoughts that shouldn&apos;t be<br /> weighing you down?
          </h2>

          <button
            className="mt-3 sm:mt-4 text-sm sm:text-md px-4 sm:px-6 py-2 sm:py-3 bg-[#FFAD00] 
                       rounded-md text-[#222222] font-bold shadow-lg transform skew-x-[-20deg] 
                       relative overflow-hidden"
          >
            <div className="inline-block transform skew-x-[20deg]">
              Reach Out, We&apos;re Ready!
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
