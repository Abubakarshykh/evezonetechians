import Image from "next/image";

export default function ImageWithText() {
  return (
    <div className="relative flex items-center justify-center w-full h-[400px]">
      {/* Custom Clipped Image */}
      <div className="relative w-[45%] h-[340px]">
        <Image
          src="/Portfolio/rectangle.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="clip-path-custom"
        />
        {/* Overlay Text with Glassmorphism */}
        <div
          className="absolute inset-18 flex flex-col items-center justify-center text-center p-6 
                     bg-opacity-10 backdrop-blur-[5px] rounded-lg"
        >
          <h2 className="text-white text-lg font-semibold">
  Feeling weighed down by<br /> thoughts that shouldn&apos;t be<br /> weighing you down?
</h2>

          <button
            className="mt-4 text-md px-6 py-3 bg-[#222222] rounded-md text-white shadow-lg 
                       transform skew-x-[-20deg] relative overflow-hidden"
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
