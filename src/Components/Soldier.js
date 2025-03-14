import Image from "next/image";

const headingText = [
  "We are Evzone,"
];

export default function Soldier() {
  return (
    <section className="flex w-full h-screen items-center">
      {/* Text area */}
      <div className="w-[45%] pl-[3.5rem]">
        <div className="pl-10">
          <h1 className="font-bold text-4xl leading-tight text-white">
            {headingText.map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
          </h1>
          <div className="text-xl tracking-wider text-gray-300 leading-7 mt-4">
          Our commitment is to elevate your digital<br/> journey, unlocking limitless possibilities<br/>
           visions into reality than be   <br/>
           <div className="text-[#FFAD00]">visions into reality. Our<br/> commitment is to elevate your digital<br/> journey, unlocking limitless possibilities.</div>In shaping a future where technology<br/> transforms  <br/>
In shaping a future where technology<br/> transforms visions into reality.
          </div>
        </div>
      </div>

      {/* Image area */}
      <div className="w-[55%] relative h-[600px]">
        <Image
          src="/Aboutus/Soldier_new.png"
          alt="Soldier Image"
          width={500}
          height={600}
          layout="transit"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
