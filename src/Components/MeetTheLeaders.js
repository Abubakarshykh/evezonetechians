import Image from "next/image";

export default function MeetTheLeaders() {
  const leaders = [
    {
      name: "Yousuf Murad",
      role: "Polemarch",
      description:
        "As a frontman, I ensure seamless team excellence. My visionary strategies are molded in every project.",
      image: "/Aboutus/Yousuf.png",
    },
    {
      name: "Rizwan Waseem",
      role: "Strategos",
      description:
        "As Designers, lead teams to formulate solutions, weave new experiences, innovation, and reliability in every project.",
      image: "/Aboutus/Rizwan.png",
    },
    {
      name: "Irtiza Sheikh",
      role: "Hipparch",
      description:
        "As a frontman, I ensure seamless team excellence. My visionary strategies are molded in every project.",
      image: "/Aboutus/Irtiza.png",
    },
  ];

  return (
    <section className="bg-transparent text-white py-16 px-6">
      <div className="text-center mb-20">
        <h1 className="text-[#CACACA] text-5xl font-bold my-6">
          MEET <span className="text-[#ffffff]">THE LEADERS</span>
        </h1>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Our commitment is to elevate your digital journey, unlocking limitless
          possibilities in shaping a future where technology transforms visions
          into reality.
        </p>
      </div>

      {/* Leader Cards with Elevated Middle Card */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`bg-[#C4C4C421] p-4 rounded-lg shadow-lg w-[320px] text-center relative ${
              index === 1 ? "mt-[-100px]" : "mt-0"
            }`} // Middle card is elevated
          >
            <div className="relative w-full h-80">
              {" "}
              {/* Increased height for full image */}
              <Image
                src={leader.image}
                alt={leader.name}
                width={280} // Set fixed width
                height={320} // Increased height to show full image
                objectFit="contain" // Ensures full image is visible
                className="rounded-lg"
              />
            </div>
            <h3 className="font-bold text-lg text-white">
              &ldquo;{leader.name}&rdquo;
            </h3>
            <div className="text-[#FFAD00] text-center flex justify-center">
              <p className="text-sm max-w-[60%] rounded-xl font-bold">
                {leader.role}
              </p>
            </div>
            <p className="text-white mt-2 text-sm py-1 rounded-xl tracking-wider">
              {leader.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
