import Image from "next/image";

export default function Arrow({ showOnAllScreens = false }) {
  return (
    <div className={`relative flex w-full h-[100px] mb-20 items-center justify-between ${showOnAllScreens ? "" : "md:hidden"}`}>
      {/* Right Arrow (Placed on the Left Side) */}
      <div className="w-1/2 z-30">
        <Image
          src="/Svgs/right_arrow.svg"
          alt="Right Arrow"
          width={500}
          height={50}
          className="w-full h-full object-cover z-50"
        />
      </div>

      {/* Left Arrow (Placed on the Right Side) */}
      <div className="w-1/2 z-30">
        <Image
          src="/Svgs/left_arrow.svg"
          alt="Left Arrow"
          width={500}
          height={50}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
