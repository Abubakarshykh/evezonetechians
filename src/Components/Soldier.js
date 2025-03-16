import Image from "next/image";

const headingText = ["We are Evzones,"];

export default function Soldier() {
  return (
    <section className="flex w-full md:h-screen items-center px-6 md:px-10 lg:px-16">
      {/* Text area */}
      <div className="w-full md:w-[45%] md:pl-[3.5rem]">
        <div className="md:pl-10">
          <h1 className="font-bold text-3xl md:text-4xl leading-tight text-white">
            {headingText.map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
          </h1>
          <div className="text-base md:text-xl tracking-wider text-gray-300 leading-6 md:leading-7 mt-4">
            Our commitment is to elevate your digital <br className="hidden md:block" /> 
            journey, unlocking limitless possibilities. <br className="hidden md:block" />
            <span className="text-[#FFAD00]">
              Visions into reality. Our <br className="hidden md:block" />
              commitment is to elevate your digital <br className="hidden md:block" />
              journey, unlocking limitless possibilities.
            </span> 
            <br />
            In shaping a future where technology <br className="hidden md:block" />
            transforms visions into reality.
          </div>
        </div>
      </div>

      {/* Image area (Hidden on small screens) */}
      <div className="w-[55%] relative h-[600px] hidden md:block">
        <Image
          src="/Aboutus/Soldier_new.png"
          alt="Soldier Image"
          width={500}
          height={600}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
