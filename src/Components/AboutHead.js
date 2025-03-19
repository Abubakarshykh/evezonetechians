import Image from "next/image";

const heading = "About Us";

const paragraphText = [
  "Our commitment is to elevate your digital journey, unlocking limitless possibilities.",
  "In shaping a future where technology transforms visions into reality."
];

export default function AboutHead() {
  return (
    <section className="relative w-full h-[550px] border-b border-[#FFAD00] flex items-center justify-center">
      {/* Background Image with Dull Brightness */}
      <div className="absolute inset-0">
        <Image
          src="/Aboutus/head_new.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-60"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative text-center text-white z-10 tracking-wider">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-4">{heading}</h2>

        {/* Paragraph */}
        <p className="text-2xl font-normal leading-relaxed">
          {paragraphText.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
