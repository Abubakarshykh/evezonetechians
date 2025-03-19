"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Our_projects({ showAll = false }) {
  const router = useRouter();

  const projects = [
    {
      name: "Quality Assurance",
      description: "Delivering excellence through innovation,<br />strategy, and unwavering commitment.",
      logo: "/images/projects_2.png",
      bgColor: "bg-[#222222]",
      textColor: "text-[#FFAD00]",
      buttonBg: "shadow-xl text-[#222222] bg-[#FFAD00]",
    },
    {
      name: "Quality Assurance",
      description: "Delivering excellence through innovation,<br />strategy, and unwavering commitment.",
      logo: "/images/projects_2.png",
      bgColor: "bg-[#222222]",
      textColor: "text-[#FFAD00]",
      buttonBg: "shadow-xl text-[#222222] bg-[#FFAD00]",
    },
  ];

  if (showAll) {
    projects.push(
      {
        name: "Quality Assurance",
        description: "Delivering excellence through innovation,<br />strategy, and unwavering commitment.",
        logo: "/images/projects_2.png",
        bgColor: "bg-[#222222]",
        textColor: "text-[#FFAD00]",
        buttonBg: "shadow-xl text-[#222222] bg-[#FFAD00]",
      },
      {
        name: "Quality Assurance",
        description: "Delivering excellence through innovation,<br />strategy, and unwavering commitment.",
        logo: "/images/projects_2.png",
        bgColor: "bg-[#222222]",
        textColor: "text-[#FFAD00]",
        buttonBg: "shadow-xl text-[#222222] bg-[#FFAD00]",
      }
    );
  }

  return (
    <section className="w-full py-16 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-gray-400 font-semibold tracking-wider uppercase opacity-80">
          Our Projects
        </h2>
        <h3 className="text-lg font-bold text-white">
          We are Dedicated to Exceeding Your Expectations
        </h3>
      </div>

      <div className="space-y-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-full md:w-[1200px] h-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-12 group rounded-xl overflow-hidden transition-all duration-500 ${project.bgColor} hover:bg-[#FFAD00] shadow-lg`}
            style={{ boxShadow: "3px 10px 12px 5px rgb(8, 8, 8)" }}
          >
            {/* Background Image (Fixed) */}
            <Image
              src="/images/footer_bg.png"
              width={220}
              height={150}
              alt="Background Image"
              className="absolute right-20 bottom-0 opacity-90 mix-blend-normal pointer-events-none object-cover"
            />

            {/* Logo Section */}
            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <Image
                src={project.logo}
                alt="Project Logo"
                width={280}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Text Content Section */}
            <div className={`w-full md:w-2/3 text-center md:text-start md:pl-20 group-hover:text-[#222222] ${project.textColor} transition-all duration-500`}>
              <h1 className="text-xl md:text-3xl font-bold group-hover:text-[#222222]">{project.name}</h1>
              <p
                className="text-sm md:text-lg tracking-wider mt-2 leading-normal group-hover:text-[#222222]"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              <div className="mt-4 flex justify-center md:justify-start">
                <button className={`px-6 py-2 rounded-full tracking-wider font-medium transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:text-[#FFAD00] group-hover:bg-[#222222] ${project.buttonBg}`}>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-8 text-center">
          <button
            className="px-8 py-3 text-white rounded-xl cursor-pointer font-semibold bg-[#FFAD00] hover:text-[#222222] duration-500 shadow-md transform transition-transform hover:scale-110 hover:shadow-2xl"
            onClick={() => router.push("/portfolio")}
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
}
